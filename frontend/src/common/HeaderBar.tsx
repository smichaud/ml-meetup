import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import GithubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            display: "none",
            [theme.breakpoints.up("sm")]: {
                display: "block",
            },
        },
    })
);

export const HeaderBar: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        href="/"
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <HomeIcon />
                    </IconButton>
                    <div className={classes.grow} />
                    <Typography className={classes.title} variant="h6" noWrap>
                        JavaScript: Une exploration
                    </Typography>
                    <div className={classes.grow} />
                    <div>
                        <IconButton href="mailto:sebastien.michaud.2@gmail.com" color="inherit">
                            <MailIcon />
                        </IconButton>
                        <IconButton href="https://github.com/smichaud/ml-meetup" edge="end" color="inherit">
                            <GithubIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};
