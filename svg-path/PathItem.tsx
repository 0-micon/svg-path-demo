import React from "react";
import {
  asString,
  getX,
  getY,
  isClosePath,
  isMoveTo,
  isSmoothCurveTo,
  isSmoothQCurveTo,
  PathNode,
  promoteToCurve,
  promoteToLine,
  promoteToQCurve
} from "svg-path-d";

export type Props = {
  item: PathNode;
  fractionDigits?: number;
  stroke?: string;
  strokeDasharray?: string;
  strokeWidth?: number;
};

export default (props: Props) => {
  const stroke = props.stroke || "yellow";
  const strokeWidth = props.strokeWidth || 3;
  const strokeDasharray = props.strokeDasharray || "3 2";

  return (
    <path
      d={toPath(props.item, props.fractionDigits)}
      fill="none"
      stroke={stroke}
      strokeDasharray={strokeDasharray}
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
  } else if (isMoveTo(item) || isClosePath(item)) {
    item = promoteToLine(item);
  }
  return M0 + asString(item, fractionDigits);
}
