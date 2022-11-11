import "./css/LableForm.css";

const LabelForm = ({
  type,
  name,
  placeholder,
  handleChange,
  handleBlur,
  value,
}) => {
  return (
    <>
      <label htmlFor={name} className="inputLabel">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          className="input"
        />
      </label>
    </>
  );
};

export default LabelForm;
