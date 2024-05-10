import css from "./ContactForm.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from 'nanoid'
import { useDispatch } from "react-redux";
import { IoIosPersonAdd } from "react-icons/io";
import { addContact } from "../../redux/contacts/contactsSlice";


const regex = {
  phoneNumber: /^[0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/,
}

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .matches(regex.phoneNumber, "Number format: 000-00-00")
    .required("Required"), 
});

  const initialValues = {
    name: "",
    number: "",
  };
export default function ContactForm(){
    const nameFieldId = useId();
    const numberFieldId = useId();
  
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
    dispatch(addContact({ id: nanoid(), ...values }));
    actions.resetForm();
  };
  
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form  className={css.form}>
          <div className={css.text}>
            <label  htmlFor={nameFieldId}>Name</label>
            <Field className={css.label} type="text" name="name" id={nameFieldId} />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
  
          <div className={css.text}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field className={css.label} type="text" name="number" id={numberFieldId} />
            <ErrorMessage className={css.error} name="number" component="span" />
          </div>
          <button className={css.addbtn} type="submit"><IoIosPersonAdd className={css.add}/>Add contact</button>
        </Form>
      </Formik>
    );
}