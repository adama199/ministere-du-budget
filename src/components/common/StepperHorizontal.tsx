import React from "react";

interface StepperPropsType {
	index: number;
	tabNum: number;
}

const StepperHorizontal: React.FC<StepperPropsType> = ({ index, tabNum }) => {
	return (
		<div className="mb-4">
			<div className="stepper-horizontal-wrapper d-flex gap-3">
				{[...Array(tabNum)].map((elem, key) => (
					<div
						className={`stepper-item ${
							index === key || index > key
								? "active"
								: ""
						}`}
						key={key}
					></div>
				))}
			</div>
		</div>
	);
};

export default StepperHorizontal;