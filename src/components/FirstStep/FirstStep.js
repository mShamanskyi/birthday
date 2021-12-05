import classNames from "classnames";
import React from "react";

import MaksPhoto from "../../assets/my_photo.jpeg";

import styles from "./FirstStep.module.scss";

function FirstStep({
  externalClass,
  onSubmit,
  name,
  onInputChange,
  nameError,
}) {
  return (
    <div className={classNames(styles.firstStepContainer, externalClass)}>
      <h1>Назовите полное имя человека, изображенного на фото?</h1>
      <img src={MaksPhoto} alt="shaman" />
      <input
        value={name}
        className={classNames({ [styles.error]: !!nameError })}
        onChange={(event) => onInputChange(event.target.value)}
      />
      <button
        type="button"
        onClick={onSubmit}
        className={classNames({ [styles.error]: !!nameError })}
      >
        {nameError ?? "Продолжить"}
      </button>
    </div>
  );
}

export default FirstStep;
