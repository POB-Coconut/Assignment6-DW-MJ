import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

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
          font-family: 'Noto Sans KR', sans-serif;
        }
      `}
    />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
