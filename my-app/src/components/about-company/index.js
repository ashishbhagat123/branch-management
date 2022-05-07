import { Button } from "../button";
import { Wrapper } from "./styles";

export const AboutCompany = ({ data, onClick }) => {
  return (
    <Wrapper>
      <div className="first-half">
        <h1>{data?.company_name || ""}</h1>
        <h2>{data?.industry_type}</h2>
        <p>{data?.email}</p>
        <p>{data?.website}</p>
      </div>
      <div className="second-half">
        <Button className="edit-btn" onClick={onClick}>
          Edit Company
        </Button>
      </div>
    </Wrapper>
  );
};
