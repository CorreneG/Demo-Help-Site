import grey from "@material-ui/core/colors/grey";
import orange from "@material-ui/core/colors/orange";
import cyan from "@material-ui/core/colors/cyan";
import { createMuiTheme } from "@material-ui/core/styles";

// A theme with custom primary and secondary color.
// It's optional.
export const theme = createMuiTheme({
    palette: {
        primary: {
            light: cyan[500],
            main: "rgb(10, 77, 156)",
            dark: cyan[900],
        },
        secondary: {
            light: orange[300],
            main: orange[500],
            dark: orange[700],
        },
        text: {
            secondary: grey[600],
        },
        background: {
            default: grey[50],
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
    },
    shape: {
        borderRadius: 2,
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    fontFamily: "Roboto, sans-serif",
                },
            },
        },
    },
});
