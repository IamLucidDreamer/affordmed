import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "../../../config/httpHelper";

export const LoginIndex = () => {
  const handleLogin = (values) => {
    console.log(values.password);
    axios
      .post(`/users/${values.email}/login`, { password: values.password })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Not a Valide Email").required("Required"),
      password: Yup.string().required("Required").max(25, "Too long"),
    }),
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 to-sky-600 flex items-center justify-center">
      <form onSubmit={formik.handleSubmit} className="w-10/12 md:w-1/3 flex flex-col bg-white shadow-xl p-4 rounded-lg">
        <label className="text-sm text-gray-700 my-2">Email</label>
        <input
          {...formik.getFieldProps("email")}
          type="email"
          placeholder="Your Email Here"
          className="border-2 border-purple-900 rounded-lg p-2"
        />
        {formik.errors.email && formik.touched.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <label className="text-sm text-gray-700 my-2">Password</label>
        <input
          {...formik.getFieldProps("password")}
          placeholder="Password"
          type="password"
          className="border-2 border-purple-900 rounded-lg p-2"
        />

        {formik.errors.password && formik.touched.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        <button type="submit" className="my-4 w-full py-3 text-lg bg-gradient-to-br from-teal-500 to-sky-600 rounded-lg text-white">Submit</button>
      </form>
    </div>
  );
};
