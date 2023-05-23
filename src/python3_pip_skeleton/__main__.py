import re
import shutil
from argparse import ArgumentParser
from configparser import ConfigParser
from pathlib import Path
from subprocess import STDOUT, CalledProcessError, call, check_output
from tempfile import TemporaryDirectory
from typing import Callable, Dict, List, Tuple

import tomli

from . import __version__

__all__ = ["main"]

# The url of the default skeleton module to pull from, a different skeleton
# url can be passed in with --skeleton-git-url
SKELETON_URL = "https://github.com/%s/python3-pip-skeleton"
# The name of the merge branch that will be created
MERGE_BRANCH = "skeleton-merge-branch"
# Extensions to change
CHANGE_SUFFIXES = [".py", ".rst", ".cfg", "", ".toml"]
# Files not to change where IGNORE_FILES[x] is a list of tuples where substitutions
# will be ignored in that file in any substring between the two strings.
# An empty list will ignore the whole file.
IGNORE_FILES: Dict[str, List[Tuple[str, str]]] = {
    "update-tools.rst": [],
    "test_boilerplate_removed.py": [
        ("import sys", "def test_module_summary"),
        ("One line description of your", "features and why people should use it"),
    ],
    "pin-requirements.rst": [],
    "0002-switched-to-pip-skeleton.rst:": [],
    "README.rst": [
        ("adopt this skeleton project see", "that describes what your module does")
    ],
}

SKELETON_ROOT_COMMIT = "ededf00035e6ccfac78946213009c1ecd7c110a9"


def git(*args, cwd=None) -> str:
    command = ["git"] + [str(x) for x in args]
    try:
        return check_output(command, stderr=STDOUT, cwd=cwd, text=True)
    except CalledProcessError as e:
        print(e.output)
        raise


def list_branches(path: Path) -> List[str]:
    return git("branch", "--format=%(refname:short)", cwd=path).split("\n")


class GitTemporaryDirectory(TemporaryDirectory):
    def __enter__(self):
        return self

    def __call__(self, *args) -> str:
        return git(*args, cwd=self.name)

    def __truediv__(self, other) -> Path:
        return Path(self.name) / other


def find_ignore_sections(
    file_name: str, file_text: str, ignore_sections: List[Tuple[str, str]]
) -> List[re.Match]:
    ignore_section_matches = []
    for sub_strings in ignore_sections:
        pre_sub_string, post_sub_string = sub_strings
        regex = rf"(?s){pre_sub_string}(.*?){post_sub_string}"
        # finditer so we can throw an error if the used ignore strings ignore
        # more than once in the file
        original_substrings = list(re.finditer(regex, file_text))
        assert original_substrings, (
            f"could not find substrings {pre_sub_string} or "
            f"{post_sub_string} in {file_name}."
        )
        assert len(original_substrings) == 1, (
            f"multiple substrings found between {pre_sub_string} and "
            f"{post_sub_string} in {file_name}."
        )
        ignore_section_matches.append(original_substrings[0])

    ignore_section_matches.sort(key=lambda x: x.start())
    return ignore_section_matches


def replace_text_ignoring_sections(
    text: str,
    ignore_section_matches: List[re.Match],
    text_replacement_method: Callable,
) -> str:
    replacement_text = ""
    next_start = 0
    for ignore_section in ignore_section_matches:
        replacement_text += text_replacement_method(
            text[next_start : ignore_section.start()]
        )
        replacement_text += text[ignore_section.start() : ignore_section.end()]
        next_start = ignore_section.end()

    replacement_text += text_replacement_method(text[next_start : len(text)])
    return replacement_text


def merge_skeleton(
    path: Path,
    org: str,
    full_name: str,
    email: str,
    from_branch: str,
    skeleton_org: str,
    package,
):
    path = path.resolve()
    repo = path.name

    def replace_text(text: str) -> str:
        text = text.replace("DiamondLightSource", org)
        text = text.replace("python3-pip-skeleton", repo)
        text = text.replace("python3_pip_skeleton", package)
        text = text.replace("Firstname Lastname", full_name)
        text = text.replace("email@address.com", email)
        text = text.replace("main", from_branch)
        return text

    def replace_in_file(file_path: Path, text_from: str, text_to: str):
        file_contents = file_path.read_text(encoding="utf8")
        file_path.write_text(file_contents.replace(text_from, text_to))

    branches = list_branches(path)
    assert MERGE_BRANCH not in branches, (
        f"{MERGE_BRANCH} already exists. "
        "Please run 'python3-pip-skeleton clean' to remove it."
    )
    with GitTemporaryDirectory() as git_tmp:
        # Clone existing repo into tmp so we don't mess up if we fail
        # half way through
        git_tmp("clone", path, git_tmp.name)
        # We will use this branch to put the skeleton changes on
        git_tmp("checkout", "--orphan", MERGE_BRANCH)
        # Delete all the current files if there are any
        git_tmp("rm", "-rf", ".", "--ignore-unmatch")
        # And make sure src isn't there otherwise the git mv below
        # will do the wrong thing
        shutil.rmtree(git_tmp / "src", ignore_errors=True)
        # Merge in the skeleton commits
        git_tmp("pull", "--rebase=false", SKELETON_URL % skeleton_org, from_branch)
        # Move things around
        if package != "python3_pip_skeleton":
            git_tmp("mv", "src/python3_pip_skeleton", f"src/{package}")
        # Change contents of all children known to git
        for relative_child in git_tmp("ls-files").splitlines():
            child = Path(git_tmp.name) / relative_child
            if child.suffix in CHANGE_SUFFIXES and child.name not in IGNORE_FILES:
                text = replace_text(child.read_text(encoding="utf8"))
                child.write_text(text)
            # Replace the file, ignoring text between specified substrings
            elif (
                child.suffix in CHANGE_SUFFIXES
                and child.name in IGNORE_FILES
                and IGNORE_FILES[child.name]
            ):
                original_text = child.read_text(encoding="utf8")
                ignore_sections = find_ignore_sections(
                    child.name, original_text, IGNORE_FILES[child.name]
                )
                child.write_text(
                    replace_text_ignoring_sections(
                        original_text, ignore_sections, replace_text
                    )
                )

        # Change instructions in the docs to reflect which pip skeleton is in use
        replace_in_file(
            Path(git_tmp.name) / "docs/developer/how-to/update-tools.rst",
            "DiamondLightSource",
            skeleton_org,
        )

        # Commit what we have and push to the original repo
        git_tmp("commit", "-a", "-m", f"Rename python3-pip-skeleton -> {repo}")
        git_tmp("push", "origin", MERGE_BRANCH)
    try:
        git("merge", MERGE_BRANCH, "--allow-unrelated-histories", cwd=path)
    except CalledProcessError:
        # The merge failed, so ask the user to fix it
        print("Please fix the conflicts above, then you can run:")
        print(f"    git branch -d {MERGE_BRANCH}")
    else:
        git("branch", "-d", MERGE_BRANCH, cwd=path)
    print("Developer instructions in docs/developer/tutorials/dev-install.rst")


def validate_package(args) -> str:
    path = args.path.resolve()
    package = args.package or path.name
    valid = re.match("[a-zA-Z][a-zA-Z_0-9]*$", package)
    assert valid, f"'{package}' is not a valid python package name"
    return package


def verify_not_adopted(root: Path, skeleton_git_url: str):
    """Verify that module has not already adopted skeleton"""

    # This call does not print anything - the return code is 0 if it is an ancestor
    not_adopted = call(  # 0 -> adopted and 1 -> not adopted, so invert here
        [
            "git",
            "-C",
            f"{root}",
            "merge-base",
            "--is-ancestor",
            SKELETON_ROOT_COMMIT,
            "HEAD",
        ]
    )

    assert not_adopted, (
        f"Package {root} has already adopted skeleton. You can type:\n"
        f"    git pull --rebase=false {skeleton_git_url}\n"
        "to update. If there were significant upstream changes a re-adopt may be "
        "better. use the --force flag to the command you just ran."
    )


def obtain_git_author_email(path: Path, force_local=True):
    # If we force local then we require there to be a local .git we can look for
    # the username and password on.
    # If we don't force local then we will try to look for a local .git, if not found
    # git will use the global user.[name, email].
    if force_local and not (path / ".git").exists():
        raise FileNotFoundError(
            ".git could not be found when searching "
            f"for a username and password in {path}"
        )
    author = str(
        git("--git-dir", path / ".git", "config", "--get", "user.name").strip()
    )
    author_email = str(
        git("--git-dir", path / ".git", "config", "--get", "user.email").strip()
    )

    return author, author_email


def new(args):
    path: Path = args.path

    package = validate_package(args)

    if path.exists():
        assert path.is_dir() and not list(
            path.iterdir()
        ), f"Expected {path} to not exist, or be an empty dir"
    else:
        path.mkdir(parents=True)

    if args.full_name and args.email:
        author, author_email = args.full_name, args.email
    else:
        author, author_email = obtain_git_author_email(Path("."), force_local=False)

    git("init", "-b", "main", cwd=path)
    print(f"Created git repo in {path}")
    merge_skeleton(
        path=path,
        org=args.org,
        full_name=author,
        email=author_email,
        from_branch=args.from_branch or "main",
        skeleton_org=args.skeleton_org,
        package=package,
    )


cfg_issue = """Missing parameter in setup.cfg. Expected format:
    [metadata]
    name = example
    author = Firstname Lastname
    author_email = email@address.com

    ------- pyproject.toml
    [[project.authors]]
    name = "Firstname Lastname"
    email = "email@address.com"
"""


def obtain_author_name_email(path: Path) -> tuple:
    author: str = ""
    author_email: str = ""
    file_path_setup_cfg: Path = path / "setup.cfg"
    file_path_pyproject_toml: Path = path / "pyproject.toml"

    # Parse for an author name, email. The order of preference used is
    # setup.cfg -> pyproject.toml -> .git -> user input.
    # Author and Email are recieved together to avoid mismatches from
    # obtaining in different places.

    if file_path_setup_cfg.exists():
        try:
            conf_cfg = ConfigParser()
            conf_cfg.read(file_path_setup_cfg)

            if "metadata" in conf_cfg:
                if "author" in conf_cfg["metadata"]:
                    author = conf_cfg["metadata"]["author"]
                if "author_email" in conf_cfg["metadata"]:
                    author_email = conf_cfg["metadata"]["author_email"]
        except Exception as exception:
            print(
                "\033[1mUnable to parse setup.cfg because of the following error, "
                "will try other sources:\033[0m"
            )
            print(exception)
            print()

    if (not author or not author_email) and file_path_pyproject_toml.exists():
        file = open(file_path_pyproject_toml, "rb")
        try:
            conf_toml = tomli.load(file)
            if "project" in conf_toml and "authors" in conf_toml["project"]:
                # pyproject.toml will use "author" or "name" so we look for both
                for author_variable_name in ["author", "name"]:
                    if author_variable_name in conf_toml["project"]["authors"][0]:
                        author = conf_toml["project"]["authors"][0][
                            author_variable_name
                        ]
                if "email" in conf_toml["project"]["authors"][0]:
                    author_email = conf_toml["project"]["authors"][0]["email"]
        except Exception as exception:
            # We want to use something else if the pyproject.toml has some errors.
            print(
                "\033[1mUnable to parse project.toml because of the following error, "
                "will try other sources:\033[0m"
            )
            print(exception)
            print()
        file.close()

    if not author or not author_email:
        try:
            author, author_email = obtain_git_author_email(path)
        except FileNotFoundError:
            print(
                "\033[1mUnable to find a .git in the repo,"
                "will try other sources\033[0m"
            )

    # If all else fails, just ask the user.
    if not author or not author_email:
        print(cfg_issue)
        print("Enter author name manually:")
        author = str(input())
        print("Enter author email manually:")
        author_email = str(input())

    assert author, "Inputted no author"
    assert author_email, "Inputted no author_email"

    return author, author_email


def existing(args):
    path: Path = args.path
    path = path.resolve()

    assert path.is_dir(), f"Expected {path} to be an existing directory"
    package = validate_package(args)

    if not args.force:
        verify_not_adopted(args.path, skeleton_git_url=SKELETON_URL % args.skeleton_org)

    if args.full_name and args.email:
        author, author_email = args.full_name, args.email
    else:
        author, author_email = obtain_author_name_email(path)

    merge_skeleton(
        path=args.path,
        org=args.org,
        full_name=author,
        email=author_email,
        from_branch=args.from_branch or "main",
        skeleton_org=args.skeleton_org,
        package=package,
    )


def clean_repo(args):
    path: Path = args.path
    path = path.resolve()

    assert path.is_dir(), f"Expected {path} to be an existing directory"

    branches = list_branches(path)
    assert (
        f"{MERGE_BRANCH}" in branches
    ), f"Expected {MERGE_BRANCH} to be in existing repo"

    git("branch", "-D", f"{MERGE_BRANCH}")
    print(f"{MERGE_BRANCH} deleted from existing repo")


def main(args=None):
    parser = ArgumentParser()
    subparsers = parser.add_subparsers()
    parser.add_argument("--version", action="version", version=__version__)

    # Add a command for making a new repo
    sub = subparsers.add_parser("new", help="Make a new repo forked from this skeleton")
    sub.set_defaults(func=new)
    sub.add_argument("path", type=Path, help="Path to new repo to create")
    sub.add_argument("--org", required=True, help="GitHub organization for the repo")
    sub.add_argument(
        "--skeleton-org",
        default="DiamondLightSource",
        help="The organisation of the python3-pip-skeleton to use",
    )
    sub.add_argument(
        "--package", default=None, help="Package name, defaults to directory name"
    )
    sub.add_argument(
        "--full-name", default=None, help="Full name, defaults to git config user.name"
    )
    sub.add_argument(
        "--email", default=None, help="Email address, defaults to git config user.email"
    )
    sub.add_argument(
        "--from-branch",
        default=None,
        help="Merge from skeleton branch, defaults to main",
    )
    # Add a command for adopting in existing repo
    sub = subparsers.add_parser("existing", help="Adopt skeleton in existing repo")
    sub.set_defaults(func=existing)
    sub.add_argument("path", type=Path, help="Path to new repo to existing repo")
    sub.add_argument("--force", action="store_true", help="force readoption")
    sub.add_argument("--org", required=True, help="GitHub organization for the repo")
    sub.add_argument(
        "--skeleton-org",
        default="DiamondLightSource",
        help="The organisation of the python3-pip-skeleton to use",
    )
    sub.add_argument(
        "--package", default=None, help="Package name, defaults to directory name"
    )
    sub.add_argument(
        "--full-name", default=None, help="Full name, defaults to git config user.name"
    )
    sub.add_argument(
        "--email", default=None, help="Email address, defaults to git config user.email"
    )
    sub.add_argument(
        "--from-branch",
        default=None,
        help="Merge from skeleton branch, defaults to main",
    )
    # Add a command for cleaning an existing repo of skeleton code
    sub = subparsers.add_parser(
        "clean", help="Clean up branch from failed skeleton merge"
    )
    sub.set_defaults(func=clean_repo)
    sub.add_argument("path", type=Path, help="Path to existing repo with skeleton code")
    # Parse args and run
    args = parser.parse_args(args)
    args.func(args)


# test with: python -m python3_pip_skeleton
if __name__ == "__main__":
    main()
