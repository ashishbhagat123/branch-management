import { useState } from "react";
import { AboutCompany } from "../../components/about-company";
import { Drawer } from "../../components/drawer";
import { Table } from "../../components/table";
import { AddBranchForm } from "../../forms/addBranch";
import { Wrapper } from "./styles";

export const Dashboard = ({ data, editBranch, addBranch, editCompany }) => {
  const [open, setOpen] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [branchDetails, setBranchDetails] = useState({});

  return (
    <Wrapper>
      <AboutCompany data={data} onClick={() => editCompany(data)} />
      <Table
        branches={data?.branches || []}
        onClick={(data) => {
          setBranchDetails(data);
          setOpen(true);
          setEditing(true);
        }}
      />
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title={`${isEditing ? "Edit" : "Add"} Branch`}
      >
        <AddBranchForm values={branchDetails} />
      </Drawer>
    </Wrapper>
  );
};
