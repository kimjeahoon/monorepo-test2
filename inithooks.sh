#!/bin/bash

cp -r .githooks/* .git/hooks
chmod +x .git/hooks/prepare-commit-msg