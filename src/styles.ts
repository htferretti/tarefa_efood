import { createGlobalStyle } from "styled-components";

export const colors = {
    biege: '#FFF8F2',
    darkBiege: '#FFEBD9',
    red: '#E66767',
    white: '#FFFFFF'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        transition: 0.2s;
    }

    body {
        background: ${colors.biege};
    }
`