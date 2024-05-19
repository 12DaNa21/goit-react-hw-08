import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contacts/operations';
import { IoPersonAddSharp } from "react-icons/io5";
import Notification from '../Notification/Notification';
import css from './ContactForm.module.css';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Number format: 000-00-00')
    .required('Required'),
});


export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const [notification, setNotification] = useState('');
  const [notificationType, setNotificationType] = useState('');

  const showNotification = (message, type) => {
    setNotification(message);
    setNotificationType(type);
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  const handleSubmit = (values, actions) => {
    const existingContact = contacts.find(
      (contact) => contact.name === values.name || contact.number === values.number
    );

    if (existingContact) {
      showNotification('Contact already exists!', 'error');
    } else {
      dispatch(addContact({ id: nanoid(), ...values }));
      actions.resetForm();
      showNotification('Contact added successfully!', 'success');
    }
  };

  const initialValues = {
    name: '',
    number: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <div>
        <Form className={css.form}>
          <div className={css.text}>
            <label htmlFor="name">Name</label>
            <Field className={css.label} type="text" name="name" />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>

          <div className={css.text}>
            <label htmlFor="number">Number</label>
            <Field className={css.label} type="text" name="number" />
            <ErrorMessage className={css.error} name="number" component="span" />
          </div>
          <button className={css.addbtn} type="submit">
          <IoPersonAddSharp className={css.icon}/>Add contact
          </button>
        </Form>
        {notification && <Notification message={notification} type={notificationType} />}
      </div>
    </Formik>
  );
}