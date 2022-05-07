import { useState } from "react";
import { AddCompanyForm } from "../../forms/addCompany";
import { Button } from "../button";
import { Drawer } from "../drawer";
import { Menu, Wrapper } from "./styles";

export const LeftMenu = ({
  menu,
  addCompany,
  activeCompany,
  setActiveCompany,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      {menu?.map((el, i) => (
        <Menu
          active={activeCompany?.company_id === el?.company_id}
          onClick={() => setActiveCompany(el)}
          key={i}
        >
          {el.company_name}
        </Menu>
      ))}
      <Button className="add-btn" onClick={() => setOpen(true)}>
        Add Company
      </Button>
      <Drawer open={open} title="Add Company" onClose={() => setOpen(false)}>
        <AddCompanyForm addCompany={(values) => addCompany(values)} />
      </Drawer>
    </Wrapper>
  );
};
