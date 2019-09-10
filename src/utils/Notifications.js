import { toast } from 'react-toastify'; // Notification message container

export const showNotification = (message, type, timeOut) => toast(
  `${message}`,
  {
    type, // allowed types ["info","success","warning","error","default"]
    autoClose: timeOut,
  },
);

export const dismissNotification = (toastId) => toast.dismiss(toastId);
