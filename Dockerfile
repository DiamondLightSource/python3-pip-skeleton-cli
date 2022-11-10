# This file is for use as a runtime container only, it depends on dist/
# and lockfiles being made outside the container
FROM python:3.11-slim as base
FROM base as build

# Add any system dependencies for the developer/build environment here e.g.
# RUN apt-get update && apt-get upgrade -y && \
#     apt-get install -y --no-install-recommends \
#     desired-packages \
#     && rm -rf /var/lib/apt/lists/*

COPY . /project
WORKDIR /project

# set up a virtual environment and put it in PATH
RUN python -m venv /venv
ENV PATH=/venv/bin:$PATH

# install the wheel
RUN pip install -r lockfiles/requirements.txt dist/*.whl

FROM base as runtime

# Add apt-get system dependecies for runtime here if needed

# copy the virtual environment from the build stage and put it in PATH
COPY --from=build /venv/ /venv/
ENV PATH=/venv/bin:$PATH

# change this entrypoint if it is not the same as the repo
ENTRYPOINT ["python3-pip-skeleton"]
CMD ["--version"]
