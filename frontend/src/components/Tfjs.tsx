import * as tf from "@tensorflow/tfjs";

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Link, Box } from "@material-ui/core";
import SyntaxHighlighter from "react-syntax-highlighter";
import { solarizedDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const useStyles = makeStyles(() => ({
    root: {
        marginTop: "20px",
    },
}));

const codeInstallScriptTag = `<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.0/dist/tf.min.js"></script> # 🤮 `;
const codeInstallFrontendNpm = `npm install @tensorflow/tfjs`;
const codeInstallFrontendYarn = `yarn add @tensorflow/tfjs`;

const codeCreateSequentialModel = `\
const model = tf.sequential();
model.add(tf.layers.dense({inputShape: [784], units: 32, activation: 'relu'}));
model.add(tf.layers.dense({units: 10, activation: 'softmax'}));\
`;

const codeCreateFunctionalModel = `\
const input = tf.input({shape: [784]});
const dense1 = tf.layers.dense({units: 32, activation: 'relu'}).apply(input);
const dense2 = tf.layers.dense({units: 10, activation: 'softmax'}).apply(dense1);
const model = tf.model({inputs: input, outputs: dense2});

model.summary();
`;

const codeTrainModel = `\
model.compile({
    optimizer: "sgd",
    loss: "categoricalCrossentropy",
    metrics: ["accuracy"],
});

const dummyData = tf.randomNormal([100, 784]);
const dummyLabels = tf.randomUniform([100, 10]);

const onBatchEnd = (batch: any, logs: any) => {
    console.log("Accuracy", logs.acc);
}

model
    .fit(dummyData, dummyLabels, {
        epochs: 5,
        batchSize: 32,
        callbacks: { onBatchEnd },
    })
    .then((info) => {
        console.log("Final accuracy", info.history.acc);
    });\
`;

const codePredictSamples = `\
const threeMysteriousSamples = tf.randomNormal([3, 784])
const prediction = model.predict(threeMysteriousSamples);
prediction.print();
`;

const codeSaveModelLocalStorage = `await model.save('localstorage://datModel');`;
const codeSaveModelIndexedDb = `await model.save('indexeddb://datModel');`;
const codeSaveModelDownload = `await model.save('downloads://datModel');`;

const codeLoadModelFromLocalStorage = `\
const model = await tf.loadLayersModel('localstorage://datModel');
model.summary()\
`;

export const Tfjs: React.FC = () => {
    const classes = useStyles();
    const [trainedModel, setTrainedModel] = useState();

    const createModel = () => {
        const input = tf.input({ shape: [784] });
        const dense1 = tf.layers.dense({ units: 32, activation: "relu" }).apply(input);
        const dense2 = tf.layers.dense({ units: 10, activation: "softmax" }).apply(dense1);
        // @ts-ignore
        const model = tf.model({ inputs: input, outputs: dense2 });

        model.summary();
    };

    const trainModel = () => {
        const model = tf.sequential();
        model.add(tf.layers.dense({ inputShape: [784], units: 32, activation: "relu" }));
        model.add(tf.layers.dense({ units: 10, activation: "softmax" }));

        model.compile({
            optimizer: "sgd",
            loss: "categoricalCrossentropy",
            metrics: ["accuracy"],
        });

        const dummyData = tf.randomNormal([100, 784]);
        const dummyLabels = tf.randomUniform([100, 10]);

        const onBatchEnd = (batch: any, logs: any) => {
            console.log("Accuracy", logs.acc);
        };

        model
            .fit(dummyData, dummyLabels, {
                epochs: 5,
                batchSize: 32,
                callbacks: { onBatchEnd },
            })
            .then((info) => {
                console.log("Final accuracy", info.history.acc);
            });

        setTrainedModel(model);
    };

    const saveModelLocalStorage = async () => {
        if (trainedModel) {
            await trainedModel.save("localstorage://datModel");
        } else {
            console.log("Would you kindly train your model first...");
        }
    };

    const saveModelIndexedDb = async () => {
        if (trainedModel) {
            await trainedModel.save("indexeddb://datModel");
        } else {
            console.log("Would you kindly train your model first...");
        }
    };

    const saveModelDownload = async () => {
        if (trainedModel) {
            await trainedModel.save("downloads://datModel");
        } else {
            console.log("Would you kindly train your model first...");
        }
    };

    const predictSamples = () => {
        if (trainedModel) {
            const threeMysteriousSamples = tf.randomNormal([3, 784]);
            const prediction = trainedModel.predict(threeMysteriousSamples);
            prediction.print();
        } else {
            console.log("Would you kindly train your model first...");
        }
    };

    const loadModelFromLocalStorage = async () => {
        try {
            const model = await tf.loadLayersModel("localstorage://datModel");
            model.summary();
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className={classes.root}>
            <h3>Documentation</h3>
            La <Link href="https://www.tensorflow.org/js">documentation de TensorFlow JS</Link> est A1. Source quasi
            unique pour la présentation.
            <h3>Installation frontend</h3>
            <SyntaxHighlighter language="javascript" style={solarizedDark}>
                {codeInstallScriptTag}
            </SyntaxHighlighter>
            <SyntaxHighlighter language="bash" style={solarizedDark}>
                {codeInstallFrontendNpm}
            </SyntaxHighlighter>
            <SyntaxHighlighter language="bash" style={solarizedDark}>
                {codeInstallFrontendYarn}
            </SyntaxHighlighter>
            <h3>Créer un model séquentiel</h3>
            <SyntaxHighlighter language="javascript" style={solarizedDark}>
                {codeCreateSequentialModel}
            </SyntaxHighlighter>
            <h3>Créer un model fonctionnel</h3>
            <Link href="https://keras.io/getting-started/functional-api-guide/">Guide to functional API</Link>
            <SyntaxHighlighter language="javascript" style={solarizedDark}>
                {codeCreateFunctionalModel}
            </SyntaxHighlighter>
            <Button variant="outlined" onClick={createModel}>
                Run
            </Button>
            <h3>Entraîner un model</h3>
            <SyntaxHighlighter language="javascript" style={solarizedDark}>
                {codeTrainModel}
            </SyntaxHighlighter>
            <Button variant="outlined" onClick={trainModel}>
                Run
            </Button>
            <h3>Prédictions</h3>
            <SyntaxHighlighter language="javascript" style={solarizedDark}>
                {codePredictSamples}
            </SyntaxHighlighter>
            <Button variant="outlined" onClick={predictSamples}>
                Run
            </Button>
            <h3>Sauvegarder un modèle</h3>
            <Box display="flex" alignItems="center">
                <Box flexGrow={1}>
                    <SyntaxHighlighter language="javascript" style={solarizedDark}>
                        {codeSaveModelLocalStorage}
                    </SyntaxHighlighter>
                </Box>
                <Box>
                    <Button variant="outlined" onClick={saveModelLocalStorage}>
                        Run
                    </Button>
                </Box>
            </Box>
            <Box display="flex" alignItems="center">
                <Box flexGrow={1}>
                    <SyntaxHighlighter language="javascript" style={solarizedDark}>
                        {codeSaveModelIndexedDb}
                    </SyntaxHighlighter>
                </Box>
                <Box>
                    <Button variant="outlined" onClick={saveModelIndexedDb}>
                        Run
                    </Button>
                </Box>
            </Box>
            <Box display="flex" alignItems="center">
                <Box flexGrow={1}>
                    <SyntaxHighlighter language="javascript" style={solarizedDark}>
                        {codeSaveModelDownload}
                    </SyntaxHighlighter>
                </Box>
                <Box>
                    <Button variant="outlined" onClick={saveModelDownload}>
                        Run
                    </Button>
                </Box>
            </Box>
            <SyntaxHighlighter language="javascript" style={solarizedDark}>
                {`await model.save('http://model-server.domain/upload') // POST multipart/form-data avec les deux fichiers`}
            </SyntaxHighlighter>
            <h3>Charger le modèle</h3>
            Voir les modèles disponibles <Link href="https://www.tensorflow.org/js/models/">sur le site web</Link> ou
            sur <Link href="https://github.com/tensorflow/tfjs-models">Github</Link>. Where is my ResNet50?
            <Box display="flex" alignItems="center">
                <Box flexGrow={1}>
                    <SyntaxHighlighter language="javascript" style={solarizedDark}>
                        {codeLoadModelFromLocalStorage}
                    </SyntaxHighlighter>
                </Box>
                <Box>
                    <Button variant="outlined" onClick={loadModelFromLocalStorage}>
                        Run
                    </Button>
                </Box>
            </Box>
            <h3>Utilitaires TensorFlow</h3>
            Survoler la <Link href="https://js.tensorflow.org/api/latest/">documentation de l'API!</Link>
            <SyntaxHighlighter language="javascript" style={solarizedDark}>
                {`const cam = await tf.data.webcam(videoElement);`}
            </SyntaxHighlighter>
            <SyntaxHighlighter language="javascript" style={solarizedDark}>
                {`tf.browser.fromPixels(image)`}
            </SyntaxHighlighter>
            <SyntaxHighlighter language="javascript" style={solarizedDark}>
                {`const mic = await tf.data.microphone({...})`}
            </SyntaxHighlighter>
        </div>
    );
};
