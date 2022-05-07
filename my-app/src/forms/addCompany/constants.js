import styled from "styled-components";
import * as yup from "yup";

export const COMPANY_SCHEMA = yup.object().shape({
  company_name: yup.string().required("required"),
  industry_type: yup.string().required("required"),
  website: yup.string().required("required"),
  email: yup.string().required("required"),
});

export const companyValues = (values) => {
  return {
    company_name: values.company_name || "",
    industry_type: values.industry_type || "",
    website: values.website || "",
    email: values.email || "",
  };
};

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;
