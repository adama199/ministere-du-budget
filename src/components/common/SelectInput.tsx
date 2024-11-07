import React, { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { FormError } from "./Input";
// import { FormError } from "./CustomInputCheckbox";

type InputPropsType = InputHTMLAttributes<HTMLSelectElement> & {
	label?: string
	error?: string | FieldError
	customClassInput?: string
	customClassLabel?: string
	hiddenFirstOption?: boolean
	options?: {
	  label: string
	  value: any
	}[]
};
export const SelectInput = React.forwardRef<HTMLSelectElement, InputPropsType>(
	(props, ref) => {
	  const {
		name,
		error,
		label,
		options,
		hiddenFirstOption,
		required,
		customClassLabel,
		customClassInput,
		...rest
	  } = props
	  return (
		<div className="mb-3">
		  {label && <label
			htmlFor="nombre_stock"
			className={`form-label form-label-modal-custom ${customClassLabel}`}
			aria-labelledby={name}
		  >
			{label}&nbsp;
			{required && (
			  <span className="text-danger" style={{ fontSize: 15 }}>
				*
			  </span>
			)}
		  </label>}
		  <select
			name={name}
			id={name}
			ref={ref}
			className={`form-select form-select-modal-custom mb-2 ${customClassInput}`}
			{...rest}
		  >
			{!hiddenFirstOption && <option value="">{label}</option>}
			{options?.map((option) => (
			  <option value={option.value} key={option.value}>
				{option.label}
			  </option>
			))}
		  </select>
  
		  {<FormError error={error} />}
		</div>
	  )
	}
  )