import { createGlobalStyle } from "styled-components";
import { LightTheme } from "./themes";

export const GlobalStyles = createGlobalStyle<{ theme: typeof LightTheme }>`
    body {
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.text};
    }

    a {
        color: ${(props) => props.theme.accent};
    }

    button {
        background-color: ${(props) => props.theme.button};
        color: ${(props) => props.theme.buttonText};
    }

    .border {
        border-color: ${(props) => props.theme.border};
    }

    .highlight {
        background-color: ${(props) => props.theme.highlight};
        color: ${(props) => props.theme.buttonText};
    }
`;
