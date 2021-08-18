import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";

ReactDOM.render(
  <BrowserRouter>
    <Global
      styles={css`
        ${emotionReset}
        a {
          text-decoration: none;
          color: inherit;
        }
        * {
          box-sizing: border-box;
        }
        body {
          font-family: "Noto Sans KR", sans-serif;
        }
      `}
    />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
