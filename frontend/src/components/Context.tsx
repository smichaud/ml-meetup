import { Typography, Link, Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import YouTube from "react-youtube";

const useStyles = makeStyles(() => ({
    root: {
        marginTop: "20px",
    },
    vid: {
        maxWidth: "400px",
    },
}));

export const Context: React.FC = () => {
    const classes = useStyles();
    const opts = {};

    return (
        <div className={classes.root}>
            <Typography variant="h3">Contexte</Typography>
            <Box display="flex">
                <Box flexGrow={1}>
                    <ol>
                        <li>
                            <Link href="https://www.can-explore.com/">Can-Explore</Link> ➡{" "}
                            <Link href="https://xpect.io/">xpect.io</Link>
                        </li>
                        <ul>
                            <li>
                                <Link href="https://www.youtube.com/channel/UCIBE-GQM9_s7ZymE4R41t0g ">YouTube</Link>,{" "}
                                <Link href="https://www.linkedin.com/company/9297433">LinkedIn</Link>,{" "}
                                <Link href="">Facebook</Link>...
                            </li>
                        </ul>

                        <li>Équipe / Mandats</li>
                        <ul>
                            <li> Développeurs (x8)</li>
                            <ul>
                                <li>Applications Web (Python/React)</li>
                                <li>Machine Learning: traitement d'images (TensorFlow)</li>
                            </ul>
                            <li> Ingénieurs mécaniques (x2)</li>
                            <ul>
                                <li>Conception (e.g. roues, chenilles, supports)</li>
                            </ul>
                        </ul>
                        <li>Bio / Intérêts</li>
                        <li>OpenCV JS?... TensorFlow JS?... Utile?</li>

                        <li>Question: vos connaissances en Web et ML?</li>
                    </ol>
                </Box>

                <Box>
                    <YouTube className={classes.vid} videoId="IRQJxyuxDx4" opts={opts} onReady={() => {}} />
                </Box>
            </Box>
        </div>
    );
};
