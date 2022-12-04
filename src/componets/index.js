import { theme } from "./theme";

render(
    <Admin
        title="Example Admin"
        layout={Layout}
        theme={theme} // Add your theme to react-admin
    >
        { /* Resources goes here */}
    </Admin>,
    document.getElementById("root")
);