import subprocess
import sys
from os import chdir, makedirs, name
from pathlib import Path
from unittest.mock import patch

import pytest
import toml

from python3_pip_skeleton import __main__, __version__


def check_output(*args, cwd=None) -> str:
    try:
        return subprocess.check_output(
            args, stderr=subprocess.STDOUT, text=True, cwd=cwd
        )
    except subprocess.CalledProcessError as e:
        raise ValueError(e.output)


def test_cli_version():
    output = check_output(sys.executable, "-m", "python3_pip_skeleton", "--version")
    assert output.strip() == __version__


@pytest.mark.parametrize(
    "extra_args", [(), ("--full-name=Firstname Lastname", "--email=me@myaddress.com")]
)
def test_new_module(extra_args, tmp_path: Path):
    if not extra_args:
        original_path = Path(".").absolute()
        check_output("git", "init", str(tmp_path), cwd=tmp_path)
        check_output(
            "git",
            "--git-dir",
            str(tmp_path / ".git"),
            "config",
            "user.name",
            "Firstname Lastname",
            cwd=tmp_path,
        )
        check_output(
            "git",
            "--git-dir",
            str(tmp_path / ".git"),
            "config",
            "user.email",
            "me@myaddress.com",
            cwd=tmp_path,
        )
        chdir(tmp_path)

    module = tmp_path / "my-module"
    output = check_output(
        sys.executable,
        "-m",
        "python3_pip_skeleton",
        "new",
        "--org=myorg",
        "--package=my_module",
        *extra_args,
        str(module),
    )

    if not extra_args:
        chdir(original_path)

    assert output.strip().endswith(
        "Developer instructions in docs/developer/tutorials/dev-install.rst"
    )

    conf = toml.load(module / "pyproject.toml")
    assert conf["project"]["authors"][0]["email"] == "me@myaddress.com"
    assert conf["project"]["authors"][0]["name"] == "Firstname Lastname"
    api_rst = module / "docs" / "user" / "reference" / "api.rst"
    assert (
        "Version number as calculated by https://github.com/pypa/setuptools_scm"
        in api_rst.read_text()
    )
    assert (module / "src" / "my_module").is_dir()
    assert check_output("git", "branch", cwd=module).strip() == "* main"

    check_output("python", "-m", "venv", "venv", cwd=module)

    python_exec = Path("venv") / "bin" / "python"
    if name == "nt":
        python_exec = (module / "venv" / "Scripts" / "python.exe").absolute()
    else:
        check_output(
            str(python_exec), "-m", "pip", "install", "--upgrade", "pip", cwd=module
        )
    check_output(str(python_exec), "-m", "pip", "install", ".[dev]", cwd=module)
    check_output(
        str(python_exec),
        "-m",
        "sphinx",
        "-EWT",
        "--keep-going",
        "docs",
        "build/html",
        cwd=module,
    )
    with pytest.raises(ValueError) as ctx:
        check_output(str(python_exec), "-m", "pytest", module / "tests", cwd=module)
    out = ctx.value.args[0]
    print(out)
    assert "4 failed, 1 passed" in out
    assert "Please change ./README.rst" in out


def test_new_module_existing_dir(tmp_path: Path):
    print(Path(".").absolute())
    module = tmp_path / "my-module"
    makedirs(module / "existing_dir")

    with pytest.raises(Exception) as excinfo:
        check_output(
            sys.executable,
            "-m",
            "python3_pip_skeleton",
            "new",
            "--org=myorg",
            "--package=my_module",
            "--full-name=Firstname Lastname",
            "--email=me@myaddress.com",
            str(module),
        )
    assert "to not exist, or be an empty dir" in str(excinfo.value)


def test_new_module_merge_from_valid_branch(tmp_path: Path):
    module = tmp_path / "my-module"
    check_output(
        sys.executable,
        "-m",
        "python3_pip_skeleton",
        "new",
        "--org=myorg",
        "--package=my_module",
        "--full-name=Firstname Lastname",
        "--email=me@myaddress.com",
        "--from-branch=main",
        str(module),
    )
    # Test basic functionality
    assert (module / "src" / "my_module").is_dir()
    check_output("python", "-m", "venv", "venv", cwd=module)

    python_exec = Path("venv") / "bin" / "python"
    if name == "nt":
        python_exec = (module / "venv" / "Scripts" / "python.exe").absolute()

    check_output(str(python_exec), "-m", "pip", "install", ".[dev]", cwd=module)


def test_new_module_merge_from_invalid_branch(tmp_path: Path):
    module = tmp_path / "my-module"

    with pytest.raises(ValueError) as excinfo:
        check_output(
            sys.executable,
            "-m",
            "python3_pip_skeleton",
            "new",
            "--org=myorg",
            "--package=my_module",
            "--full-name=Firstname Lastname",
            "--email=me@myaddress.com",
            "--from-branch=fail",
            str(module),
        )
    assert "couldn't find remote ref fail" in str(excinfo.value)


SETUP_CFG = """[metadata]
    name = example
    author = Firstname Lastname
    author_email = email@address.com
    """


@pytest.mark.parametrize(
    "extra_args", [(), ("--full-name=Firstname Lastname", "--email=me@myaddress.com")]
)
def test_existing_module(extra_args, tmp_path: Path):
    module = tmp_path / "scanspec"

    __main__.git(
        "clone",
        "--depth",
        "1",
        "--branch",
        "0.5.3",
        "https://github.com/dls-controls/scanspec",
        str(module),
    )

    with open(module / "setup.cfg", "w+") as setup_cfg:
        setup_cfg.write(SETUP_CFG)

    output = check_output(
        sys.executable,
        "-m",
        "python3_pip_skeleton",
        "existing",
        "--org=epics-containers",
        *extra_args,
        str(module),
    )
    assert output.endswith(
        """
Automatic merge failed; fix conflicts and then commit the result.

Please fix the conflicts above, then you can run:
    git branch -d skeleton-merge-branch
Developer instructions in docs/developer/tutorials/dev-install.rst
"""
    )
    __main__.git("merge", "--abort", cwd=str(module))
    MERGE_BRANCH = "skeleton-merge-branch"

    with pytest.raises(Exception) as excinfo:
        output = check_output(
            sys.executable,
            "-m",
            "python3_pip_skeleton",
            "existing",
            "--org=epics-containers",
            str(module),
        )
    assert (
        f"{MERGE_BRANCH} already exists. "
        + "Please run 'python3-pip-skeleton clean' to remove it."
        in str(excinfo.value)
    )

    branches = __main__.list_branches(module)
    assert MERGE_BRANCH in branches
    output = check_output(
        sys.executable,
        "-m",
        "python3_pip_skeleton",
        "clean",
        ".",
        cwd=str(module),
    )
    assert output.strip("\n") == f"{MERGE_BRANCH} deleted from existing repo"
    branches = __main__.list_branches(module)
    assert MERGE_BRANCH not in branches


def test_existing_module_already_adopted(tmp_path: Path):
    module = tmp_path / "scanspec"
    __main__.git(
        "clone",
        "--branch",
        "0.5.4",  # dls-python3-skeleton was adopted in this release
        "https://github.com/dls-controls/scanspec",
        str(module),
    )
    with pytest.raises(Exception) as excinfo:
        check_output(
            sys.executable,
            "-m",
            "python3_pip_skeleton",
            "existing",
            "--org=epics-containers",
            str(module),
        )
    assert "already adopted skeleton" in str(excinfo.value)


def test_existing_module_merge_from_invalid_branch(tmp_path: Path):
    module = tmp_path / "scanspec"
    __main__.git(
        "clone",
        "--depth",
        "1",
        "--branch",
        "0.5.3",
        "https://github.com/dls-controls/scanspec",
        str(module),
    )
    with pytest.raises(ValueError) as excinfo:
        check_output(
            sys.executable,
            "-m",
            "python3_pip_skeleton",
            "existing",
            "--org=epics-containers",
            "--from-branch=fail",
            str(module),
        )
    assert "couldn't find remote ref fail" in str(excinfo.value)


def test_obtain_git_author_email(tmp_path):
    __main__.git("--git-dir", tmp_path / ".git", "init")
    __main__.git("--git-dir", tmp_path / ".git", "config", "user.name", "Foo Bar")
    __main__.git("--git-dir", tmp_path / ".git", "config", "user.email", "Foo@Bar")
    assert __main__.obtain_git_author_email(tmp_path) == ("Foo Bar", "Foo@Bar")


def test_obtain_author_name_email_setup_cfg(tmp_path):
    cfg_str = """
    [metadata]
    author = Foo Bar
    author_email = Foo@Bar
    """
    with open(tmp_path / "setup.cfg", "w+") as cfg_file:
        cfg_file.write(cfg_str)
    assert __main__.obtain_author_name_email(tmp_path) == ("Foo Bar", "Foo@Bar")


def test_obtain_author_name_email_pyproject_toml(tmp_path):
    toml_str = """
    [[project.authors]]
    email = "Foo@Bar"
    name = "Foo Bar"
    """
    with open(tmp_path / "pyproject.toml", "w+") as toml_file:
        toml_file.write(toml_str)
    assert __main__.obtain_author_name_email(tmp_path) == ("Foo Bar", "Foo@Bar")


@patch("python3_pip_skeleton.__main__.input", return_value="Foo")
def test_obtain_author_name_email_botched_cfg_toml(input, tmp_path):
    toml_str = """
    email
    name = "Foo Bar"
    """
    cfg_str = """
    author = Foo Bar
      author_email = Foo@Bar
    """
    with open(tmp_path / "setup.cfg", "w+") as cfg_file:
        cfg_file.write(cfg_str)
    with open(tmp_path / "pyproject.toml", "w+") as toml_file:
        toml_file.write(toml_str)
    assert __main__.obtain_author_name_email(tmp_path) == ("Foo", "Foo")


def test_obtain_author_name_email_git(tmp_path):
    __main__.git("--git-dir", tmp_path / ".git", "init")
    __main__.git("--git-dir", tmp_path / ".git", "config", "user.name", "Foo Bar")
    __main__.git("--git-dir", tmp_path / ".git", "config", "user.email", "Foo@Bar")
    assert __main__.obtain_author_name_email(tmp_path) == ("Foo Bar", "Foo@Bar")


@patch("python3_pip_skeleton.__main__.input", return_value="Foo")
def test_obtain_author_name_email_terminal_output(input, tmp_path):
    assert __main__.obtain_author_name_email(tmp_path) == ("Foo", "Foo")
