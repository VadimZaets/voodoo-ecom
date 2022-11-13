import "./css/Form.css";
import { useState } from "react";
import LabelForm from "../LabelForm/LabelForm";
const Form = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [practice, setPractice] = useState("hold");
  // const [profession, setProfession] = useState("");
  // const [type, setType] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "position":
        setPosition(value);
        break;

      case "mail":
        setMail(value);
        break;

      case "phone":
        setPhone(value);
        break;

      case "practice":
        setPractice(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    resetInput();
  };

  const resetInput = () => {
    setName("");
    setPosition("");
    setPractice("");
  };

  return (
    <div>
      <div>
        <h2 className="title">Contact Us</h2>
        <p>The Voodoo team is looking forward to hearing from you!</p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="input_wrapp">
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
            <select
              className="select"
              defaultValue=""
              value={practice}
              onChange={handleChange}
            >
              <option value="hold" disabled>
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
            name="mail"
            handleChange={handleChange}
            placeholder="Email Address*"
            value={mail}
          />

          <LabelForm
            type="phone"
            name="phone"
            handleChange={handleChange}
            placeholder="Phone Number*"
            value={phone}
          />
          <div className="custom_select">
            <select
              className="select"
              defaultValue={"hold"}
              onChange={handleChange}
            >
              <option value="hold" disabled>
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
        </div>
        <div className="custom_select">
          <select className="select" defaultValue={"hold"}>
            <option value="hold" disabled>
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

        <textarea className="textarea" placeholder="Enter Message*"></textarea>

        <button className="button" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
