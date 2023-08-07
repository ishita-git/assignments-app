import React from "react";
import "./input.scss";

const Input = ({ label, placeholder, select }) => {
  return (
    <div className="input-container">
      <div className="label">{label}</div>

      {select ? (
        <select placeholder={placeholder}>
            <options>{placeholder}</options>
        </select>
      ) : (
        <div className="input">
          <input type="text" placeholder={placeholder} />
        </div>
      )}
    </div>
  );
};

export default Input;
