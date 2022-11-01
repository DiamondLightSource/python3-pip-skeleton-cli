python3-pip-skeleton-cli
===========================

|code_ci| |docs_ci| |coverage| |pypi_version| |license|

This skeleton module (inspired by `jaraco/skeleton
<https://blog.jaraco.com/skeleton/>`_) is a generic Python project structure
which provides a means to keep tools and techniques in sync between multiple
Python projects.

============== ==============================================================
PyPI           ``pip install python3-pip-skeleton``
Source code    https://github.com/DiamondLightSource/python3-pip-skeleton-cli
Documentation  https://DiamondLightSource.github.io/python3-pip-skeleton-cli
Releases       https://github.com/DiamondLightSource/python3-pip-skeleton-cli/releases
============== ==============================================================

It integrates the following tools:

- pip and setuptools_scm for version management
- Pre-commit with black, flake8 and isort for static analysis
- Pytest for code and coverage
- Sphinx for tutorials, how-to guides, explanations and reference documentation
- GitHub Actions for code and docs CI and deployment to PyPI and GitHub Pages
- tox -p: runs pre-commit, pytest, mypy and make docs
  - which verifies all the things that CI does
- If you use VSCode, it will run black, flake8, isort and mypy on save

The the related skeleton_ repo for this module contains the source
code that can be merged into new or existing projects, and pulled from to
keep them up to date. It can also serve as a working example for those who
would prefer to cherry-pick.

.. _skeleton: https://github.com/DiamondLightSource/python3-pip-skeleton

This ``python3-pip-skeleton-cli`` repo contains the
docs and a command line tool to ease the adoption of this skeleton into a
new project like this::

    python3-pip-skeleton new /path/to/be/created --org my_github_user_or_org

and existing projects::

    python3-pip-skeleton existing /path/to/existing/repo --org my_github_user_or_org

.. |code_ci| image:: https://github.com/DiamondLightSource/python3-pip-skeleton-cli/actions/workflows/code.yml/badge.svg?branch=main
    :target: https://github.com/DiamondLightSource/python3-pip-skeleton-cli/actions/workflows/code.yml
    :alt: Code CI

.. |docs_ci| image:: https://github.com/DiamondLightSource/python3-pip-skeleton-cli/actions/workflows/docs.yml/badge.svg?branch=main
    :target: https://github.com/DiamondLightSource/python3-pip-skeleton-cli/actions/workflows/docs.yml
    :alt: Docs CI

.. |coverage| image:: https://codecov.io/gh/DiamondLightSource/python3-pip-skeleton-cli/branch/main/graph/badge.svg
    :target: https://codecov.io/gh/DiamondLightSource/python3-pip-skeleton-cli
    :alt: Test Coverage

.. |pypi_version| image:: https://img.shields.io/pypi/v/python3-pip-skeleton.svg
    :target: https://pypi.org/project/python3-pip-skeleton
    :alt: Latest PyPI version

.. |license| image:: https://img.shields.io/badge/License-Apache%202.0-blue.svg
    :target: https://opensource.org/licenses/Apache-2.0
    :alt: Apache License

..
    Anything below this line is used when viewing README.rst and will be replaced
    when included in index.rst

See https://DiamondLightSource.github.io/python3-pip-skeleton-cli for more detailed documentation.
