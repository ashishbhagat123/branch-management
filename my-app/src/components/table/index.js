import { TableBody, TableRow, TableHeader, Wrapper } from "./styles";

export const Table = ({ branches, onClick }) => {
  return (
    <Wrapper>
      <TableHeader>
        {header.map((el, i) => (
          <div key={i}>{el}</div>
        ))}
      </TableHeader>
      <TableBody>
        {branches?.map((el, i) => (
          <TableRow key={i} onClick={() => onClick(el)}>
            <div>{el?.branch_id}</div>
            <div>{el?.branch_name}</div>
            <div>{el?.city}</div>
            <div>{el?.state}</div>
            <div>{el?.phone}</div>
          </TableRow>
        ))}
      </TableBody>
    </Wrapper>
  );
};

const header = ["Branch Id", "Branch Name", "City", "State", "Phone No."];
