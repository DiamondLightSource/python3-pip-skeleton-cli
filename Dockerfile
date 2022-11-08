# This file is for use as a devcontainer and a runtime container
#
# The devcontainer should use the build target and run as root with podman
# or docker with user namespaces.
#
FROM python:3.10 as build

# Add any system dependencies for the developer/build environment here e.g.
# RUN apt-get update && apt-get upgrade -y && \
#     apt-get install -y --no-install-recommends \
#     busybox \
#     && rm -rf /var/lib/apt/lists/* \
#     && busybox --install

COPY . /project
WORKDIR /project

# set up a virtual environment and put it in PATH
RUN python -m venv /venv
ENV PATH=/venv/bin:$PATH

# install the wheel
RUN touch requirements.txt && \
    for i in requirements.txt .gitignore lockfiles; do echo $i >> .gitignore; done && \
    git diff && \
    pip install -r requirements.txt dist/*.whl

FROM python:3.10-slim as runtime

# Add apt-get system dependecies for runtime here if needed

# copy the virtual environment from the build stage and put it in PATH
COPY --from=build /venv/ /venv/
ENV PATH=/venv/bin:$PATH

# change this entrypoint if it is not the same as the repo
ENTRYPOINT ["python3-pip-skeleton"]
CMD ["--version"]
