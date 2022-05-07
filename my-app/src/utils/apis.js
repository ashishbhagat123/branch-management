import axios from "axios";

export const getCompanies = async () => {
  let response = axios.get("");

  return data;
};

export const addNewCompany = async () => {
  let response = axios.post("");

  return response;
};

export const editCompanyBranch = async () => {
  let response = axios.put("");

  return response;
};

export const addCompanyBranch = async () => {
  let response = axios.post("");

  return response;
};

export const editCompanyDetails = async (values) => {
  let response = axios.post("");

  return response;
};

const data = [
  {
    company_id: 1,
    company_name: "VAST",
    industry_type: "Information_Technology",
    website: "www.vast.com",
    email: "contact@vast.com",
    branches: [
      {
        branch_id: 1,
        branch_name: "Kolhapur",
        address_line_1: "Twin Tower",
        address_line_2: "Shahu Puri",
        city: "Kolhapur",
        state: "Maharashtra",
        pin_code: "416416",
        phone: "9156615555",
        company_id: 1,
      },
      {
        branch_id: 3,
        branch_name: "Pune",
        address_line_1: "HinjWadi",
        address_line_2: "It_park",
        city: "pune",
        state: "Maharashtra",
        pin_code: "416516",
        phone: "9156635555",
        company_id: 1,
      },
    ],
  },
  {
    company_id: 2,
    company_name: "T-Series",
    industry_type: "Music_Industry",
    website: "www.tseries.com",
    email: "contact@tser.com",
    branches: [
      {
        branch_id: 2,
        branch_name: "Mumbai-M",
        address_line_1: "Twin Tower",
        address_line_2: "Goregaon",
        city: "Mumbai",
        state: "Maharashtra",
        pin_code: "401302",
        phone: "9156615599",
        company_id: 2,
      },
    ],
  },
];
