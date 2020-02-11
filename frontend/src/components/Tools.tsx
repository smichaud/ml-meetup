import { Typography, Link } from "@material-ui/core";
import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: "20px",
    },
}));

export const Tools: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h3"> Outils / Libraries </Typography>
            <ul>
                <li>
                    <Link href="https://hackernoon.com/machine-learning-with-javascript-part-1-9b97f3ed4fe5">
                        Machine Learning with JavaScript
                    </Link>{" "}
                    (Abhishek Soni)
                </li>
                <ul>
                    <li>
                        <li>
                            <Link href="https://github.com/harthur-org/brain.js">brain.js</Link> (Neural Networks) -- ⭐
                            10.7k,{" "}
                            <Link href="https://npm-stat.com/charts.html?package=brain.js">289,603 npm downloads</Link>
                        </li>
                        <li>
                            <Link href="https://github.com/cazala/synaptic">Synaptic</Link> (Neural Networks) -- ⭐
                            6.7k,{" "}
                            <Link href="https://npm-stat.com/charts.html?package=synaptic">30,420 npm downloads</Link>
                        </li>
                        <li>
                            <Link href="https://github.com/NaturalNode/natural">Natural</Link> (Natural Language
                            Processing) -- ⭐ 9k,{" "}
                            <Link href="https://npm-stat.com/charts.html?package=natural">3,779,661 npm downloads</Link>
                        </li>
                        <li>
                            <Link href="https://github.com/karpathy/convnetjs">ConvNetJS</Link> (Convolutional Neural
                            Networks) -- ⭐ 9.9k,{" "}
                            <Link href="https://npm-stat.com/charts.html?package=convnetjs">33,910 npm downloads</Link>{" "}
                            ... Andrej karpathy
                        </li>
                        <li>
                            <Link href="https://github.com/wagenaartje/neataptic">Neataptic</Link> (Neural Networks) --
                            ⭐ 951,{" "}
                            <Link href="https://npm-stat.com/charts.html?package=neataptic">7,496 npm downloads</Link>
                        </li>
                        <li>
                            <Link href="https://github.com/mil-tokyo/webdnn">Webdnn</Link> (Deep Learning) -- ⭐ 1.7k,{" "}
                            <Link href="https://npm-stat.com/charts.html?package=webdnn">1,774 npm downloads</Link>
                        </li>
                        <li>
                            <Link href="https://github.com/mljs">mljs</Link> (ml, matrix, pca, knn, libsvm) -- ⭐ 😥,{" "}
                        </li>
                    </li>
                </ul>
            </ul>
            <ul>
                <li>
                    <Link href="https://github.com/tensorflow/tfjs">TensorFlow.js</Link> (💀 Keras.js) -- ⭐ 12.6k,{" "}
                    <Link href="https://npm-stat.com/charts.html?package=tfjs">2,367 npm downloads</Link>
                </li>
            </ul>
            <ul>
                <li>Utilisation et fonctions relativement similaires entre les libs</li>
                <ul>
                    <li>Ingestion des données</li>
                    <li>Entrainement</li>
                    <li>Predictions</li>
                    <li>Serialisation de modèle en JSON</li>
                    <li>
                        Certaine fonctions utilitaires propre au domaine (e.g. fetch de wikipedia, tokenizer, filtres
                        d'images){" "}
                    </li>
                </ul>
            </ul>
        </div>
    );
};
