import React from "react";
import {
  Card as CardComponent,
  CardHeader,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./index.module.scss";

interface Props {
  title: string;
  onClick: any;
}

export const Card: React.FC<Props> = ({ title, onClick }) => {
  return (
    <div>
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
      <div className={styles.myCard}>
        <div className={styles.myBody}>{title}</div>
        <div className={styles.myDeleteButton} onClick={onClick}>
          x
        </div>
      </div>
    </div>
  );
};
