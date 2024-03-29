import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import TagManager from "react-gtm-module";

// Your top level component
import App from "./App";

const tagManagerArgs = {
  gtmId: "G-9WT2RRW47L",
};

// Export your top level component as JSX (for static rendering)
export default App;

// Render your app
if (typeof document !== "undefined") {
  TagManager.initialize(tagManagerArgs);
  const target = document.getElementById("root");

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render;

  const render = (Comp) => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      target
    );
  };

  // Render!
  render(App);

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept("./App", () => {
      render(App);
    });
  }
}
