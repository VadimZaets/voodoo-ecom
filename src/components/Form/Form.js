import "./css/Form.css";
import { useState } from "react";
import LabelForm from "../LabelForm/LabelForm";
import CustomSelect from "../CustomSelect/CustomSelect";
import {
  typeOption,
  professionOption,
  practiceOption,
} from "../../constants/constants";
const Form = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [practice, setPractice] = useState("");
  const [profession, setProfession] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

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
      case "profession":
        setProfession(value);
        break;
      case "type":
        setType(value);
        break;

      case "message":
        setMessage(value);
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
    setMail("");
    setPhone("");
    setPractice("");
    setProfession("");
    setType("");
    setMessage("");
  };

  return (
    <div>
      <div>
        <h2 className="form_title">Contact Us</h2>
        <p className="form_text">
          The Voodoo team is looking forward to hearing from you!
        </p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form_input_container">
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

          <CustomSelect
            lable={"Practice / Institution*"}
            options={practiceOption}
            value={practice}
            setValue={setPractice}
          />
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
          <CustomSelect
            lable={"Medical Profession*"}
            options={professionOption}
            value={profession}
            setValue={setProfession}
          />
        </div>

        <CustomSelect
          lable={"Type of Inquiry*"}
          options={typeOption}
          value={type}
          setValue={setType}
        />
        <textarea
          className="form_textarea"
          placeholder="Enter Message*"
          value={message}
          name="message"
          onChange={handleChange}
        ></textarea>

        <button className="form_button" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
