import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
//
import { Link, Router } from "components/Router";
import Dynamic from "containers/Dynamic";

import "./app.css";
import Footer from "./components/Footer";

import logo from "./assets/images/logo-no-words.png";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  return (
    <Root>
      <div className="content">
        <React.Suspense
          fallback={
            <div className="flex flex-1 flex-col h-screen justify-center items-center">
              <img src={logo} className="h-48 w-auto animate-pulse" />
              <div className="text-blue-800 mt-3 font-bold uppercase">
                Loading...
              </div>
            </div>
          }
        >
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
          <Footer />
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;
