import { createGlobalStyle } from "styled-components";

type ThemeType = typeof Theme;

const Theme = {
    body: 'hsla(0, 0%, 98%, 1)',
}

export const GlobalStyles = createGlobalStyle<{theme: ThemeType }>`
    body {
        background-color: ${props => props.theme.body}
    }
`;