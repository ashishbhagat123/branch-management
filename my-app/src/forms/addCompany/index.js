import { Box } from "@material-ui/core";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { Button } from "../../components/button";
import { Input } from "../../components/input/index.";
import { companyValues, COMPANY_SCHEMA, Flex } from "./constants";

export const AddCompanyForm = ({ values = {}, addCompany }) => {
  const [formInitialValues, setFormInitialValues] = useState({});

  useEffect(() => {
    setFormInitialValues(companyValues(values));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(formInitialValues, values);
  return (
    <Formik
      validateOnBlur
      validateOnChange
      enableReinitialize
      initialValues={formInitialValues}
      validationSchema={COMPANY_SCHEMA}
      onSubmit={(values, { setSubmitting }) => {
        addCompany(values);
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
        touched,
        setValues,
        dirty,
        ...props
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <Box>
            <Input
              label="Name"
              name="company_name"
              value={values?.company_name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched?.company_name && errors?.company_name}
            />
          </Box>
          <Box mt="16px">
            <Input
              label="Industry type"
              name="industry_type"
              value={values?.industry_type}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched?.industry_type && errors?.industry_type}
            />
          </Box>
          <Box mt="16px">
            <Input
              label="website"
              name="website"
              value={values?.website}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched?.website && errors?.website}
            />
          </Box>
          <Box mt="20px">
            <Input
              label="email"
              name="email"
              value={values?.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched?.email && errors?.email}
            />
          </Box>
          <Button className="form-btn" type="submit">
            Add Company
          </Button>
        </form>
      )}
    </Formik>
  );
};
