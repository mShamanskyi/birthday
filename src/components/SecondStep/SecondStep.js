import classNames from "classnames";
import React from "react";

import styles from "./SecondStep.module.scss";

function SecondStep({
  externalClass,
  onSubmit,
  date,
  dateError,
  onInputChange,
}) {
  return (
    <div className={classNames(styles.secondStepContainer, externalClass)}>
      <h1> Когда у него День Рождения?</h1>
      <div className={styles.inputWrapper}>
        <input
          value={date}
          className={classNames({ [styles.error]: !!dateError })}
          onChange={(event) => onInputChange(event.target.value)}
        />
        <span>Декабря</span>
      </div>
      <button
        type="button"
        onClick={onSubmit}
        className={classNames({ [styles.error]: !!dateError })}
      >
        {dateError ?? "Продолжить"}
      </button>
    </div>
  );
}

export default SecondStep;
