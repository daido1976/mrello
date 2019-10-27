import React from "react";
import {
  Card as CardComponent,
  CardHeader,
  IconButton
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "whitesmoke",
      cursor: "pointer"
    }
  }
});

interface Props {
  title: string;
  onClick: any;
}

export const Card: React.FC<Props> = ({ title, onClick }) => {
  const classes = useStyles();

  return (
    <CardComponent className={classes.root}>
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
};
