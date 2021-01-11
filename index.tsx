import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import * as SVGPathD from "svg-path-d";
import { PATH_SAMPLES } from "./svg-path/constants";
import { NumberList } from "./svg-path/List";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

const path = SVGPathD.fromString(PATH_SAMPLES.batman);


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
          <path d={PATH_SAMPLES.batman} />
        </svg>
        <NumberList path={path} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
