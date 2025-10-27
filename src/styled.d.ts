import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            white: string;
            gray: {
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
                600: string;
                700: string;
                800: string;
                900: string;
            },
            blue: string;
            red: string;
            yellow: string;
        },
        component: {
            button: {
                text: string;
                background: string;
            },
            page: {
                background: string;
                text: string;
            },
            border: string;
        }
    }
}