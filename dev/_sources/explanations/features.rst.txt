Feature Update History
======================

August 18th 2022
----------------

.. _CLI: https://epics-containers.github.io/python3-pip-skeleton-cli/
.. _skeleton: https://epics-containers.github.io/python3-pip-skeleton/

- Project split into 2 repos
  
  - this project CLI_ provides this documentation and the code for adopting
    skeleton
  - the skeleton_ project provides the template source for adoption 
  - this avoids the confusion of using two 'main' branches in a single repo
  - it also allows for separate github settings for the CLI and skeleton as
    follows:

    - TODO list github branch and PR settings 

- Now allow CI to run on all branches but avoid duplicate CI runs using
  https://github.com/marketplace/actions/skip-duplicate-actions
- Now use non-editable pip install for tests that do not use requirements.txt

  - This verifies that the packaging is working  

- the --org option when adopting is now mandatory to avoid accidentally 
  creating a repo for the default org.
- moved 'contributing.rst' from reference to how-to meaning that we no
  longer require a dummy how-to article
- removed example code hello.py meaning that this does not 
  have to be deleted after adopting. Also removed related tests.
- Skeleton README reduced to remove example code and to point at 
  skeleton-cli for instructions.
- Github PR Policy set to rebase only for skeleton and any for cli. This is
  to remove any commit hashes from commit comments. If these are present then
  github will add incorrect comments to the target repo.
  