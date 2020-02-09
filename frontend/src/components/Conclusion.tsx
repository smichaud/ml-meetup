import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
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
                    <li>TFJS, console.log... please...</li>
                </ul>
                <li>Ma prédiction...: évolution des outils (GPU, WebAssembly, etc), tendance vers le web.</li>
                {/* <li>Expérience avec le frontend: </li>
                <ul>
                    <li>
                        Quelques accro de life cycle, css, typescript. Sinon,{" "}
                        <span role="img" aria-label="thumb up">
                            {" "}
                            👍{" "}
                        </span>{" "}
                    </li>
                </ul>
                <li>Utilisation du frontend pour la présentation.</li>
                <ul>
                    <li>Avantages: utilisation des outils du browser, navigation, flexible</li>
                    <li>Désavantages: overhead, visibilité?</li>
                    <li>Votre opinion?</li>
                </ul> */}
            </ul>
            <ul>
                <li>
                    Je profite de la plateforme pour
                    <ul>
                        <li>Sonder le terrain sur l'intérêt pour des partages de connaissances/tutoriaux ?</li>
                        <li>Recommendations pour digit recognition?</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};
