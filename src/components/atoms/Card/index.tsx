import React from "react";
import {
  Card as CardComponent,
  CardHeader,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

interface Props {
  title: string;
  onClick: any;
}

export const Card = ({ title, onClick }: Props) => (
  <CardComponent>
    <CardHeader
      action={
        <IconButton aria-label="delete" onClick={onClick}>
          <DeleteIcon />
        </IconButton>
      }
      title={title}
    />
  </CardComponent>
);
