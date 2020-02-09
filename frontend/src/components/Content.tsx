import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { ROUTES } from "../constants";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: "20px",
    },
}));

export const Content: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h3"> Aperçu de la présentation</Typography>

            <ol>
                <li>
                    <a href={ROUTES.CONTEXT}>Contexte et Can-Explore</a>
                </li>
                <li>
                    <a href={ROUTES.WHY}>Pourquoi / Exemple d'utilisation</a>
                </li>
                <li>
                    <a href={ROUTES.TOOLS}>Outils / Librairies</a>
                </li>
                <li>
                    <a href={ROUTES.TFJS}>TensorFlow JS</a>
                </li>
                <li>
                    <a href={ROUTES.OPENCV}>OpenCV JS</a>
                </li>
                <li>
                    <a href={ROUTES.CONCLUSION}>Conclusion</a>
                </li>
            </ol>
        </div>
    );
};
