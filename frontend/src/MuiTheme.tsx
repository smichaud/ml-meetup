import { createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

export const rootTheme = createMuiTheme({
    palette: {
        primary: blue,
    },
    props: {
        MuiTypography: {
            variantMapping: {
                h1: "h4",
                h2: "h4",
                h3: "h4",
                h4: "h4",
                h5: "h4",
                h6: "h4",
                subtitle1: "h2",
                subtitle2: "h2",
                body1: "span",
                body2: "span",
            },
        },
    },
});
