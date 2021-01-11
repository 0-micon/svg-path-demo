import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { PATH_SAMPLES } from "./svg-path/constants";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <svg viewBox="0 0 1024 1024">
          <path d={PATH_SAMPLES.batman}></path>
        </svg>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
