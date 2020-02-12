import * as tf from "@tensorflow/tfjs";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Box } from "@material-ui/core";
import SyntaxHighlighter from "react-syntax-highlighter";
import { solarizedDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const useStyles = makeStyles(() => ({
    root: {
        marginTop: "20px",
    },
}));

const codeInstallNode = `yarn add @tensorflow/tfjs`;
const codeInstallGpu = `yarn add @tensorflow/tfjs-node-gpu # Linux only!`;

const codeConvertPython2TfjsBash = `\
# bash
tensorflowjs_converter --input_format keras \\
                       path/to/my_model.h5 \\
                       path/to/tfjs_target_dir
`;

const codeConvertPython2TfjsPython = `\
import tensorflowjs as tfjs

def train(...):
    model = keras.models.Sequential()
    ...
    model.compile(...)
    model.fit(...)
    tfjs.converters.save_keras_model(model, tfjs_target_dir)\
`;

const codeLoadJsonModel = `\
const model = await tf.loadLayersModel('http://localhost:5000/model.json');
model.summary()\
`;

export const TfjsBackend: React.FC = () => {
    const classes = useStyles();
    const loadModel = async () => {
        const model = await tf.loadLayersModel("http://localhost:5000/model.json");
        console.log("should come from my backend....");
        model.summary();
    };

    return (
        <div className={classes.root}>
            <h3>Installation node</h3>
            <SyntaxHighlighter language="bash" style={solarizedDark}>
                {codeInstallNode}
            </SyntaxHighlighter>
            <SyntaxHighlighter language="bash" style={solarizedDark}>
                {codeInstallGpu}
            </SyntaxHighlighter>
            <h3>Convertir un modèle de Python</h3>
            <SyntaxHighlighter language="bash" style={solarizedDark}>
                {codeConvertPython2TfjsBash}
            </SyntaxHighlighter>
            <SyntaxHighlighter language="python" style={solarizedDark}>
                {codeConvertPython2TfjsPython}
            </SyntaxHighlighter>
            <h3>Charger le modèle</h3>
            <Box display="flex" alignItems="center">
                <Box flexGrow={1}>
                    <SyntaxHighlighter language="javascript" style={solarizedDark}>
                        {codeLoadJsonModel}
                    </SyntaxHighlighter>
                </Box>
                <Box>
                    <Button variant="outlined" onClick={loadModel}>
                        Run
                    </Button>
                </Box>
            </Box>
        </div>
    );
};
