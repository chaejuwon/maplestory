import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  palette: {
    white: "#fff",
    gray: {
      100: "#f5f5f5",
      200: "#d7d7d7",
      300: "#bdbdbd",
      400: "#989898",
      500: "#737373",
      600: "#5b5b5b",
      700: "#414141",
      800: "#363636",
      900: "#181818",
    },
    blue: "#0078D4",
    red: "#ff0002",
    yellow: "#fdf901"
  },
  component: {
    button: {
      text: "#fff",
      background: "#0078D4",
    },
    page: {
      background: "#181818",
      text: "#fff",
    },
    border: "#2B2B2B"
  }
};

// [data-theme="light"] {
//   --text-01: #000000;
//   --text-02: #616161;
//   --text-03: #858585;
//   --text-04: #707070;
//   --text-05: #e50000;
//   --text-06: #4d31f8;
//   --text-07: #098658;
//   --text-08: #af00db;
//   --text-09: #319382;
//
//   --background-01: #dddddd;
//   --background-02: #f3f3f3;
//   --background-03: #f3f3f3;
//   --background-04: #ffffff;
//   --background-05: #ececec;
//   --background-06: #f3f3f3;
//   --background-07: #007acc;
//   --background-08: #e8e8e8;
//   --background-09: #dcdcdc;
//   --background-10: #e4e6f1;
//   --background-11: #0060c0;
//   --background-12: #2c2c2c;
//   --background-13: #1e1e1e;
//   --background-14: #ffff;
//
//   --button-01: #1e85ca;
//   --button-02: #16825d;
//   --button-03: #c7c7c7;
//   --button-04: #308b6d;
//   --button-05: #ff7d7d;
//   --button-06: #ff9999;
//
//   --border-01: #cccccc;
//   --border-02: #d7d7d7;
//   --border-03: #c1c1c1;
//   --border-04: #007fd4;
//   --border-05: #4b4b4b;
//   --border-06: #ffffff;
//
//   --icon-01: #f2f2f2;
//   --icon-02: #ffffff;
//
//   --toolTip-bg: #f3f3f3;
//   --toolTip-border: #cccccc;
// }
//
// [data-theme="blue"] {
//   --text-01: #ffffff;
//   --text-02: #9bbce3;
//   --text-03: #9bbce3;
//   --text-04: #667485;
//   --text-05: #ffeead;
//   --text-06: #ff7d79;
//   --text-07: #ffa76a;
//   --text-08: #ff8e87;
//   --text-09: #ffd72a;
//
//   --background-01: #001126;
//   --background-02: #001733;
//   --background-03: #001c40;
//   --background-04: #002451;
//   --background-05: #001c40;
//   --background-06: #123158;
//   --background-07: #001126;
//   --background-08: rgba(48, 71, 100, 0.5);
//   --background-09: #1c3049;
//   --background-10: #304764;
//   --background-11: #616f81;
//   --background-12: #001733;
//   --background-13: #ffffff;
//   --background-14: #001733;
//
//   --button-01: #1d2c3d;
//   --button-02: #0e639c;
//   --button-03: #142437;
//   --button-04: #2b76a8;
//   --button-05: #00568f;
//   --button-06: #007acc;
//
//   --border-01: #1a304d;
//   --border-02: #1a304d;
//   --border-03: #334050;
//   --border-04: #007fd4;
//   --border-05: #c1c1c1;
//   --border-06: #ffffff;
//
//   --icon-01: #001939;
//   --icon-02: #ffffff;
//
//   --toolTip-bg: #001c40;
//   --toolTip-border: #455974;
// }
//
// [data-theme="purple"] {
//   --text-01: #ffffff;
//   --text-02: #eeeeee;
//   --text-03: #5f6b9e;
//   --text-04: #897d9b;
//   --text-05: #7ee9fd;
//   --text-06: #4ff87a;
//   --text-07: #bd93f9;
//   --text-08: #ff79c6;
//   --text-09: #bd93f9;
//
//   --background-01: #21222c;
//   --background-02: #191a21;
//   --background-03: #21222c;
//   --background-04: #282a36;
//   --background-05: #21222c;
//   --background-06: #353641;
//   --background-07: #191a21;
//   --background-08: #313341;
//   --background-09: #33343b;
//   --background-10: #313341;
//   --background-11: #44475a;
//   --background-12: #343746;
//   --background-13: #ffffff;
//   --background-14: #343746;
//
//   --button-01: #33343a;
//   --button-02: #bd93f9;
//   --button-03: #32333d;
//   --button-04: #5a4e79;
//   --button-05: #5a4e79;
//   --button-06: #bd93f9;
//
//   --border-01: #5a4e79;
//   --border-02: #282a36;
//   --border-03: #334050;
//   --border-04: #6272a4;
//   --border-05: #bd93f9;
//   --border-06: #ff79c6;
//
//   --icon-01: #1c1d26;
//   --icon-02: #ffffff;
//
//   --toolTip-bg: #282a36;
//   --toolTip-border: #6272a4;
// }