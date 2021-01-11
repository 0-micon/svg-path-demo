import React from "react";
import { asRelativeString, asString, PathNode } from "svg-path-d";

export type ListItemProps = {
  item: PathNode;
  relative?: boolean;
  fractionDigits?: number;
};

export function ListItem(props: ListItemProps) {
  const toString = props.relative ? asRelativeString : asString;
  return <li>{toString(props.item, props.fractionDigits)}</li>;
}

export type ListProps = {
  path: Readonly<PathNode[]>;
  fractionDigits?: number;
};

export function NumberList(props: ListProps) {
  const listItems = props.path.map((item, index) => (
    <ListItem
      key={index.toString()}
      item={item}
      fractionDigits={props.fractionDigits}
    />
  ));
  return <ul>{listItems}</ul>;
}
