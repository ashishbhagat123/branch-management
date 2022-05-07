import { Wrapper } from "./styles";

export const Input = ({
  label,
  error,
  onChange,
  value,
  placeholder,
  ...rest
}) => {
  return (
    <Wrapper>
      <label>{label}</label>
      <input
        {...rest}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      <p className="error">{error}</p>
    </Wrapper>
  );
};
