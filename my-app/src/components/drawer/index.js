import { Drawer as AppDrawer } from "@material-ui/core";
import { Header, useStyles, Content } from "./styles";
import CloseIcon from "../../assests/images/close-icon.svg";

export const Drawer = ({ onClose, open, title, children, className }) => {
  const classes = useStyles();

  return (
    <AppDrawer
      varient="permanent"
      anchor="right"
      open={open}
      classes={{ paper: className || classes.paper }}
    >
      <Header>
        <h4>{title}</h4>
        <img onClick={onClose} src={CloseIcon} alt="close" />
      </Header>
      <Content>{children}</Content>
    </AppDrawer>
  );
};
