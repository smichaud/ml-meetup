import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        marginTop: "20px",
    },
}));

export const Objectives: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h3"> Objectifs de la présentation</Typography>

            <p>
                Note: <b>Repo Github</b> (/smichaud/ml-meetup)
            </p>

            <ol>
                <li>Familiarisation avec le Frontend -- Go hard or Go home</li>
                <li>Mieux comprendre l'intérêt d'utiliser le JavaScript</li>
                <li>Avoir une vue d'ensemble des outils disponibles</li>
                <li>Mettre en pratique avec TensorFlow.js</li>
                <li>Découvrir les possibilté avec OpenCV.js</li>
            </ol>
        </div>
    );
};
