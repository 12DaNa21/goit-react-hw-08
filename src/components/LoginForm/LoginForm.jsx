import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { login } from "../../redux/auth/operations";
import * as Yup from "yup";
import css from "./LoginForm.module.css";

import { IoMdLogIn } from "react-icons/io";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        toast.success("Success!!!");
      })
      .catch(() => {
        toast.error("Something went wrong! Try again with new data");
      });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      {({ setFieldValue }) => (
        <Form className={css.form} autoComplete="off">
          <div className={css.text}>
            <label htmlFor="email">Email</label>
            <Field
              className={css.label}
              type="email"
              name="email"
              variant="filled"
              label="Email"
              onChange={(e) => setFieldValue("email", e.target.value)}
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>
          <div className={css.text}>
            <label htmlFor="password">Password</label>
            <Field
              className={css.label}
              type="password"
              name="password"
              variant="filled"
              label="Password"
              onChange={(e) => setFieldValue("password", e.target.value)}
            />
            <ErrorMessage name="password" component="div" className={css.error} />
          </div>
          <button className={css.logbtn} type="submit">
          <IoMdLogIn className={css.icon}/>Log In
          </button>
        </Form>
      )}
    </Formik>
  );
}