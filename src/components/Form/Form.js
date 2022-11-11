import "./css/Form.css";
import { useState } from "react";
import LabelForm from "../LabelForm/LabelForm";
const Form = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setName(value.name);
    setPosition(value.position);
  };
  return (
    <div>
      <div>
        <h2 className="title">Contact Us</h2>
        <p>The Voodoo team is looking forward to hearing from you!</p>
      </div>

      <form action="" className="form">
        <LabelForm
          type="text"
          name="name"
          handleChange={handleChange}
          placeholder="Full Name*"
          value={name}
        />
        <LabelForm
          type="text"
          name="position"
          handleChange={handleChange}
          placeholder="Title/Position*"
          value={position}
        />
        <div className="custom_select">
          <select className="select">
            <option value="hold" disabled selected>
              Practice / Institution*
            </option>
            <option value="1">option 1</option>
            <option value="2">option 2</option>
            <option value="3">option 3</option>
            <option value="4">option 4</option>
            <option value="5">option 5</option>
          </select>
          <svg className="select_icon">
            <use href="/symbol-defs.svg#shape"></use>
          </svg>
        </div>
        <LabelForm
          type="mail"
          name="position"
          handleChange={handleChange}
          placeholder="Email Address*"
          value={position}
        />
        <LabelForm
          type="phone"
          name="position"
          handleChange={handleChange}
          placeholder="Phone Number*"
          value={position}
        />
        <div className="custom_select">
          <select className="select">
            <option value="hold" disabled selected>
              Medical Profession*
            </option>
            <option value="1">option 1</option>
            <option value="2">option 2</option>
            <option value="3">option 3</option>
            <option value="4">option 4</option>
            <option value="5">option 5</option>
          </select>
          <svg className="select_icon">
            <use href="/symbol-defs.svg#shape"></use>
          </svg>
        </div>
        <div className="custom_select">
          <select className="select">
            <option value="hold" disabled selected>
              Type of Inquiry*
            </option>
            <option value="1">option 1</option>
            <option value="2">option 2</option>
            <option value="3">option 3</option>
            <option value="4">option 4</option>
            <option value="5">option 5</option>
          </select>
          <svg className="select_icon">
            <use href="/symbol-defs.svg#shape"></use>
          </svg>
        </div>
        <button className="button">Send Message</button>
      </form>
    </div>
  );
};

export default Form;
