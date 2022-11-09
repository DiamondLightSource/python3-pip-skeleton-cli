#!/bin/bash

# A script to pip install a package with dependencies from requirements{suffix}.txt
# if requirements{suffix}.txt exists.
# Generates the requirements{suffix}.txt file once install is complete

# usage: install_with_requirements.sh suffix [remaining parameters to pip install]

suffix=$1
shift

touch requirements-${suffix}.txt
pip install -r requirements-${suffix}.txt "${@}"
mkdir -p lockfiles
pip freeze --exclude-editable > lockfiles/requirements-${suffix}.txt
