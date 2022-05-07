import { Box, Grid } from "@material-ui/core";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { Button } from "../../components/button";
import { Input } from "../../components/input/index.";
import { branchValues, BRANCH_SCHEMA, Flex } from "./constants";

export const AddBranchForm = ({
  handleForm,
  values = {},
  isEditing,
  handleClose,
}) => {
  const [formInitialValues, setFormInitialValues] = useState(branchValues({}));

  useEffect(() => {
    setFormInitialValues(branchValues(values));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(formInitialValues, values);

  return (
    <Formik
      validateOnBlur
      validateOnChange
      enableReinitialize
      initialValues={formInitialValues}
      validationSchema={BRANCH_SCHEMA}
      onSubmit={(data = values, { setSubmitting }) => {}}
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
              name="branch_name"
              value={values?.branch_name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched?.branch_name && errors?.branch_name}
            />
          </Box>
          <Box mt="16px">
            <Input
              label="Address line 1"
              name="address_line_1"
              value={values?.address_line_1}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched?.address_line_1 && errors?.address_line_1}
            />
          </Box>
          <Box mt="16px">
            <Input
              label="Address line 2"
              name="address_line_2"
              value={values?.address_line_2}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched?.address_line_2 && errors?.address_line_2}
            />
          </Box>
          <Box mt="20px">
            <Flex>
              <Input
                label="city"
                name="city"
                value={values?.city}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched?.city && errors?.city}
              />

              <Input
                label="state"
                name="state"
                value={values?.state}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched?.state && errors?.state}
              />
            </Flex>
          </Box>
          <Box mt="16px">
            <Flex>
              <Input
                label="pin Code"
                name="pin_code"
                value={values?.pin_code}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched?.pin_code && errors?.pin_code}
              />

              <Input
                label="phone"
                name="phone"
                value={values?.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched?.phone && errors?.phone}
              />
            </Flex>
          </Box>
          <Button className="form-btn" type="submit">
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
};
