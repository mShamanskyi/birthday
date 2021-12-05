import React, { useEffect, useState } from "react";
import qs from "qs";

import Stepper from "../Stepper/Stepper.js";
import FirstStep from "../FirstStep/FirstStep";
import SecondStep from "../SecondStep/SecondStep";
import ThirdStep from "../ThirdStep/ThirdStep";

import { INVITES } from "../../constants/invites.js";

import styles from "./Home.module.scss";

function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const { guest } = qs.parse(window.location.search.replace("?", ""));

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(null);

  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState(null);

  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };

    window.addEventListener("resize", appHeight);

    appHeight();

    return () => {
      window.removeEventListener("resize", appHeight);
    };
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.centeredWrapper}>
        <Stepper
          half={currentStep === 2 || currentStep === 3}
          full={currentStep === 3}
        />
        {(() => {
          switch (currentStep) {
            case 3:
              return (
                <ThirdStep
                  title={INVITES[guest ?? "unknown"].title}
                  invite={INVITES[guest ?? "unknown"].invite}
                  game={INVITES[guest ?? "unknown"].game}
                />
              );
            case 2:
              return (
                <SecondStep
                  externalClass={styles.stepWrapper}
                  date={date}
                  onInputChange={(date) => {
                    setDateError(null);
                    setDate(date);
                  }}
                  dateError={dateError}
                  onSubmit={() => {
                    if (date === "23") {
                      setCurrentStep(3);
                      return;
                    }

                    setDateError("Подумай еще!");
                  }}
                />
              );
            default:
              return (
                <FirstStep
                  name={name}
                  onInputChange={(name) => {
                    setNameError(null);
                    setName(name);
                  }}
                  nameError={nameError}
                  externalClass={styles.stepWrapper}
                  onSubmit={() => {
                    if (name.toLowerCase().includes("макс")) {
                      setCurrentStep(2);
                      return;
                    }

                    setNameError("Подумай еще!");
                  }}
                />
              );
          }
        })()}
      </div>
    </div>
  );
}

export default Home;
