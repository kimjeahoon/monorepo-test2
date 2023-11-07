#!/bin/bash

servers="v1 manager customer public admin"

# for server in ${servers}; do
#     yq w -i './update.yaml' "gw${server}.image.tag" '13-123123'
# done

yq w -i ./update.yaml "gwv1.image.tag" "13-123123"