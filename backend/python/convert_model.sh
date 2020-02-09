#!/usr/bin/env bash

tensorflowjs_converter --input_format keras \
                       ./saved_model.h5 \
                       ./converted_dir/
