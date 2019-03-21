import React from "react";
import classnames from "classnames";
import "./styles.css";

export const Toggle = ({
  on = false,
  className,
  children,
  onChange,
  ...props
}) => {
  return (
    <label className={classnames("label", className)}>
      {children}
      <input
        type="checkbox"
        className="toggle-checkbox"
        checked={on}
        onChange={e => onChange(e.target.checked)}
        {...props}
      />
      <div className={classnames("toggle-body")}>
        <span className={classnames("toggle-circle")} />
      </div>
    </label>
  );
};
