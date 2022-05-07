import styled from "styled-components";

export const Wrapper = styled.div`
  height: 120px;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.21);
  background-image: linear-gradient(107deg, #5491d6 -7%, #2a58ad 24%);
  margin-bottom: 20px;
  display: flex;
  color: #fff;
  padding: 10px;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin: 5px;
    font-size: 24px;
  }

  h2 {
    margin: 3px;
    font-size: 16px;
  }

  p {
    margin: 2px;
    font-size: 14px;
  }

  .edit-btn {
    background-color: white;
    color: #2a58ad;
    width: 100%;
    min-width: 200px;

    :hover {
      border-color: #fff;
    }
  }
`;
