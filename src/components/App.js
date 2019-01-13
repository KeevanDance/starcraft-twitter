import React from "react";
import { Global, css } from "@emotion/core";

const globalStyles = css`
  * {
    font-family: "Libre Baskerville", serif;
  }
  html {
    display: flex;
  }
  h1 {
    font-size: 48px;
    font-weight: 400;
    font-style: italic;
  }
`;

function App() {
  return (
    <div>
      <Global styles={globalStyles} />
      <h1>Starcraft Twitter</h1>
    </div>
  );
}

export default App;
