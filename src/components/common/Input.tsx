import React, { InputHTMLAttributes, useState } from "react";
import { FieldError } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import ErrorMessage from "./ErrorMessage";
import { PinInput } from "react-input-pin-code";
import "react-phone-input-2/lib/style.css";
import makeAnimated from "react-select/animated";

type InputPropsType = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string | FieldError;
  customClass?: string;
  customClassInput?: string
  customClassLabel?: string
  customClassContainer?: string
};

export const animatedComponents = makeAnimated();

export function FormError({ error }: { error?: string | FieldError | any }) {
  const message =
    typeof error === "string" ? error : error ? error.message : error;
  if (!message) return null;

  return <ErrorMessage message={message} />;
}

// export const Input = React.forwardRef<HTMLInputElement, InputPropsType>(
//   (props, ref) => {
//     const { name, error, id, label, required, customClass, readOnly, ...rest } =
//       props;
//     return (
//       <>
//         <div className="mb-3">
//           <label
//             htmlFor={id}
//             className="form-label form-label-modal-custom"
//             aria-labelledby={id}
//           >
//             {label}
//             {required && (
//               <span
//                 className="text-danger custom-required-text"
//                 style={{ fontSize: 17 }}
//               >
//                 *
//               </span>
//             )}
//           </label>
//           <input
//             className={`form-control form-control-modal-custom ${
//               customClass && customClass
//             }`}
//             name={name}
//             id={id}
//             ref={ref}
//             readOnly={readOnly || false}
//             {...rest}
//             onWheel={(event) => event.currentTarget.blur()}
//           />
//           {<FormError error={error} />}
//         </div>
//       </>
//     );
//   }
// );

export const Input = React.forwardRef<HTMLInputElement, InputPropsType>(
  (props, ref) => {
    const { name, error, id, label, required, readOnly, customClassInput, customClassLabel, customClassContainer, ...rest } = props
    return (
      <>
        <div className={`${customClassContainer ? customClassContainer : "mb-3"}`}>
          {label && <label
            htmlFor={id}
            className={`form-label ${customClassLabel}`}
            aria-labelledby={id}
          >
            {label}
            {required && (
              <span className="text-danger" style={{ fontSize: 15 }}>
                *
              </span>
            )}
          </label>}
          <input
            className={`form-control  ${customClassInput}`}
            name={name}
            id={id}
            ref={ref}
            readOnly={readOnly || false}
            {...rest}
            onWheel={(event) => event.currentTarget.blur()}
          />
          {<FormError error={error} />}
        </div>
      </>
    )
  }
)

export const InputAgenda = React.forwardRef<HTMLInputElement, InputPropsType>(
  (props, ref) => {
    const { name, error, id, label, required, readOnly, ...rest } = props;
    return (
      <>
        <div className="mb-3">
          <label
            htmlFor={id}
            className="form-label form-label-modal-custom"
            aria-labelledby={id}
          >
            {label}
            {required && (
              <span className="text-danger" style={{ fontSize: 24 }}>
                *
              </span>
            )}
          </label>
          <input
            className="form-control form-control-modal-custom-agenda"
            name={name}
            id={id}
            ref={ref}
            readOnly={readOnly || false}
            {...rest}
            onWheel={(event) => event.currentTarget.blur()}
          />
          {<FormError error={error} />}
        </div>
      </>
    );
  }
);

export const InputPassword = React.forwardRef<HTMLInputElement, InputPropsType>(
  (props, ref) => {
    const { name, error, id, label, required, readOnly, ...rest } = props;
    const [showPassword, setShowPassword] = useState<boolean>(false);
    return (
      <>
        <label
          htmlFor={id}
          className="form-label form-label-admin"
          aria-labelledby={id}
        >
          {label}
          {required && (
            <span className="text-danger" style={{ fontSize: 24 }}>
              *
            </span>
          )}
        </label>
        <div className="input-group admin-custom-input-groupe mb-1">
          <input
            className="form-control form-control-admin"
            name={name}
            id={id}
            ref={ref}
            readOnly={readOnly || false}
            type={showPassword ? "text" : "password"}
            {...rest}
          />
          <span
            className="input-group-text admin-custom-showHideIcon"
            id="basic-addon2"
            onClick={() => setShowPassword((showPassword) => !showPassword)}
          >
            {showPassword ? (
              <FaEye className="showPasswordIcon" />
            ) : (
              <FaEyeSlash className="hidePasswordIcon" />
            )}
          </span>
        </div>
        {<FormError error={error} />}
      </>
    );
  }
);

export function RequiredText() {
  return (
    <span className="text-danger" style={{ fontSize: 24 }}>
      *
    </span>
  );
}

export const InputIcon = React.forwardRef<HTMLInputElement, InputPropsType>(
  (props, ref) => {
    const { name, error, id, label, required, readOnly, ...rest } = props;
    return (
      <>
        <div className="form-group position-relative mb-4">
          <label
            htmlFor={id}
            className="label-input custom-label-input"
            aria-labelledby={id}
          >
            {label}
            {required && (
              <span className="text-danger" style={{ fontSize: 24 }}>
                *
              </span>
            )}
          </label>
          <input
            className="form-control custom-form-control-modal custom-form-control-params-custom"
            name={name}
            id={id}
            ref={ref}
            readOnly={readOnly || false}
            {...rest}
          />
          <span
            className="input-group-text custom-kanimmo-custom-showHideIcon"
            id="basic-addon2"
          >
            <FiEdit />
          </span>
          {<FormError error={error} />}
        </div>
      </>
    );
  }
);

export const InputAdmin = React.forwardRef<HTMLInputElement, InputPropsType>(
  (props, ref) => {
    const { name, error, id, label, required, customClass, readOnly, ...rest } =
      props;
    return (
      <>
        <div className="mb-3">
          <label
            htmlFor={id}
            className="form-label form-label-admin"
            aria-labelledby={id}
          >
            {label}
            {required && (
              <span
                className="text-danger custom-required-text"
                style={{ fontSize: 17 }}
              >
                *
              </span>
            )}
          </label>
          <input
            className={`form-control form-control-admin ${
              customClass && customClass
            }`}
            name={name}
            id={id}
            ref={ref}
            readOnly={readOnly || false}
            {...rest}
            onWheel={(event) => event.currentTarget.blur()}
          />
          {<FormError error={error} />}
        </div>
      </>
    );
  }
);

export const InputUser = React.forwardRef<HTMLInputElement, InputPropsType>(
  (props, ref) => {
    const { name, error, id, label, required, customClass, readOnly, ...rest } =
      props;
    return (
      <>
        <div className="mb-3">
          <label
            htmlFor={id}
            className="form-label form-label-user-costom"
            aria-labelledby={id}
          >
            {label}
            {required && (
              <span
                className="text-danger custom-required-text"
                style={{ fontSize: 17 }}
              >
                *
              </span>
            )}
          </label>
          <input
            className={`form-control form-control-user-custom ${
              customClass && customClass
            }`}
            name={name}
            id={id}
            ref={ref}
            readOnly={readOnly || false}
            {...rest}
            onWheel={(event) => event.currentTarget.blur()}
          />
          {<FormError error={error} />}
        </div>
      </>
    );
  }
);

export const InputPin = () => {
  const [values, setValues] = React.useState(["", "", "", ""]);

  return (
    <PinInput
      values={values}
      onChange={(value, index, values) => setValues(values)}
    />
  );
};


