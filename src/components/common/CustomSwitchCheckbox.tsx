import React, { ChangeEvent } from "react";

function CustomSwitchCheckbox({
  checked,
  name,
  onChange,
}: {
  checked: boolean;
  name: string;
  onChange?: (e: boolean, name: string) => void;
}) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked, e.target.name);
    }
  };
  return (
    <div className="switch2">
      <label className="switch">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={(e) => handleChange(e)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default CustomSwitchCheckbox;
