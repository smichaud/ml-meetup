import { Typography, Link, Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        marginTop: "20px",
    },
    img: {
        maxWidth: "400px",
    }
}));

export const Why: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box display="flex" alignItems="center">
                <Box flexGrow={1}>
                    <Typography variant="h3"> Pourquoi choisir JavaScript? </Typography>
                    <ul>
                        <li>Hypothèses / Intuitions</li>
                        <ul>
                            <li>Expérience ou stack en JS</li>
                            <li>Traitement côté client</li>
                            <li>Aucune installation ~, offline avec Service Worker</li>
                            <li>Multiplateforme (pas comme Python...)</li>
                            <li>Communauté ➡ Outils ➡ Intégration (e.g. visualisation)</li>
                        </ul>
                        <li>Limitations</li>
                        <ul>
                            <li>Browser (pas de vrai accès au disque, limite de stockage) </li>
                            <li>Thread unique (NodeJS et Browser)</li>
                            <li>Accès à la carte graphique?</li>
                        </ul>
                        <li>Exemples</li>
                        <ul>
                            <li>
                                <Link href="https://www.techrepublic.com/article/google-shows-off-whats-possible-using-the-javascript-programming-language-for-machine-learning/">
                                    JavaScript and machine learning
                                </Link>{" "}
                                (Nick Heath)
                            </li>
                            <ul>
                                <li>Uber Manifold</li>
                                <li>AirBnB Identity Document Detection</li>
                                <li>Google Creatibility (plutôt tinkering... musique)</li>
                            </ul>
                            <li>
                                <Link href="https://www.tensorflow.org/js/demos">TensorFlow Demos</Link>
                            </li>
                        </ul>
                    </ul>
                </Box>
                <Box display={{ xs: "none", md: "block" }}>
                    <img className={classes.img}
                        src="tenor.gif"
                        alt="But why, source: https://tenor.com/view/but-why-ryan-reynolds-meme-gif-8122079"
                    />
                </Box>
            </Box>
        </div>
    );
};
