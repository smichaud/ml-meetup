import "typeface-roboto";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Container, ThemeProvider } from "@material-ui/core";

import { HeaderBar } from "./common/HeaderBar";
import { Copyright } from "./common/Copyright";
import { NavBar } from "./common/NavBar";
import { rootTheme } from "./MuiTheme";
import { ROUTES } from "./constants";
import { Objectives } from "./components/Objectives";
import { Context } from "./components/Context";
import { Tfjs } from "./components/Tfjs";
import { TfjsBackend } from "./components/TfjsBackend";
import { OpenCV } from "./components/OpenCV";
import { Tools } from "./components/Tools";
import { Why } from "./components/Why";
import { Conclusion } from "./components/Conclusion";

const useStyles = makeStyles(() => ({
    header: {
        flex: "0 0 auto",
    },
    mainContainer: {
        flex: "1 0 auto",
    },
    footer: {
        flex: "0 0 auto",
    },
}));

const App: React.FC = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={rootTheme}>
            <div className={classes.header}>
                <HeaderBar />
                <NavBar />
            </div>
            <div className={classes.mainContainer}>
                <Router>
                    <Container>
                        <Switch>
                            <Route exact path={ROUTES.OBJECTIVES} component={Objectives} />
                            <Route exact path={ROUTES.CONTEXT} component={Context} />
                            <Route exact path={ROUTES.WHY} component={Why} />
                            <Route exact path={ROUTES.TOOLS} component={Tools} />
                            <Route exact path={ROUTES.TFJS} component={Tfjs} />
                            <Route exact path={ROUTES.TFJS_BACKEND} component={TfjsBackend} />
                            <Route exact path={ROUTES.OPENCV} component={OpenCV} />
                            <Route exact path={ROUTES.CONCLUSION} component={Conclusion} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Container>
                </Router>
            </div>
            <div className={classes.footer}>
                <Copyright />
            </div>
        </ThemeProvider>
    );
};

export default App;
