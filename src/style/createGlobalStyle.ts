import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../theme";
import MaplestoryLight from '../assets/fonts/MaplestoryLight.ttf';
import MaplestoryBold from '../assets/fonts/MaplestoryBold.ttf';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

@font-face {
  font-family: 'Maple';
  src: url(${MaplestoryLight}) format('truetype');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Maple';
  src: url(${MaplestoryBold}) format('truetype');
  font-weight: 600;
  font-style: normal;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
    display: block;
}

/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}

menu, ol, ul {
    list-style: none;
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

* {
    box-sizing: border-box;
}

body {
    font-weight: 300;
    font-family: 'Maple', sans-serif;
    color: ${props => props.theme.palette.gray[900]};
    line-height: 1.2;
    background-color: white;
}

a {
    text-decoration: none;
    color: inherit;
}

`;