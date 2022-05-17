import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "../../../config/httpHelper";

const SignupIndex = () => {

  const handleSignUp = (values) => {
    axios
      .post(`/signup`, values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstname:Yup.string().required("Required"),
      lastname:Yup.string().required("Required"),
      email: Yup.string().email("Not a Valide Email").required("Required"),
      password: Yup.string().required("Required").min(8,"Too short").max(25, "Too long"),
    }),
    onSubmit: (values) => {
      handleSignUp(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>First Name</label>
      <input
        {...formik.getFieldProps("firstname")}
        type="text"
        className="border-2 border-purple-900"
      />
      {formik.errors.firstname && formik.touched.firstname ? (
        <div>{formik.errors.firstname}</div>
      ) : null}
      <label>Last Name</label>
      <input
        {...formik.getFieldProps("lastname")}
        type="text"
        className="border-2 border-purple-900"
      />
      {formik.errors.lastname && formik.touched.lastname ? (
        <div>{formik.errors.lastname}</div>
      ) : null}
      <label>Email</label>
      <input
        {...formik.getFieldProps("email")}
        type="email"
        className="border-2 border-purple-900"
      />
      {formik.errors.email && formik.touched.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <label>Password</label>
      <input
        {...formik.getFieldProps("password")}
        type="password"
        className="border-2 border-purple-900"
      />

      {formik.errors.password && formik.touched.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupIndex;
