import "./css/Form.css";
import { useState } from "react";
import LabelForm from "../LabelForm/LabelForm";
import CustomSelect from "../CustomSelect/CustomSelect";

const typeOption = ["option 1", "option 2", "option 3", "option 4", "option 5"];
const professionOption = [
  "option 1",
  "option 2",
  "option 3",
  "option 4",
  "option 5",
];
const practiceOption = [
  "option 1",
  "option 2",
  "option 3",
  "option 4",
  "option 5",
];

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
            header={"Practice / Institution*"}
            options={practiceOption}
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
            header={"Medical Profession*"}
            options={professionOption}
          />
        </div>

        <CustomSelect header={"Type of Inquiry*"} options={typeOption} />
        <textarea
          className="form_textarea"
          placeholder="Enter Message*"
        ></textarea>

        <button className="form_button" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
