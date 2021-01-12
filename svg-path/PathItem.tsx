import React from "react";
import { asString, PathNode, getX, getY } from "svg-path-d";

export type Props = {
  item: PathNode;
  fractionDigits?: number;
  stroke?: string;
  strokeWidth?: number;
};

export default (props: Props) => {
  const item = props.item;

  const x0 = getX(item.prev);
  const y0 = getY(item.prev);
  const pathData = `M${x0} ${y0} ${asString(props.item, props.fractionDigits)}`;

  const stroke = props.stroke || "yellow";
  const strokeWidth = props.strokeWidth || 3;

  return (
    <path d={pathData} fill="none" stroke={stroke} strokeWidth={strokeWidth} />
  );
};
