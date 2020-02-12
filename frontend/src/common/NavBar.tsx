import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Breadcrumbs, Link } from "@material-ui/core";
import { ROUTES } from "../constants";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginLeft: "5px",
    },
}));

export const NavBar: React.FC = () => {
    const classes = useStyles();

    return (
        <Breadcrumbs className={classes.root} separator="›" aria-label="breadcrumb">
            <Link
                color={window.location.pathname === ROUTES.OBJECTIVES ? "textPrimary" : "inherit"}
                href={ROUTES.OBJECTIVES}
            >
                Objectifs
            </Link>

            <Link color={window.location.pathname === ROUTES.CONTEXT ? "textPrimary" : "inherit"} href={ROUTES.CONTEXT}>
                Contexte
            </Link>

            <Link color={window.location.pathname === ROUTES.WHY ? "textPrimary" : "inherit"} href={ROUTES.WHY}>
                Pourquoi
            </Link>

            <Link color={window.location.pathname === ROUTES.TOOLS ? "textPrimary" : "inherit"} href={ROUTES.TOOLS}>
                Outils
            </Link>

            <Link color={window.location.pathname === ROUTES.TFJS ? "textPrimary" : "inherit"} href={ROUTES.TFJS}>
                TensorFlow
            </Link>

            <Link
                color={window.location.pathname === ROUTES.TFJS_BACKEND ? "textPrimary" : "inherit"}
                href={ROUTES.TFJS_BACKEND}
            >
                Backend
            </Link>

            <Link color={window.location.pathname === ROUTES.OPENCV ? "textPrimary" : "inherit"} href={ROUTES.OPENCV}>
                OpenCV
            </Link>

            <Link
                color={window.location.pathname === ROUTES.CONCLUSION ? "textPrimary" : "inherit"}
                href={ROUTES.CONCLUSION}
            >
                Conclusion
            </Link>
        </Breadcrumbs>
    );
};
