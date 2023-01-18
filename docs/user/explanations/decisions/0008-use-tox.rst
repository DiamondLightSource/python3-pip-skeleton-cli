8. Use tox and pre-commit
=========================

Date: 2023-01-18

Status
------

Accepted

Context
-------

We require an easy way to locally run the same checks as CI. This provides a
rapid inner-loop developer experience.

Decision
--------

Use tox and pre-commit.

tox is an automation tool that we use to run all checks in parallel,
see https://tox.wiki/en/latest/.

pre-commit provides a hook into git commit which runs some of the checks
against the changes you are about to commit.


Consequences
------------

Running ``tox -p`` before pushing to GitHub verifies that the CI will *most
likely* succeed.

Committing changes to git will run all of the non-time critical checks and
help avoid some of the most common mistakes.