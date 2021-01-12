import React from "react";
import { asString, PathNode, getX, getY } from "svg-path-d";

export type NodeProps = {
  item: PathNode;
  fractionDigits?: number;
};

export function Node(props: NodeProps) {
  const x0 = getX(props.item.prev);
  const y0 = getY(props.item.prev);
  const pathData = `M${x0} ${y0} ${asString(props.item, props.fractionDigits)}`;
  return <path d={pathData} fill="none" stroke="yellow" strokeWidth="3" />;
}

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
        {props.selection && <Node item={props.selection} />}
      </svg>
    </div>
  );
}
