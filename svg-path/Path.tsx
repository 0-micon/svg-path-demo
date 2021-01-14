import React from "react";
import { asString, PathNode, getBoundingRect } from "svg-path-d";
import PathItem from "./PathItem";

export type PathProps = {
  path: PathNode[];
  selection?: PathNode;
  fractionDigits?: number;
};

export function Path(props: PathProps) {
  const rc = getBoundingRect(props.path);
  const viewBox =
    `${Math.floor(rc.left)} ${Math.floor(rc.top)} ` +
    `${Math.ceil(rc.right - rc.left) + 1} ${Math.ceil(rc.bottom - rc.top) + 1}`;
  const pathData = props.path
    .map(item => asString(item, props.fractionDigits))
    .join("");
  return (
    <div>
      <svg viewBox={viewBox}>
        <path d={pathData} />
        {props.selection && <PathItem item={props.selection} />}
      </svg>
    </div>
  );
}
