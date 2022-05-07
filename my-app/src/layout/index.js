import { useEffect, useState } from "react";
import { Drawer } from "../components/drawer";
import { LeftMenu } from "../components/left-menu";
import { AddCompanyForm } from "../forms/addCompany";
import {
  addCompanyBranch,
  addNewCompany,
  editCompanyBranch,
  editCompanyDetails,
  getCompanies,
} from "../utils/apis";
import { Dashboard } from "../views/dashboard";
import { Wrapper } from "./styles";

export const Layout = () => {
  const [companies, setCompanies] = useState();
  const [open, setOpen] = useState(false);
  const [activeCompany, setActiveCompany] = useState(undefined);

  useEffect(() => {
    handleCompanies();
  }, []);

  const handleCompanies = async () => {
    const response = await getCompanies();
    setActiveCompany(response[0]);
    setCompanies(response);
  };

  const addCompany = async (values) => {
    const response = addNewCompany(values);
    return response;
  };

  const editBranch = async (values) => {
    let response = editCompanyBranch(values);
    return response;
  };

  const addBranch = async (values) => {
    let response = addCompanyBranch(values);
    return response;
  };

  const editCompany = async (values) => {
    let response = editCompanyDetails(values);
  };

  return (
    <Wrapper>
      <LeftMenu
        menu={companies}
        addCompany={addCompany}
        activeCompany={activeCompany}
        setActiveCompany={setActiveCompany}
      />
      <Dashboard
        data={activeCompany}
        editBranch={editBranch}
        addBranch={addBranch}
        editCompany={() => setOpen(true)}
      />
      <Drawer open={open} title="Edit Company" onCLose={() => setOpen(false)}>
        <AddCompanyForm
          addCompany={(values) => editCompany(values)}
          values={activeCompany}
        />
      </Drawer>
    </Wrapper>
  );
};

const menu = [
  {
    name: "dashboard",
    id: 1,
  },
  {
    name: "shrikanth",
    id: 1,
  },
  {
    name: "ashish",
    id: 1,
  },
  {
    name: "bhagat",
    id: 1,
  },
  {
    name: "menu",
    id: 1,
  },
  {
    name: "styles",
    id: 1,
  },
  {
    name: "company",
    id: 1,
  },
  {
    name: "work",
    id: 1,
  },
  {
    name: "abcd",
    id: 1,
  },
];
