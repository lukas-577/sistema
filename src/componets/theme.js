import { defaultTheme } from "react-admin";
import createMuiTheme from "@mui/material/styles/createMuiStrictModeTheme";
import merge from "lodash/merge";

export const theme = createMuiTheme(
    merge({}, defaultTheme, {
        palette: {
            // Your theme goes here
            // Write the following code to have an orange app bar. We'll explain it later in this article.
            secondary: {
                main: "#343a40", // Not far from orange
            },
        }
    })
);