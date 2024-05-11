import React from 'react';
import classNames from 'classnames';
import { BsCheckAll } from 'react-icons/bs'; 
import { BsXLg } from "react-icons/bs";
import css from './Notification.module.css';

const Notification = ({ message, type }) => {
  const notificationClass = classNames(css.notification, {
    [css.success]: type === 'success',
    [css.error]: type === 'error',
  });

  return (
    <div className={notificationClass}>
      
      {type === 'success' && <BsCheckAll className={css.icon} />}
      {type === 'error' && <BsXLg className={css.icon} />}
      <p className={css.message}>{message}</p>
    </div>
  );
};

export default Notification;