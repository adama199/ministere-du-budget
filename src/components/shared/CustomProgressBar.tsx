import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function CustomProgressBar({
  value,
  animated,
  className,
  showLabel = true,
}: Readonly<{
  value: number;
  animated?: boolean;
  className?: string;
  showLabel?: boolean;
}>) {
  return (
    <>
      {showLabel && (
        <label className="custom-progress-label d-flex justify-content-between gap-2 mb-2">
          Progression <span>{value}%</span>
        </label>
      )}
      <ProgressBar
        animated={animated}
        now={value}
        className={`custom-progress ${className}`}
      />
    </>
  );
}

export default CustomProgressBar;
