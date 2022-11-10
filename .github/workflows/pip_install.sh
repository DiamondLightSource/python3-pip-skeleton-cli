#!/bin/bash

# A script to pip install a package with dependencies from requirements{suffix}.txt
# if requirements{suffix}.txt exists.
# Generates the requirements{suffix}.txt file once install is complete

# usage: install_with_requirements.sh suffix [remaining parameters to pip install]

requirements_file=$1
shift

touch ${requirements_file}
pip install -r ${requirements_file} "${@}"
mkdir -p lockfiles
# get a freeze of the installed packages but delete the self referencing line
pip freeze --exclude-editable | sed '/file:/d' > lockfiles/${requirements_file}
