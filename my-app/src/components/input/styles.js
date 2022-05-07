import styled from "styled-components";

export const Wrapper = styled.div`
  label {
    display: block;
    text-align: left;
    text-transform: capitalize;
    margin-bottom: 10px;
    color: grey;
  }

  input {
    padding: 10px 8px;
    width: 100%;
    border: none;
    outline: 1px solid lightgrey;
    color: grey;
    font-size: 16px;

    :focus {
      outline: 2px solid blue;
      border: none;
      transition: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    }
  }

  .error {
    color: red;
    margin: 0;
    margin-top: 2px;
  }
`;
