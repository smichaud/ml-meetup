import React from "react";
import { Typography, Link } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
    },
}));

export const Copyright: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="body2" color="textSecondary" align="center">
                {"12 février 2020 - "}
                <Link color="inherit" href="https://www.linkedin.com/in/smichaud7/">
                    Sébastien Michaud
                </Link>{" "}
            </Typography>
        </div>
    );
};
