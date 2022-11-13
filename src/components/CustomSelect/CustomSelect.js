import { useState } from "react";
import "./CustomSelect.css";

const CustomSelect = ({ lable, options, value, setValue }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOptionClicked = (value) => () => {
    setValue(value);
    setIsOpen(false);
  };
  const toggling = () => setIsOpen(!isOpen);
  return (
    <div className="drop_down_container " onClick={toggling}>
      <div className="drop_down_header">{value || lable}</div>
      {isOpen && (
        <div className="drop_down_list_container">
          <ul className="drop_down_list">
            {options.map((option) => (
              <li
                className="drop_down_item"
                key={Math.random()}
                onClick={onOptionClicked(option)}
              >
                <p className="drop_down_text">{option}</p>
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
