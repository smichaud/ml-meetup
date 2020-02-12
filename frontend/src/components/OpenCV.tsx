import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        marginTop: "20px",
    },
}));

export const OpenCV: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h3">OpenCV.js</Typography>

            <ul>
                <li>
                    Documentation obscure...{" "}
                    <Link href="https://docs.opencv.org/3.4.9/d5/d10/tutorial_js_root.html">OpenCV</Link>,{" "}
                    <Link href="https://stackoverflow.com/questions/9129092/is-it-possible-to-use-opencv-or-similar-library-in-javascript">
                        StackOverflow
                    </Link>
                    , <Link href="https://github.com/ucisysarch/opencvjs">Github</Link>
                </li>
                <li>
                    Les exemples passent toujours par une compilation{" "}
                    <Link href="https://emscripten.org/">Emscripten</Link>.{" "}
                </li>
                <li> Il semble que `yarn add opencv.js` fonctionne... Maintenant, comment l'utiliser?</li>
            </ul>
        </div>
    );
};
