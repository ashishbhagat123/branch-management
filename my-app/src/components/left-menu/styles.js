import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: calc(100vh - 200px);
  width: 100%;
  flex: 1;
  padding-top: 50px;
  padding-bottom: 80px;
  position: relative;
  border-top: 1px solid lightgrey;

  .add-btn {
    position: absolute;
    bottom: 20px;
  }
`;

export const Menu = styled.div`
  margin: ${({ active }) => console.log(active)};
  padding: 20px;
  text-align: left;
  background-color: ${({ active }) =>
    active ? "rgba(238,247,250,0.5);58ad" : "#fff"};
  color: ${({ active }) => (active ? "#2a58ad" : "black")};
  cursor: pointer;
  border-bottom: 1px solid lightgrey;
  font-weight: ${({ active }) => (active ? 600 : 500)};

  /* :hover {
    background-color: #abe9cd;
    background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);
  } */
`;
