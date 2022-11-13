import { useState } from "react";
import "./css/CustomSelect.css";
// const options = ["Mangoes", "Apples", "Oranges"];
const CustomSelect = ({ header, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  const toggling = () => setIsOpen(!isOpen);
  return (
    <div className="drop_down_container">
      <div className="drop_down_header" onClick={toggling}>
        {selectedOption || header}
      </div>
      {isOpen && (
        <div className="drop_down_list_container">
          <ul className="drop_down_list">
            {options.map((option) => (
              <li
                className="drop_down_item"
                key={Math.random()}
                onClick={onOptionClicked(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
      <svg className="drop_down_icon">
        <use href="/symbol-defs.svg#shape"></use>
      </svg>
    </div>
  );
};

export default CustomSelect;
