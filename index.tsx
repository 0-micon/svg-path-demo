import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import * as SVGPathD from "svg-path-d";
import { PATH_SAMPLES } from "./svg-path/constants";
import { NumberList } from "./svg-path/List";
import { Path } from "./svg-path/Path";
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
        <Path path={path} selection={path[1]}/>
        <NumberList path={path} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
