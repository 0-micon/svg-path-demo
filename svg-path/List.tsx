import React from "react";
import { asRelativeString, asString, PathNode } from "svg-path-d";

export type ListItemProps = {
  click: () => void;
  fractionDigits?: number;
  item: PathNode;
  relative?: boolean;
  selected?: boolean;
};

export function ListItem(props: ListItemProps) {
  const toString = props.relative ? asRelativeString : asString;
  return (
    <li className={props.selected ? 'selected' : ''}  onClick={props.click}>{toString(props.item, props.fractionDigits)}</li>
  );
}

export type ListProps = {
  click: (index: number) => void;
  fractionDigits?: number;
  path: Readonly<PathNode[]>;
  relative?: boolean;
  selectionIndex: number;
};

export function NumberList(props: ListProps) {
  const listItems = props.path.map((item, index) => (
    <ListItem
      click={() => props.click(index)}
      fractionDigits={props.fractionDigits}
      item={item}
      key={index.toString()}
      relative={props.relative}
      selected={props.selectionIndex === index}
    />
  ));
  return <ol>{listItems}</ol>;
}
