import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { TextField } from "@mui/material";
import { RiRegisteredLine } from "react-icons/ri";
import toast from "react-hot-toast";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .required('Required'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Successfully registered");
      })
      .catch(() => {
        toast.error("Try with other data");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={RegistrationSchema}
    >
      {({ setFieldValue }) => (
        <Form className={css.form} autoComplete="off">
          <div className={css.text}>
            <label htmlFor="name">Username</label>
            <Field
              as={TextField}
              type="text"
              name="name"
              variant="filled"
              label="Username"
              onChange={(e) => setFieldValue("name", e.target.value)}
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>

          <div className={css.text}>
            <label htmlFor="email">Email</label>
            <Field
              as={TextField}
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
              as={TextField}
              type="password"
              name="password"
              variant="filled"
              label="Password"
              onChange={(e) => setFieldValue("password", e.target.value)}
            />
            <ErrorMessage name="password" component="div" className={css.error} />
          </div>

          <button className={css.regbtn} type="submit">
          <RiRegisteredLine />
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}