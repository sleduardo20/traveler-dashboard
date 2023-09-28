import { Store, iNotification } from 'react-notifications-component';

const notification: iNotification = {
  insert: 'top',
  container: 'top-right',
  animationIn: ['animate__animated', 'animate__fadeInRight'],
  animationOut: ['animate__animated', 'animate__fadeOutRight'],
  dismiss: {
    duration: 3000,
  },
};

export const Notification = {
  success: (message: string) =>
    Store.addNotification({
      ...notification,
      type: 'success',
      title: 'Success',
      message,
    }),
  error: (message: string) =>
    Store.addNotification({
      ...notification,
      type: 'danger',
      title: 'Error',
      message,
    }),
  info: (message: string) =>
    Store.addNotification({
      ...notification,
      type: 'info',
      title: 'Info',
      message,
    }),
};
