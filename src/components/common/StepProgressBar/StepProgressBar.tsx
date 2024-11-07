import * as React from "react";
import "./StepProgressBar.css";

import {
  StepStates,
  ProgressStep,
  StepProgressProps,
  ReducerAction,
} from "./models";

function stepsReducer(
  steps: ProgressStep[],
  action: ReducerAction
): ProgressStep[] {
  return steps.map(function (step, i) {
    if (i < action.payload.index) {
      step.state = StepStates.COMPLETED;
    } else if (i === action.payload.index) {
      step.state = action.payload.state;
    } else {
      step.state = StepStates.NOT_STARTED;
    }
    return step;
  });
}

function StepProgressBar(props: StepProgressProps): JSX.Element {
  const {
    steps,
    startingStep,
    wrapperClass,
    progressClass,
    stepClass,
    labelClass,
    subtitleClass,
    contentClass,
    buttonWrapperClass,
    primaryBtnClass,
    secondaryBtnClass,
    submitBtnName,
    onSubmit,
    previousBtnName,
    nextBtnName,
    currentStep,
  } = props;
  const [state, dispatch] = React.useReducer(stepsReducer, steps);
  const [currentIndex, setCurrentIndex] = React.useState(startingStep);
  const [index, setIndex] = React.useState(0);

  React.useEffect(function () {
    dispatch({
      type: "init",
      payload: { index: currentIndex, state: StepStates.CURRENT },
    });
  }, []);

  React.useEffect(() => {
    // console.log(currentStep && currentStep >= 0);
    if (currentStep >= 0) {
        // console.log("current", currentStep);
      setIndex((prevState) => {
        if (prevState > currentStep) {
          dispatch({
            type: "previous",
            payload: {
              index: currentStep,
              state: StepStates.CURRENT,
            },
          });
        } else if (prevState < currentStep) {
          dispatch({
            type: "next",
            payload: {
              index: currentStep,
              state: StepStates.CURRENT,
            },
          });
        }
        setCurrentIndex(currentStep);
        return currentStep;
      });
      window.scrollTo(10, 10);

      //   dispatch({
      //     type: "init",
      //     payload: { index: index, state: StepStates.CURRENT },
      //   });
    }
  }, [currentStep]);

  function submitHandler(): void {
    onSubmit();
  }

  function nextHandler(): void {
    if (currentIndex === steps.length - 1) {
      return;
    }
    let isStateValid = true;
    const stepValidator = state[currentIndex].validator;

    if (stepValidator) {
      isStateValid = stepValidator();
    }
    dispatch({
      type: "next",
      payload: {
        index: isStateValid ? currentIndex + 1 : currentIndex,
        state: isStateValid ? StepStates.CURRENT : StepStates.ERROR,
      },
    });

    if (isStateValid) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function prevHandler(): void {
    if (currentIndex === 0) {
      return;
    }

    dispatch({
      type: "previous",
      payload: {
        index: currentIndex - 1,
        state: StepStates.CURRENT,
      },
    });
    setCurrentIndex(currentIndex - 1);
  }

  return (
    <div className={`${"progress-bar-wrapper"} ${wrapperClass || ""}`}>
      <ul className={`${"step-progress-bar"} ${progressClass || ""}`}>
        {state.map(function (step, i) {
          return (
            <li
              key={i}
              className={`${"progress-step"}${
                step.state === StepStates.COMPLETED ? ` completed` : ""
              }${step.state === StepStates.CURRENT ? ` current` : ""}${
                step.state === StepStates.ERROR ? ` ${"has-error"}` : ""
              } ${stepClass || ""}`}
            >
              {step.state === StepStates.COMPLETED && (
                <span className={"step-icon"}>
                  <svg
                    width="1.5rem"
                    viewBox="0 0 13 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 3.5L4.5 7.5L12 1"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              )}
              {step.state === StepStates.ERROR && (
                <span className={"step-icon"}>!</span>
              )}
              {step.state !== StepStates.COMPLETED &&
                step.state !== StepStates.ERROR && (
                  <span className={"step-index"}>{i + 1}</span>
                )}
              <div className={`${"step-label"} ${labelClass || ""}`}>
                {step.label}
                {step.subtitle && (
                  <div
                    className={`${"step-label-subtitle"} ${
                      subtitleClass || ""
                    }`}
                  >
                    {step.subtitle}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      <div className={`${"step-content"} ${contentClass || ""}`}>
        {props.steps[currentIndex].content}
      </div>

      <div className={`${"step-buttons d-none"} ${buttonWrapperClass || ""}`}>
        <a
          className={`${"step-action-btn"} ${"action-btn-secondary"} ${
            currentIndex === 0 ? "disabled" : ""
          } ${secondaryBtnClass || ""}`}
          onClick={prevHandler}
        >
          {previousBtnName ? previousBtnName : "Previous"}
        </a>
        {currentIndex === state.length - 1 ? (
          <a
            className={`${"step-action-btn"} ${"action-btn-primary"} ${
              primaryBtnClass || ""
            }`}
            onClick={submitHandler}
          >
            {submitBtnName || "Submit"}
          </a>
        ) : (
          <a
            className={`${"step-action-btn"} ${"action-btn-primary"} ${
              primaryBtnClass || ""
            }`}
            onClick={nextHandler}
          >
            {nextBtnName ? nextBtnName : "Next"}
          </a>
        )}
      </div>
    </div>
  );
}

export default StepProgressBar;
