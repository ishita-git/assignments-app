import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./input.scss";

const Input = ({ label, placeholder, select, multiSelect }) => {
  const [inputText, setInputText] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleInputKeyPress = (event) => {
    if (event.key == "Enter" && inputText.trim() !== "") {
      setSelectedItems([...selectedItems, inputText]);
      setInputText("");
    }
  };

  const handleRemoveItem = (itemToRemove) => {
    setSelectedItems(selectedItems.filter((item) => item !== itemToRemove));
  };

  return (
    <div className="input-container">
      <div className="label">{label}</div>

      {select ? (
        <select placeholder={placeholder}>
          <options>{placeholder}</options>
        </select>
      ) : (
        <div className="input">
          {multiSelect && (
            <div className="selected-items">
              {selectedItems.map((item, index) => (
                <div key={index} className="selected-item">
                  {item}
                  <CloseIcon className='close-btn' onClick={() => handleRemoveItem(item)}/>
                </div>
              ))}
            </div>
          )}
          <input
            type="text"
            placeholder={placeholder}
            value={inputText}
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
