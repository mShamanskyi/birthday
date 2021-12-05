import classNames from "classnames";
import React from "react";

import styles from "./ThirdStep.module.scss";

function ThirdStep({ externalClass, title, invite, game }) {
  return (
    <div className={classNames(styles.thirdStepContainer, externalClass)}>
      <h1>{title}</h1>
      <p>{invite}</p>
      <p>{game}</p>
    </div>
  );
}

export default ThirdStep;
