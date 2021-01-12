import React from "react";
import {
  asString,
  PathNode,
  getX,
  getY,
  isSmoothCurveTo,
  promoteToCurve,
  isSmoothQCurveTo,
  promoteToQCurve
} from "svg-path-d";

export type Props = {
  item: PathNode;
  fractionDigits?: number;
  stroke?: string;
  strokeWidth?: number;
};

export default (props: Props) => {
  const stroke = props.stroke || "yellow";
  const strokeWidth = props.strokeWidth || 3;

  return (
    <path
      d={toPath(props.item, props.fractionDigits)}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  );
};

function toPath(item: PathNode, fractionDigits?: number): string {
  const x0 = getX(item.prev);
  const y0 = getY(item.prev);

  const M0 = `M${x0} ${y0}`;

  if (isSmoothCurveTo(item)) {
    item = promoteToCurve(item);
  } else if (isSmoothQCurveTo(item)) {
    item = promoteToQCurve(item);
  }
  return M0 + asString(item, fractionDigits);
}
