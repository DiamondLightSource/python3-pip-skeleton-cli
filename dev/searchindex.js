Search.setIndex({"docnames": ["developer/explanations/skeleton", "developer/how-to/build-docs", "developer/how-to/contribute", "developer/how-to/lint", "developer/how-to/make-release", "developer/how-to/run-tests", "developer/how-to/static-analysis", "developer/how-to/test-container", "developer/how-to/update-tools", "developer/index", "developer/reference/standards", "developer/tutorials/dev-install", "genindex", "index", "user/explanations/decisions", "user/explanations/decisions/0001-record-architecture-decisions", "user/explanations/decisions/0003-docs-structure", "user/explanations/decisions/0004-why-src", "user/explanations/decisions/0005-pyproject-toml", "user/explanations/decisions/0006-setuptools-scm", "user/explanations/decisions/0007-dev-dependencies", "user/explanations/decisions/0008-use-tox", "user/explanations/decisions/0009-sphinx-theme", "user/explanations/decisions/0010-vscode-settings", "user/explanations/decisions/0011-requirements-txt", "user/explanations/decisions/0012-containers", "user/explanations/structure", "user/explanations/why-use-skeleton", "user/how-to/excalidraw", "user/how-to/existing", "user/how-to/pypi", "user/how-to/run-container", "user/how-to/update", "user/index", "user/reference/api", "user/tutorials/installation", "user/tutorials/new"], "filenames": ["developer/explanations/skeleton.rst", "developer/how-to/build-docs.rst", "developer/how-to/contribute.rst", "developer/how-to/lint.rst", "developer/how-to/make-release.rst", "developer/how-to/run-tests.rst", "developer/how-to/static-analysis.rst", "developer/how-to/test-container.rst", "developer/how-to/update-tools.rst", "developer/index.rst", "developer/reference/standards.rst", "developer/tutorials/dev-install.rst", "genindex.rst", "index.rst", "user/explanations/decisions.rst", "user/explanations/decisions/0001-record-architecture-decisions.rst", "user/explanations/decisions/0003-docs-structure.rst", "user/explanations/decisions/0004-why-src.rst", "user/explanations/decisions/0005-pyproject-toml.rst", "user/explanations/decisions/0006-setuptools-scm.rst", "user/explanations/decisions/0007-dev-dependencies.rst", "user/explanations/decisions/0008-use-tox.rst", "user/explanations/decisions/0009-sphinx-theme.rst", "user/explanations/decisions/0010-vscode-settings.rst", "user/explanations/decisions/0011-requirements-txt.rst", "user/explanations/decisions/0012-containers.rst", "user/explanations/structure.rst", "user/explanations/why-use-skeleton.rst", "user/how-to/excalidraw.rst", "user/how-to/existing.rst", "user/how-to/pypi.rst", "user/how-to/run-container.rst", "user/how-to/update.rst", "user/index.rst", "user/reference/api.rst", "user/tutorials/installation.rst", "user/tutorials/new.rst"], "titles": ["Working on the Skeleton Repo", "Build the docs using sphinx", "Contributing to the project", "Run linting using pre-commit", "Make a release", "Run the tests using pytest", "Run static analysis using mypy", "Container Local Build and Test", "Update the tools", "Developer Guide", "Standards", "Developer install", "API Index", "python3-pip-skeleton-cli", "Architectural Decision Records", "1. Record architecture decisions", "3. Standard documentation structure", "4. Use a source directory", "5. Use pyproject.toml", "6. Use setuptools_scm", "7. Installing developer environment", "8. Use tox and pre-commit", "9. Sphinx theme", "10. Include vscode settings", "11. Pinning requirements", "12. Use containers", "Skeleton Project Structure", "Why Use a Skeleton Structure?", "How to embed Excalidraw diagrams", "How to adopt the skeleton in an existing repo", "Creating a PyPI Token", "Run in a container", "How to update to the latest skeleton structure", "User Guide", "API", "Installation", "Creating a new repo from the skeleton"], "terms": {"The": [0, 1, 2, 3, 7, 10, 13, 16, 17, 21, 22, 26, 27, 29, 30, 35, 36], "python3": [0, 8, 11, 24, 29, 31, 32, 35, 36], "pip": [0, 8, 11, 20, 24, 29, 31, 32, 35, 36], "ha": [0, 4, 8, 22, 26, 27, 35, 36], "protect": 0, "branch": [0, 4, 29, 36], "i": [0, 2, 3, 5, 6, 7, 8, 9, 10, 14, 16, 17, 21, 24, 27, 28, 29, 30, 33, 34, 35, 36], "restrict": 0, "rebas": [0, 8], "pr": 0, "onli": [0, 30], "It": [0, 5, 6, 13, 27, 28, 35, 36], "also": [0, 1, 2, 5, 9, 13, 21, 33, 35, 36], "occasion": 0, "so": [0, 11, 21, 27, 29, 35, 36], "some": [0, 21, 23, 27, 32, 36], "care": 0, "procedur": 0, "ar": [0, 1, 2, 10, 16, 17, 19, 21, 23, 24, 27, 29, 30, 31, 36], "requir": [0, 7, 11, 14, 16, 19, 21, 22, 23, 28, 30, 35], "thi": [0, 1, 3, 4, 7, 8, 10, 11, 15, 16, 17, 19, 21, 24, 26, 27, 28, 29, 30, 34, 35, 36], "what": [0, 2, 29, 32], "all": [0, 2, 3, 7, 13, 17, 21, 24, 26, 30, 36], "adopt": [0, 13, 27, 32, 33], "project": [0, 1, 5, 7, 8, 9, 13, 15, 16, 17, 18, 20, 25, 27, 30, 33, 36], "merg": [0, 8, 13, 32], "from": [0, 1, 9, 10, 13, 15, 19, 23, 27, 29, 31, 33, 35], "need": [0, 15, 16, 17, 18, 20, 21, 24, 35, 36], "kept": 0, "tidi": 0, "In": [0, 7], "particular": [0, 27], "must": 0, "have": [0, 2, 3, 7, 11, 21, 24, 27, 29, 30, 36], "ani": [0, 1, 2, 3, 7, 8, 20, 27, 35, 36], "nnn": 0, "which": [0, 1, 7, 8, 11, 13, 17, 21, 36], "would": [0, 7, 13, 17, 21, 29], "refer": [0, 13, 16, 27, 29, 34], "wrong": 0, "commit": [0, 9, 10, 11, 13, 14, 19, 24, 27, 29, 36], "when": [0, 2, 11, 24, 36], "other": [0, 7, 21, 23, 30, 36], "github": [0, 2, 4, 8, 11, 13, 21, 29, 30, 31, 32, 35], "see": [0, 1, 4, 15, 16, 17, 18, 19, 21, 26, 29, 30, 36], "them": [0, 5, 6, 13, 21, 24, 36], "add": [0, 19, 27, 28, 29, 30, 36], "incorrect": 0, "messag": 0, "issu": [0, 6, 21, 24], "push": [0, 4, 21, 29], "can": [0, 1, 2, 3, 5, 6, 7, 11, 13, 17, 19, 20, 21, 24, 25, 27, 29, 30, 32, 35, 36], "updat": [0, 9, 20, 27, 29, 33], "track": [0, 21, 27], "includ": [0, 1, 14, 21, 33, 36], "those": [0, 3, 13, 21], "out": [0, 21, 29], "forc": 0, "disallow": 0, "safe": 0, "record": [0, 33], "histori": 0, "To": [0, 4, 7, 8, 11, 13, 15, 21, 24, 29, 30, 31, 32, 36], "first": [0, 11, 29, 36], "take": [0, 11, 21, 25, 27, 29, 36], "new": [0, 2, 4, 11, 13, 15, 29, 30, 33, 35], "off": [0, 28], "your": [0, 1, 2, 7, 28, 29, 30, 32], "do": [0, 3, 6, 7, 30, 32, 36], "pull": [0, 1, 2, 8, 13, 27, 31, 32], "request": [0, 2, 8, 24, 36], "get": [0, 3, 4, 9, 11, 31], "git": [0, 3, 8, 11, 19, 21, 27, 29, 32, 35, 36], "checkout": [0, 29], "reset": 0, "hard": 0, "origin": 0, "becaus": [0, 7, 21, 27, 30], "mai": [0, 32, 35, 36], "been": [0, 27, 35], "b": [0, 29], "featur": [0, 22, 35, 36], "test": [0, 2, 9, 17, 20, 21, 23, 29], "ci": [0, 7, 13, 17, 21, 23, 24, 25, 26, 36], "m": [0, 11, 35, 36], "my": [0, 28], "u": [0, 36], "happi": 0, "us": [0, 9, 10, 11, 13, 14, 15, 16, 20, 22, 24, 26, 28, 29, 30, 31, 32, 33, 35, 36], "next": [0, 24], "delet": [0, 27, 36], "fd": 0, "onc": [0, 21, 27, 36], "year": 0, "up": [0, 2, 9, 13, 25, 30, 32], "easi": [0, 21], "otherwis": 0, "multipl": [0, 8, 13, 21], "same": [0, 2, 4, 21, 25], "line": [0, 7, 10, 13, 36], "caus": 0, "conflict": [0, 8, 29], "dure": 0, "re": 0, "alreadi": [0, 30, 31], "perform": [0, 35, 36], "step": [0, 9, 11, 33], "rememb": 0, "If": [0, 1, 2, 3, 7, 13, 21, 27, 29, 30, 32, 35, 36], "theirs": 0, "you": [0, 1, 2, 3, 4, 5, 6, 7, 11, 13, 17, 19, 21, 28, 29, 30, 32, 35, 36], "now": [0, 11, 21, 35, 36], "right": 0, "back": [0, 13, 28, 29], "ededf000": 0, "edit": [0, 4, 17], "screen": 0, "replac": 0, "pick": [0, 13, 32], "": [0, 15, 16, 17, 27], "except": [0, 4], "one": [0, 2, 16, 21, 36], "save": [0, 3, 13, 21, 28], "quit": [0, 21], "creat": [0, 4, 13, 15, 17, 28, 29, 32, 33], "handoff": 0, "202x": 0, "xx": 0, "base": [1, 13, 16, 17, 20, 36], "directori": [1, 10, 14, 26], "run": [1, 2, 7, 8, 9, 10, 11, 13, 17, 19, 21, 26, 29, 33], "tox": [1, 3, 5, 6, 7, 11, 13, 14, 23, 29, 36], "e": [1, 3, 5, 6, 11, 20, 29, 36], "static": [1, 9, 10, 11, 13, 26], "api": [1, 10, 21, 29, 33], "docstr": [1, 10], "code": [1, 3, 13, 17, 19, 23, 26, 27, 29, 36], "document": [1, 2, 9, 14, 20, 21, 22, 24, 26, 28, 33], "standard": [1, 2, 9, 14, 26], "built": [1, 31], "html": [1, 28, 36], "open": [1, 2, 11, 28], "local": [1, 9, 11, 21, 26], "web": [1, 36], "brows": [1, 36], "firefox": [1, 36], "index": [1, 29, 33, 36], "an": [1, 3, 8, 17, 21, 32, 33, 36], "process": [1, 10], "watch": 1, "chang": [1, 2, 3, 8, 13, 21, 27, 28, 32, 36], "rebuild": [1, 24, 28], "whenev": 1, "reload": 1, "browser": [1, 28], "page": [1, 4, 10, 13, 30, 36], "view": [1, 36], "localhost": 1, "http": [1, 4, 8, 13, 18, 20, 21, 22, 28, 32, 35], "8000": 1, "make": [1, 2, 9, 13, 23, 28, 32, 36], "sourc": [1, 6, 11, 13, 14, 26, 35, 36], "too": 1, "tell": [1, 3], "src": [1, 17, 29], "most": [2, 16, 21], "welcom": 2, "handl": [2, 3], "through": [2, 11], "pleas": [2, 4, 10, 29, 36], "check": [2, 3, 5, 6, 7, 8, 10, 11, 17, 21, 29, 32, 36], "exist": [2, 13, 15, 32, 33, 35, 36], "befor": [2, 21, 35, 36], "file": [2, 3, 6, 17, 21, 23, 24, 26, 28, 29, 32], "great": 2, "idea": 2, "involv": 2, "big": 2, "ticket": 2, "we": [2, 14, 15, 17, 19, 20, 21, 24, 25], "want": 2, "sure": [2, 28], "don": [2, 36], "t": [2, 7, 16, 36], "spend": 2, "time": [2, 3, 17, 21, 32, 36], "someth": [2, 8, 29], "might": 2, "fit": 2, "scope": [2, 30], "offer": 2, "place": 2, "ask": 2, "question": 2, "share": 2, "end": 2, "obviou": 2, "close": [2, 8], "rais": 2, "instead": [2, 7, 30, 31], "while": 2, "100": 2, "doe": [2, 13, 17, 21, 36], "librari": [2, 33], "bug": [2, 17], "free": 2, "significantli": 2, "reduc": 2, "number": [2, 4, 19, 21, 31, 34], "easili": 2, "caught": 2, "remain": 2, "improv": [2, 16], "contain": [2, 9, 10, 11, 13, 14, 26, 33], "inform": [2, 16], "set": [2, 3, 10, 14, 25, 26, 29, 30, 36], "environ": [2, 11, 14, 17, 23, 25, 36], "should": [2, 23, 28, 35, 36], "follow": [2, 4, 7, 10, 11, 13, 17, 26, 28, 36], "black": [3, 10, 13, 21], "flake8": [3, 10, 13, 21], "isort": [3, 10, 13, 21], "under": [3, 11, 20, 21], "abov": [3, 15, 16, 17, 18, 25, 28, 29, 36], "command": [3, 7, 13, 20, 36], "Or": 3, "instal": [3, 7, 9, 13, 14, 17, 21, 25, 29, 31, 33, 36], "hook": [3, 21], "each": [3, 21, 30], "just": [3, 21, 23], "report": [3, 5, 21], "reformat": 3, "repositori": [3, 10, 13, 17], "likewis": 3, "manual": 3, "json": [3, 23, 29], "formatt": 3, "well": [3, 21, 22], "highlight": [3, 6, 24], "editor": [3, 21, 23, 26], "window": 3, "checklist": 4, "choos": [4, 11], "pep440": 4, "compliant": 4, "pep": [4, 18, 20], "python": [4, 8, 11, 13, 18, 19, 20, 21, 23, 26, 36], "org": [4, 13, 18, 20, 29, 36], "0440": 4, "go": [4, 17], "draft": 4, "click": [4, 11, 28], "tag": [4, 19, 36], "suppli": [4, 20], "chose": 4, "gener": [4, 8, 13, 19, 24], "note": [4, 30, 33, 36], "review": 4, "titl": [4, 10, 20], "publish": [4, 24, 25, 29, 30, 36], "main": [4, 17, 29, 31, 32, 36], "effect": 4, "option": [4, 20, 32], "done": [5, 6], "find": [5, 23, 36], "function": [5, 10, 16, 36], "look": [5, 21, 22, 29, 36], "like": [5, 21, 29, 36], "error": [5, 36], "coverag": [5, 13, 23], "commandlin": [5, 29, 32, 35, 36], "cov": 5, "xml": 5, "type": [6, 10, 11, 35], "definit": 6, "without": [6, 17, 25], "potenti": 6, "where": [6, 8, 18], "match": [6, 23], "runtim": [7, 25], "avail": [7, 31], "via": [7, 36], "p": [7, 11, 13, 21, 29, 36], "verifi": [7, 13, 19, 21], "develop": [7, 13, 14, 17, 21, 23, 24, 25, 26, 27, 29, 36], "docker": [7, 31], "fail": [7, 29, 36], "best": [7, 23], "fix": [7, 21, 27, 29, 36], "problem": [7, 27], "podman": 7, "workstat": 7, "exampl": [7, 10, 13, 27, 36], "interchang": 7, "depend": [7, 20, 24, 25, 29, 31, 35], "cli": [7, 11, 17, 31, 35], "call": [7, 16], "cd": [7, 11, 29], "root": [7, 17, 26], "help": [7, 16, 21], "pass": [7, 36], "paramet": 7, "applic": [7, 25], "modul": [8, 21, 26, 27, 29, 36], "skeleton": [8, 9, 11, 16, 17, 20, 24, 30, 31, 33, 35], "structur": [8, 14, 17, 22, 29, 33], "provid": [8, 13, 20, 21, 25, 30, 36], "mean": [8, 17, 19, 25, 30], "keep": [8, 13, 27], "techniqu": [8, 13], "sync": [8, 13], "between": [8, 13], "latest": [8, 21, 24, 33], "version": [8, 13, 19, 24, 31, 34, 36], "fals": [8, 17], "com": [8, 11, 28, 32, 35], "diamondlightsourc": [8, 11, 13, 31, 32, 35], "indic": 8, "area": 8, "setup": [8, 11, 19, 20, 29, 36], "current": [8, 14, 29, 35], "more": [8, 16, 27, 30, 33], "detail": [8, 26], "split": [9, 13, 33], "four": [9, 16, 33], "categori": [9, 33], "access": [9, 30, 33, 36], "link": [9, 15, 16, 17, 18, 24, 30, 33], "side": [9, 33], "bar": [9, 33], "contribut": [9, 13, 27, 29], "build": [9, 10, 20, 21, 24, 25], "doc": [9, 10, 11, 13, 17, 27, 28, 29], "sphinx": [9, 10, 11, 13, 14, 26], "pytest": [9, 11, 13, 21, 26, 36], "analysi": [9, 10, 11, 13, 26], "mypi": [9, 10, 11, 13, 21], "lint": [9, 10, 11], "pre": [9, 10, 11, 13, 14, 31], "tool": [9, 10, 13, 19, 21, 23, 29, 32, 36], "releas": [9, 13, 19, 24, 31, 33, 35, 36], "practic": [9, 33], "dai": 9, "dev": [9, 11, 20, 29, 36], "task": [9, 23, 29], "work": [9, 13, 20, 23, 24, 25, 30, 33], "repo": [9, 13, 23, 24, 27, 32, 33], "why": [9, 29, 33, 36], "architectur": [9, 33], "technic": [9, 16, 33], "materi": [9, 33], "defin": [10, 22, 27], "conform": 10, "format": 10, "style": 10, "import": 10, "order": [10, 16, 20, 24, 28], "how": [10, 16, 17, 24, 30, 36], "guid": [10, 13, 16], "napoleon": 10, "extens": [10, 23], "As": [10, 17, 29], "googl": 10, "consid": 10, "hint": 10, "signatur": 10, "For": [10, 23, 36], "def": [10, 36], "func": 10, "arg1": 10, "str": [10, 34], "arg2": 10, "int": 10, "bool": 10, "summari": [10, 36], "extend": 10, "descript": [10, 36], "arg": 10, "return": 10, "valu": 10, "true": [10, 17], "extract": 10, "underlin": 10, "convent": [10, 28], "headl": 10, "1": [10, 14], "head": 10, "2": [10, 13], "3": [10, 11, 14, 26, 35], "These": [11, 20, 27], "instruct": [11, 29], "minim": [11, 25], "either": 11, "host": 11, "machin": 11, "venv": [11, 35, 36], "8": [11, 14, 35, 36], "later": [11, 28, 35, 36], "vscode": [11, 13, 14, 21, 25, 29], "virtualenv": [11, 35, 36], "bin": [11, 35, 36], "activ": [11, 35, 36], "devcontain": [11, 25], "reopen": 11, "prompt": 11, "termin": [11, 35], "graph": [11, 21], "packag": [11, 17, 26, 27, 29, 30, 36], "tree": [11, 21], "pipdeptre": 11, "parallel": [11, 21, 36], "enabl": [13, 20, 23, 26, 28, 29, 36], "pypi": [13, 29, 33], "io": [13, 22, 25, 31], "relat": 13, "date": [13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], "serv": 13, "who": 13, "prefer": [13, 28], "cherri": 13, "inspir": 13, "jaraco": [13, 27], "allow": [13, 21, 25], "integr": [13, 21, 23, 26, 36], "setuptools_scm": [13, 14, 34], "manag": [13, 24], "tutori": [13, 16, 29, 36], "explan": [13, 16, 29], "action": [13, 30, 36], "deploy": 13, "thing": [13, 16, 21, 36], "path": [13, 29, 35, 36], "my_github_user_or_org": [13, 29, 36], "section": [13, 27, 30], "user": [13, 23, 24, 25, 30], "major": 14, "adr": [14, 15], "describ": [14, 15, 30], "michael": [14, 15], "nygard": [14, 15], "below": [14, 17], "list": [14, 20], "our": 14, "4": [14, 26], "5": [14, 36], "pyproject": [14, 20, 29], "toml": [14, 20, 29], "6": 14, "7": 14, "9": 14, "theme": 14, "10": 14, "11": 14, "pin": 14, "12": 14, "2022": 15, "02": 15, "18": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], "accept": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], "made": [15, 21], "articl": [15, 16, 17, 18, 36], "copi": [15, 27], "past": [15, 27], "ones": 15, "2023": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25], "01": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25], "organ": [16, 30, 36], "approach": [16, 21, 27, 30], "propos": 16, "david": 16, "la": 16, "grand": 16, "unifi": 16, "theori": 16, "There": [16, 21, 24, 27, 36], "secret": [16, 30], "understood": 16, "write": [16, 36], "good": [16, 22], "softwar": [16, 35], "isn": 16, "thei": [16, 17], "repres": 16, "differ": [16, 27, 32], "purpos": 16, "creation": [16, 27], "understand": 16, "implic": 16, "often": 16, "immens": 16, "topic": [16, 36], "decid": 17, "per": [17, 18], "hynek": 17, "summar": [17, 36], "advantag": [17, 21, 25], "cannot": 17, "shadow": 17, "wa": [17, 21, 29], "against": [17, 21, 24], "A": [17, 25], "secondari": 17, "symmetri": 17, "wai": [17, 20, 21, 33], "wheel": 17, "job": [17, 36], "isol": [17, 25], "install_requir": 17, "suffici": [17, 27], "lock": [17, 24], "mode": 17, "modif": 17, "reinstal": 17, "regular": 17, "distribut": 17, "put": 18, "configur": [18, 26, 36], "0518": 18, "mechan": [19, 20, 24], "setuptool": 19, "scm": 19, "pypa": [19, 34], "automat": [19, 29, 30], "suffix": 19, "untag": 19, "621": 20, "ad": [20, 21, 36], "0621": 20, "its": [20, 31, 35], "virtual": [20, 25, 36], "bash": 20, "rapid": 21, "inner": 21, "loop": 21, "experi": [21, 23], "autom": 21, "wiki": 21, "en": 21, "about": 21, "initi": [21, 27], "took": 21, "everyth": 21, "had": 21, "plugin": 21, "catch": 21, "failur": 21, "longer": 21, "than": [21, 27], "state": 21, "public": 21, "stabl": 21, "did": 21, "recommend": [21, 23, 35], "taken": [21, 27], "address": 21, "rearrang": 21, "still": 21, "anoth": 21, "solut": 21, "enter": 21, "final": [21, 29], "move": 21, "long": 21, "therefor": 21, "intrus": 21, "invok": 21, "workflow": [21, 26, 29, 36], "until": 21, "succe": 21, "common": 21, "remot": [21, 36], "matrix": 21, "non": 21, "critic": 21, "avoid": 21, "mistak": 21, "pydata": 22, "here": [22, 33], "readthedoc": 22, "nice": 22, "navig": 22, "coupl": 23, "neat": 23, "id": 23, "folder": [23, 25], "launcher": 23, "debug": [23, 26], "overrid": [23, 24], "verif": 23, "launch": [23, 25, 29], "unaffect": 23, "abil": 24, "guarante": 24, "By": 24, "default": 24, "behaviour": 24, "everi": 24, "txt": 24, "freez": 24, "asset": 24, "download": 24, "todo": 24, "written": [24, 36], "less": 24, "overhead": 24, "incom": 24, "earli": 24, "around": 24, "quickli": 24, "singl": [25, 26, 27, 29, 30, 36], "dockerfil": 25, "two": 25, "kind": [25, 27], "execut": [25, 35, 36], "system": 25, "ghcr": [25, 31], "label": 25, "cloud": 25, "nativ": 25, "level": 26, "typic": [26, 33], "name": [26, 27, 28, 29, 30, 36], "hold": 26, "both": 26, "continu": [26, 36], "mani": 27, "start": [27, 28, 33], "templat": [27, 36], "basic": 27, "custom": 27, "specif": 27, "variabl": 27, "One": 27, "cookiecutt": 27, "appli": 27, "cut": 27, "individu": 27, "lead": 27, "partial": 27, "miss": 27, "explain": 27, "blog": 27, "post": 27, "fork": [27, 36], "oper": 27, "No": 27, "reason": [27, 36], "content": 27, "numer": 27, "top": [27, 36], "occur": 27, "howev": 27, "simpl": 27, "diverg": 27, "much": 27, "increasingli": 27, "probabl": 27, "sign": 27, "benefit": 27, "At": 27, "point": [27, 36], "abandon": 27, "rst": [27, 29, 36], "eyj2zxjzaw9uijoimsisimvuy29kaw5nijoiynn0cmluzyisimnvbxbyzxnzzwqionrydwusimvuy29kzwqioij4no1axxobofx1mdaxnh3pr8i4r3wkvqw": 28, "pu13j1sntep02mans0oa2drcdtawmthcxmd56v": 28, "r8axqmbcdtawmddun9ntdouhtjdoqvfixhuwmdfl6d5cdtawmgjft7a3xhuwmda3": 28, "c08xhuwmde4pn9cdtawmwvcdtawmdtxnlx1mdaxyov": 28, "6l5ccp5cdtawmtbtl0gahumsu3b5nswl1cur0zyfz8": 28, "fptomxhuwmdfkl5ktwufcdtawmttmgjjpno5pfb29": 28, "bx8q3tcv": 28, "bcdtawmgx5x1x1mdawzvh49q": 28, "tj1x1mdaxzc3pxrtmjkodklqcvsb4ottlyt90xfzrvqzkdx1t2cvzdx1cdtawmtx6": 28, "vs3ovrbnfxij9o80ejgk6hcdtawmtjcqvqype0ugpdjlktf0e9cxi5cdtawmdjaxhuwmdfi": 28, "sz1lizpsoj9xg6tp26czd1uz9tgzsmoxhuwmdfh5zfrco1cxg": 28, "6sinby5t3d2bsrnvfy1x1mdaxmr2ihqwhnuzjicvwxhuwmdezva3j3pxcvfhcdtawmdlkmhlcdtawmtq2zvf9cuk": 28, "ne8": 28, "ddp53x1cdtawmdzzcvgzlfxiikedxhuwmdexxyjcdtawmtoh46rhufx1mdawmkki2xqyxku7kfx1mdawn1x0hvx1mdaxodw0mnvtbpcxdz13oywws1ms4qumi9tdpoyqt55": 28, "hn5cdtawmwsexhuwmdflvp1e4zfsy3bcdtawmtjkf1rmw": 28, "7ipmlynah6vj1df99cdtawmtu8xhuwmdbmrnp7rstcdtawmt": 28, "777yrepi3tuavkhzdlr7dlx1mdaxno5qt737zyzuyu67y3lcik6vzfx1mdawmisplhm4uvx1mdaxof": 28, "oznhcdtawmtffpi3xlszsbnxsbujl": 28, "vk35m5cdeviwyheilzqhnncdtawmtzcblx1mdawnsgk4ei4zk8sk3iulzkoppr299pdniprfjnixhuwmde4xophqfl3imtynpbhxhuwmdexzjnbxhuwmdawj6ua50nyvkh5b9s8": 28, "fki": 28, "v": 28, "t07xomjtcdtawmtu": 28, "bpat0urulr9mzrmw11x1mdaxmzkqjghcdtawmwgc5w6av1xiyz": 28, "mj7rpahh1voz3oetcbldlveuxwagzozcp6xchxcjcxhuwmde4zvx1mdawnnvqxhuwmdezd15ozedk5uitym4wv": 28, "utnpjbxhuwmdew": 28, "8agtrg7hvxip4hrn3s1r95x36nwq": 28, "70lry": 28, "teen": 28, "sn48pgwoj99m75cdtawmtm3vx": 28, "eandcxj3vzu8hfcwng5xcp6qtflxuhds4buvcdtawmtnozz3x": 28, "1m": 28, "j4pyktypxhuwmdfmudrsxulcdtawmwzhobh2kkn7konr": 28, "edcivwfs5": 28, "a0fxmhezauzjmxhuwmde2y3tuxhuwmda1n5fr8codcfwhky648avirzvhxhuwmdayxhuwmda2vyc4tnaddcjcdtawmtfczo5hcfx1mdawmomzxhuwmde4xfza4fxuxhuwmda0v7cpkthtrvx1mdawzvx1mdawnvlcdtawmthyxhuwmde0yoncdtawmtg2": 28, "gdy6fo1pkek8e5cdtawmdkz3h4oulx0xhuwmdfjspbcdtawmtzbdlx1mdaxmrhcdtawmdmlichcdtawmdfdxhrcdtawmdrkofccxhuwmdawlqu9vfug2fx1mdaxmwjcdtawmgbxxhuwmdewxgjksje1u23i3noh3xpcdtawmtpw3jlsxhuwmde2nlc9tvtaqlx1mdawmlx09ly97na0vvn3ivaoguncdfx1mdaxmkhq0enb": 28, "3cpzvvcdtawmdrkofbcdtawmdl7z4ru59tm2gpcdtawmtbcdtawmdfzvm": 28, "olx1mdaxzw9cdtawmdbh4wxcdtawmthpqpporlv35uncxhuwmda0kmtzowodzue1": 28, "nl09enpwwr0ffx6ffx1mdaxmtxexhuwmda3izo9il4t3fh": 28, "9mekmcu6h0mhvulcdtawmgz2tfuv": 28, "pimx9nphuxhn4pcdtawmthcdtawmtnh4lano1x1mdaxy2dj5un3ouinp": 28, "lhs1x1mdaxzj9i": 28, "onb6mfmllx1mdawnfxijvx1mdaxmfxmxhuwmdbl3kmxcmffxg6gj8cdklx1mdawm": 28, "fomr6xojcdtawmtjiqnbcdtawmtgqgfx1mdaxmqamnel9xhuwmdflxhuwmda0xhuwmda2jfx1mdaxmoghrlx1mdaxmey5ivxupvcp0dncdtawmtddmckgxqbcdtawmdrcdtawmduknfx1mdaxmorcdtawmwvcdtawmdsosvx1mdaxy1x1mdaxyzhcbmjukkaxmocgxfxcdtawmdjcdtawmwgyxg5gvixhjajgan1cdtawmdmvyhi1qsrfk4jtgzcgphzg64ncdtawmwrcdtawmdbe81x1mdawn8jvnxipxhuwmde0iftcdtawmdashr8vpo7op3uvbollsz3": 28, "ct": 28, "7unwps7do3": 28, "hyh4p2": 28, "1x1mdawmwrornqlqfm2qvxukfxy7feavcfajprissvd": 28, "pcdtawmwplzusqpuy6nfx1mdaxnsrcdtawmwpup1t0xgzcdtawmgiyoadcdtawmti49lx1mdawmywxgafcdtawmdrcdtawmdpwkzhcdtawmtrv299z4gpcdtawmwoqnvx1mdaxntt7": 28, "oqu6txkmn14xhuwmda2w9fk2zdcdtawmdbcdtawmwvcdtawmdfaxrttpj5cdtawmdrohvx1mdaxykfr6jja3kk2xhuwmdfk9srcdtawmtbcznnurkcvvwi": 28, "h1x1mdaxzxlcdtawmdg0qnd4ndejxgjcdtawmdcmylb6": 28, "ct4kohpvx1mdaxmoa332p0wgmgxhuwmdfl9vq0kxl0wfx1mdawm9ehxhuwmdaz10dcdtawmddxx35cdtawmwbrxhuwmdazxhuwmdbmq1xmbczvnxipva2txhuwmdfisfx1mdaxyf6": 28, "yht993ktynt63k5czks50yjumrqz5ltosezlxhuwmde1xg6p1tpsnlozx1xyrvgj": 28, "vx1mdawn": 28, "iuxhuwmdezxhuwmdexrvx1mdawneji0oo6y1xdxhuwmde0imjguesyxhuwmde5o1x1mdaxzewjnclrj1x1mdaxy1x1mdaxmiuwvqmnejjccrpa80niffx1mdaxy95cdtawmtzgm08": 28, "ytbf3flcdtawmtjdwetcxnxin1xuj8xkxhuwmda3nry3sfx1mdawn": 28, "ulyeppjsralpt9kki7tfx1mdaxnmh7y6fmao": 28, "povxc3zr2": 28, "vx1mdaxmm2qpoekjn3opd6ze3svvev916ncdtawmdn68plm": 28, "lsz": 28, "bb": 28, "si8u": 28, "uhcbjnmxhuwmde4xsz4mlzkpdbkd79u1a0qkzlcdtawmtjs4xvcdj6p17xef1bbxhuwmde4xhuwmde2qj18hkcocwpq": 28, "i5vufm": 28, "oqo8mcmkzc2irvx1mdaxzm32uj9bd8fiwj3px7len8hqe9hbzvx1mdaxofxcvwi75lx1mdaxm8dxxg5ykb3cj8tt9ou3rw9": 28, "xhuwmdazntdm0sj9": 28, "thisthat": 28, "imag": [28, 29], "scene": 28, "checkbox": 28, "load": 28, "wish": [28, 35, 36], "export": 28, "svg": [28, 29], "insid": 28, "raw": 28, "over": 28, "retain": 28, "font": 28, "result": [28, 29, 36], "last": [29, 36], "element": [29, 36], "unless": [29, 36], "overridden": [29, 36], "clone": 29, "tmp": 29, "orphan": 29, "modifi": [29, 36], "leav": 29, "token": [29, 33], "scanspec": 29, "46": 29, "show": 29, "switch": 29, "auto": 29, "__main__": 29, "py": [29, 36], "__init__": 29, "cfg": [29, 36], "conf": 29, "_static": 29, "theme_overrid": 29, "css": 29, "readm": [29, 36], "pipfil": 29, "changelog": [29, 36], "yml": 29, "gitattribut": 29, "d": 29, "boilerpl": 29, "were": 29, "remov": [29, 36], "rm": [29, 31], "hello": 29, "dl": 29, "logo": 29, "favicon": 29, "ico": 29, "accomplish": 29, "f": 29, "Then": 29, "account": [30, 36], "author": 30, "simplest": 30, "gain": 30, "permiss": 30, "altern": 30, "secur": 30, "bad": 30, "actor": 30, "obtain": 30, "kei": 30, "affect": 30, "create_account": 30, "learn": 30, "store": 30, "adding_a_token": 30, "ignor": 30, "regard": 30, "pypi_token": 30, "pypi_api_token": 30, "registri": 31, "ago": 32, "could": 32, "fetch": 32, "diff": 32, "fetch_head": 32, "usag": 33, "emb": 33, "excalidraw": 33, "diagram": 33, "experienc": 33, "decis": 33, "intern": 34, "__version__": 34, "calcul": 34, "interfer": 35, "deactiv": [35, 36], "virual": [35, 36], "conda": [35, 36], "exit": [35, 36], "pipenv": [35, 36], "interfac": 35, "inherit": 36, "entri": 36, "declar": 36, "g": 36, "interpret": 36, "extra": 36, "conveni": 36, "script": 36, "Will": 36, "unit": 36, "short": 36, "info": 36, "test_boilerplate_remov": 36, "test_module_descript": 36, "assertionerror": 36, "test_changed_readme_intro": 36, "intro": 36, "test_changed_readme_bodi": 36, "peopl": 36, "test_removed_changelog_not": 36, "test_changed_changelog": 36, "0": 36, "28": 36, "text": 36, "mention": 36, "intend": 36, "mark": 36, "expect": 36, "decor": 36, "relev": 36, "xfail": 36, "yet": 36, "test_explanations_written": 36, "output": 36, "empti": 36, "websit": 36, "cat": 36, "gitremot": 36, "gh": 36, "own": 36}, "objects": {"": [[34, 0, 0, "-", "python3_pip_skeleton"]], "python3_pip_skeleton.python3_pip_skeleton": [[34, 1, 1, "", "__version__"]]}, "objtypes": {"0": "py:module", "1": "py:data"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "data", "Python data"]}, "titleterms": {"work": 0, "skeleton": [0, 13, 26, 27, 29, 32, 36], "repo": [0, 29, 36], "main": 0, "dev": 0, "archiv": 0, "process": 0, "make": [0, 4], "chang": 0, "squash": 0, "build": [1, 7, 11, 36], "doc": [1, 26, 36], "us": [1, 3, 5, 6, 17, 18, 19, 21, 25, 27], "sphinx": [1, 22], "autobuild": 1, "contribut": 2, "project": [2, 26], "issu": [2, 3], "discuss": 2, "code": [2, 10], "coverag": 2, "develop": [2, 9, 11, 20], "guid": [2, 9, 33], "run": [3, 5, 6, 31, 36], "lint": 3, "pre": [3, 21], "commit": [3, 21], "fix": 3, "vscode": [3, 23, 26], "support": 3, "releas": 4, "test": [5, 7, 11, 26, 36], "pytest": 5, "static": 6, "analysi": 6, "mypi": 6, "contain": [7, 25, 31], "local": 7, "updat": [8, 32], "tool": [8, 27], "tutori": [9, 33], "how": [9, 13, 28, 29, 32, 33], "explan": [9, 33], "refer": [9, 33], "standard": [10, 16], "document": [10, 13, 16], "instal": [11, 20, 35], "clone": 11, "repositori": 11, "depend": 11, "see": 11, "what": [11, 27, 36], "wa": 11, "api": [12, 34], "index": 12, "python3": 13, "pip": 13, "cli": 13, "quick": 13, "start": [13, 31, 36], "i": 13, "structur": [13, 16, 26, 27, 32], "architectur": [14, 15], "decis": [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], "record": [14, 15], "1": 15, "statu": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], "context": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], "consequ": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], "3": 16, "4": 17, "sourc": 17, "directori": 17, "5": 18, "pyproject": 18, "toml": 18, "6": 19, "setuptools_scm": 19, "7": 20, "environ": [20, 35], "8": 21, "tox": 21, "detail": 21, "9": 22, "theme": 22, "10": 23, "includ": 23, "set": 23, "11": 24, "pin": 24, "requir": 24, "12": 25, "src": 26, "github": [26, 36], "specif": 26, "folder": 26, "devcontain": 26, "why": 27, "do": 27, "you": 27, "need": 27, "commandlin": 27, "happen": 27, "merg": [27, 29], "becom": 27, "too": 27, "difficult": 27, "emb": 28, "excalidraw": 28, "diagram": 28, "adopt": 29, "an": 29, "exist": 29, "exampl": 29, "creat": [30, 35, 36], "pypi": [30, 36], "token": [30, 36], "latest": 32, "user": 33, "python3_pip_skeleton": 34, "check": 35, "your": [35, 36], "version": 35, "python": 35, "virtual": 35, "librari": 35, "new": 36, "from": 36, "get": 36, "push": 36, "next": 36}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.viewcode": 1, "sphinx": 57}, "alltitles": {"Working on the Skeleton Repo": [[0, "working-on-the-skeleton-repo"]], "main": [[0, "main"]], "dev-archive": [[0, "dev-archive"]], "Process for making a change": [[0, "process-for-making-a-change"]], "Process for squashing main": [[0, "process-for-squashing-main"]], "Build the docs using sphinx": [[1, "build-the-docs-using-sphinx"]], "Autobuild": [[1, "autobuild"]], "Contributing to the project": [[2, "contributing-to-the-project"]], "Issue or Discussion?": [[2, "issue-or-discussion"]], "Code coverage": [[2, "code-coverage"]], "Developer guide": [[2, "developer-guide"]], "Run linting using pre-commit": [[3, "run-linting-using-pre-commit"]], "Running pre-commit": [[3, "running-pre-commit"]], "Fixing issues": [[3, "fixing-issues"]], "VSCode support": [[3, "vscode-support"]], "Make a release": [[4, "make-a-release"]], "Run the tests using pytest": [[5, "run-the-tests-using-pytest"]], "Run static analysis using mypy": [[6, "run-static-analysis-using-mypy"]], "Container Local Build and Test": [[7, "container-local-build-and-test"]], "Update the tools": [[8, "update-the-tools"]], "Developer Guide": [[9, "developer-guide"]], "Tutorials": [[9, null], [33, null]], "How-to Guides": [[9, null], [33, null]], "Explanations": [[9, null], [33, null]], "Reference": [[9, null], [33, null]], "Standards": [[10, "standards"]], "Code Standards": [[10, "code-standards"]], "Documentation Standards": [[10, "documentation-standards"]], "Developer install": [[11, "developer-install"]], "Clone the repository": [[11, "clone-the-repository"]], "Install dependencies": [[11, "install-dependencies"]], "See what was installed": [[11, "see-what-was-installed"]], "Build and test": [[11, "build-and-test"]], "API Index": [[12, "api-index"]], "python3-pip-skeleton-cli": [[13, "python3-pip-skeleton-cli"]], "Quick start": [[13, "quick-start"]], "How the documentation is structured": [[13, "how-the-documentation-is-structured"]], "Architectural Decision Records": [[14, "architectural-decision-records"]], "1. Record architecture decisions": [[15, "record-architecture-decisions"]], "Status": [[15, "status"], [16, "status"], [17, "status"], [18, "status"], [19, "status"], [20, "status"], [21, "status"], [22, "status"], [23, "status"], [24, "status"], [25, "status"]], "Context": [[15, "context"], [16, "context"], [17, "context"], [18, "context"], [19, "context"], [20, "context"], [21, "context"], [22, "context"], [23, "context"], [24, "context"], [25, "context"]], "Decision": [[15, "decision"], [16, "decision"], [17, "decision"], [18, "decision"], [19, "decision"], [20, "decision"], [21, "decision"], [22, "decision"], [23, "decision"], [24, "decision"], [25, "decision"]], "Consequences": [[15, "consequences"], [16, "consequences"], [17, "consequences"], [18, "consequences"], [19, "consequences"], [20, "consequences"], [21, "consequences"], [22, "consequences"], [23, "consequences"], [24, "consequences"], [25, "consequences"]], "3. Standard documentation structure": [[16, "standard-documentation-structure"]], "4. Use a source directory": [[17, "use-a-source-directory"]], "5. Use pyproject.toml": [[18, "use-pyproject-toml"]], "6. Use setuptools_scm": [[19, "use-setuptools-scm"]], "7. Installing developer environment": [[20, "installing-developer-environment"]], "8. Use tox and pre-commit": [[21, "use-tox-and-pre-commit"]], "Decision detail": [[21, "decision-detail"]], "9. Sphinx theme": [[22, "sphinx-theme"]], "10. Include vscode settings": [[23, "include-vscode-settings"]], "11. Pinning requirements": [[24, "pinning-requirements"]], "12. Use containers": [[25, "use-containers"]], "Skeleton Project Structure": [[26, "skeleton-project-structure"]], "src": [[26, "src"]], "tests": [[26, "tests"]], "docs": [[26, "docs"]], ".github": [[26, "github"]], "VSCode specific folders": [[26, "vscode-specific-folders"]], ".devcontainer": [[26, "devcontainer"]], ".vscode": [[26, "vscode"]], "Why Use a Skeleton Structure?": [[27, "why-use-a-skeleton-structure"]], "Why do you need the commandline tool?": [[27, "why-do-you-need-the-commandline-tool"]], "What happens if the merges become too difficult?": [[27, "what-happens-if-the-merges-become-too-difficult"]], "How to embed Excalidraw diagrams": [[28, "how-to-embed-excalidraw-diagrams"]], "How to adopt the skeleton in an existing repo": [[29, "how-to-adopt-the-skeleton-in-an-existing-repo"]], "Example merge": [[29, "example-merge"]], "Creating a PyPI Token": [[30, "creating-a-pypi-token"]], "Run in a container": [[31, "run-in-a-container"]], "Starting the container": [[31, "starting-the-container"]], "How to update to the latest skeleton structure": [[32, "how-to-update-to-the-latest-skeleton-structure"]], "User Guide": [[33, "user-guide"]], "API": [[34, "module-python3_pip_skeleton"]], "python3_pip_skeleton": [[34, "python3-pip-skeleton"]], "Installation": [[35, "installation"]], "Check your version of python": [[35, "check-your-version-of-python"]], "Create a virtual environment": [[35, "create-a-virtual-environment"]], "Installing the library": [[35, "installing-the-library"]], "Creating a new repo from the skeleton": [[36, "creating-a-new-repo-from-the-skeleton"]], "Getting started with your new repo": [[36, "getting-started-with-your-new-repo"]], "PyPI Token": [[36, "pypi-token"]], "Running the tests": [[36, "running-the-tests"]], "Building the docs": [[36, "building-the-docs"]], "Pushing to GitHub": [[36, "pushing-to-github"]], "What next?": [[36, "what-next"]]}, "indexentries": {"module": [[34, "module-python3_pip_skeleton"]], "python3_pip_skeleton": [[34, "module-python3_pip_skeleton"]], "python3_pip_skeleton.__version__ (in module python3_pip_skeleton)": [[34, "python3_pip_skeleton.python3_pip_skeleton.__version__"]]}})