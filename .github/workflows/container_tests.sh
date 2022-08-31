#!/bin/bash
set -x

cd /project
source /venv/bin/activate

touch requirements_dev.txt
pip install -r requirements_dev.txt -e .[dev]
pip freeze --exclude-editable > dist/requirements_dev.txt

pipdeptree

git config --global user.email "you@example.com"
git config --global user.name "Your Name"

pytest tests
