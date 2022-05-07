import { makeStyles } from "@material-ui/core";
import styled from "styled-components";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: 617,
    flexShrink: 0,
    whiteSpace: "nowrap",
    position: "absolute",
    right: 0,
    top: 0,
    height: "100%",
    overflowX: "hidden",
  },
  paper: {
    width: 617,
  },
}));

export const Header = styled.div`
  background: rgba(42, 88, 173, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px 5px 46px;

  h4 {
    font-family: Inter;
    font-size: 18px;
    font-weight: 600;
  }
  img {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  padding: 24px 50px;
  padding-bottom: 80px;
  height: 100%;
  position: relative;

  .MuiBox-root {
    margin-top: 20px;
  }

  .form-btn {
    position: absolute;
    bottom: 20px;
  }
`;
