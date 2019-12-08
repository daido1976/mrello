import React from "react";
import styles from "./index.module.scss";

interface Props {
  title: string;
  onClick: any;
}

export const Card: React.FC<Props> = ({ title, onClick }) => {
  return (
    <div>
      <div className={styles.myCard}>
        <div className={styles.myBody}>{title}</div>
        <div className={styles.myDeleteButton} onClick={onClick}>
          x
        </div>
      </div>
    </div>
  );
};
