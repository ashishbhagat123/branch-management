import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
`;

export const TableHeader = styled.div`
  display: flex;
  background-color: #f6f8fd;
  padding: 15px 10px;
  margin-bottom: 8px;

  > div {
    flex: 1;
    opacity: 0.5;
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const TableBody = styled.div``;

export const TableRow = styled.div`
  display: flex;
  padding: 15px 10px;
  gap: 10px;
  margin-bottom: 4px;
  border: 1px solid lightgrey;
  cursor: pointer;

  :hover {
    background-color: #f5f8ff;
  }

  > div {
    flex: 1;
    color: black;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.6;
  }
`;
