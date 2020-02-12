import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        marginTop: "20px",
    },
}));

export const Conclusion: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h3">Conclusion</Typography>
            <ul>
                <li>Javascript pour le ML</li>
                <ul>
                    <li>Facile d'installation et d'utilisation</li>
                    <li>Un bon éventail d'outils/fonctionnalités</li>
                    <li>TensorFlow, pas trop dépaysant</li>
                    <li>Synergise bien avec Python</li>
                    <li>TensorFlow.js, console.log... please...</li>
                </ul>
                <li>My two cents...</li>
            </ul>
            <ul>
                <li>
                    Je profite de la plateforme pour
                    <ul>
                        <li>Sonder le terrain sur l'intérêt pour des évènements tutoriaux/hands-on/challenges ?</li>
                        <li>Recommendations pour digit recognition dans les vidéos?</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};
