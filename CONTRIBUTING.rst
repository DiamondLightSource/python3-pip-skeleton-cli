Contributing
============

Contributing to the skeleton repository is different to other repos. There
are two sorts of contributions:

- Changes to the skeleton structure should be made on a branch
  of the skeleton-repo_ with a PR
  raised back to the ``main`` branch from here: PR_.
- Changes to the docs or commandline tool should be made on a branch in 
  the cli-repo_ with with a PR raised back to the ``main`` branch
  here: PR2_

.. _skeleton-repo: https://github.com/epics-containers/python3-pip-skeleton
.. _cli-repo: https://github.com/epics-containers/python3-pip-skeleton-cli
.. _PR:  https://github.com/epics-containers/python3-pip-skeleton/pulls
.. _PR2:  https://github.com/epics-containers/python3-pip-skeleton-cli/pulls

Apart from this, ``main`` branch in both repos should always be deployable,
and are considered the latest release.

Running the tests
-----------------

Both the ``skeleton`` and ``main`` repos have different tests, but
the process to run them is the same. You can run in a container using the 
supplied devcontainer or you can run them locally.

To run in a container
~~~~~~~~~~~~~~~~~~~~~

Use vscode devcontainer as follows::

    $ git clone git://github.com/epics-containers/python3-pip-skeleton.git
    $ vscode python3-pip-skeleton
    Click on 'Reopen in Container' when prompted
    In a vscode Terminal:
    $ tox -p


To run locally
~~~~~~~~~~~~~~

Get the source source code and run the unit tests directly
on your workstation as follows::

    $ git clone git://github.com/epics-containers/python3-pip-skeleton.git
    $ cd python3-pip-skeleton
    $ virtualenv .venv
    $ source .venv/bin/activate
    $ pip install -e .[dev]
    $ tox -p 

Checks
~~~~~~

In both cases tox -p runs in parallel the following checks.

  - Build Sphinx Documentation
  - run pytest on all tests in ./tests
  - run mypy linting on all files in ./src ./tests
  - run pre-commit checks:

    - run flake8 style checks against all source
    - run black formatting checks against all source


Code Styling
------------

The code in this repository conforms to standards set by the following tools:

- black_ for code formatting
- flake8_ for style checks
- isort_ for import ordering
- mypy_ for static type checking

flake8 and black be run by pre-commit_. You can run the above checks on
all files with this command::

    $ tox -e pre-commit,mypy

Or you can install a pre-commit hook that will run each time you do a ``git
commit`` on just the files that have changed. Note that mypy is not in
the pre-commit because it is a little slow ::

    $ pre-commit install

.. _black: https://github.com/psf/black
.. _flake8: https://flake8.pycqa.org/en/latest/
.. _isort: https://github.com/PyCQA/isort
.. _mypy: https://github.com/python/mypy
.. _pre-commit: https://pre-commit.com/

Docstrings are pre-processed using the Sphinx Napoleon extension. As such,
google-style_ is considered as standard for this repository. Please use type
hints in the function signature for types. For example::

    def func(arg1: str, arg2: int) -> bool:
        """Summary line.

        Extended description of function.

        Args:
            arg1: Description of arg1
            arg2: Description of arg2

        Returns:
            Description of return value
        """
        return True

.. _google-style: https://sphinxcontrib-napoleon.readthedocs.io/en/latest/index.html#google-vs-numpy

Documentation
-------------

Documentation is contained in the ``docs`` directory and extracted from
docstrings of the API.

Docs follow the underlining convention::

    Headling 1 (page title)
    =======================

    Heading 2
    ---------

    Heading 3
    ~~~~~~~~~

You can build the docs from the project directory by running::

    $ tox -e docs
    $ firefox build/html/index.html

Release Process
---------------

Releases are only made when the commandline tool needs to be released.
When this happens:

- Choose a new PEP440 compliant release number
- Go to the GitHub release_ page
- Choose ``Draft New Release``
- Click ``Choose Tag`` and supply the new tag you chose (click create new tag)
- Click ``Generate release notes``, review and edit these notes
- Choose a title and click ``Publish Release``

Note that tagging and pushing to the main branch has the same effect except that
you will not get the option to edit the release notes.

.. _release: https://github.com/epics-containers/python3-pip-skeleton/releases


Checking Dependencies
---------------------

To see a graph of the python package dependency tree type::

    pipdeptree
