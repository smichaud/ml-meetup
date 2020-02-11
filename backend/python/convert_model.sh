#!/usr/bin/env bash

tensorflowjs_converter --input_format keras \
                       ./saved_model/model.hdf5 \
                       ./converted_model/
