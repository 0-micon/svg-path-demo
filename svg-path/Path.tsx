import React from "react";
import PathItem from "./PathItem";

import { asString, PathNode } from "svg-path-d";

export type PathProps = {
  path: PathNode[];
  selection?: PathNode;
  fractionDigits?: number;
};

export function Path(props: PathProps) {
  const pathData = props.path
    .map(item => asString(item, props.fractionDigits))
    .join("");
  return (
    <div>
      <svg viewBox="0 0 1024 1024">
        <path d={pathData} />
        {props.selection && <PathItem item={props.selection} />}
      </svg>
    </div>
  );
}
