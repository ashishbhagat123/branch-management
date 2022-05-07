import styled from "styled-components";

export const StyledButton = styled.button`
  background: rgba(42, 88, 173);
  border: 40px;
  width: 100%;
  max-width: 250px;
  height: 40px;
  border-radius: 40px;
  color: white;
  font-weight: 600;
  cursor: pointer;

  :hover {
    border: 2px solid rgba(42, 88, 173);
    background-color: rgba(42, 88, 173, 0.8);
  }

  :disabled {
    background: lightgrey;
  }
`;
