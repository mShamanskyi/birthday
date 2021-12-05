import React from "react";
import classNames from "classnames";

import styles from "./Stepper.module.scss";

function Stepper({ half, full }) {
  return (
    <div className={styles.stepperContainer}>
      <div
        className={classNames(styles.centerLine, {
          [styles.half]: half,
          [styles.full]: full,
        })}
      />
      <div className={classNames(styles.stepWrapper, styles.firstStep)}>
        <div />
        <span>Старт</span>
      </div>
      <div
        className={classNames(styles.stepWrapper, styles.secondStep, {
          [styles.half]: half,
        })}
      >
        <div />
        <span>Проверка</span>
      </div>
      <div
        className={classNames(styles.stepWrapper, styles.thirdStep, {
          [styles.full]: full,
        })}
      >
        <div />
        <span>Финал</span>
      </div>
    </div>
  );
}

export default Stepper;
