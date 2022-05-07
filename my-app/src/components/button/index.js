import { StyledButton } from "./styles";

export const Button = ({ onClick, disabled, className, children, ...rest }) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
