#!/bin/bash
pushd /Users/caherita/code/estilo-calico/dist
aws s3 cp . s3://estilocalico-bucket/ --exclude "*" --include "*" --recursive
aws cloudfront create-invalidation --distribution-id EC1VIPI0RW3DQ --paths '/*' 
popd