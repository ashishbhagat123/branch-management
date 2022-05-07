import styled from "styled-components";
import * as yup from "yup";

export const BRANCH_SCHEMA = yup.object().shape({
  branch_name: yup.string().required("required"),
  address_line_1: yup.string().required("required"),
  address_line_2: yup.string().required("required"),
  state: yup.string().required("required"),
  city: yup.string().required("required"),
  phone: yup.string().required("required"),
  pin_code: yup.string().required("required"),
});

export const branchValues = (values) => {
  return {
    branch_name: values.branch_name || "",
    address_line_1: values.address_line_1 || "",
    address_line_2: values.address_line_2 || "",
    state: values.state || "",
    city: values.city || "",
    pin_code: values.pin_code || "",
  };
};

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;
