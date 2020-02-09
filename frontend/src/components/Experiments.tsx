import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        typography: {
            padding: theme.spacing(2),
        },
        root: {
            marginTop: "20px",
        },
        anchoredButton: {
            marginTop: "5px",
            marginLeft: "-5px",
        },
    })
);

export const Experiments: React.FC = () => {
    const classes = useStyles();
    return <div className={classes.root}>Hello</div>;
};
