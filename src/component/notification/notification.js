import {toast} from "react-toastify";
import {PR} from "../../logic/Helper";
import {customNotificationConfig} from "../../config/notification-config";

export const successNotification = (message = PR()) => {
  return toast.success(message, customNotificationConfig);
};

export const infoNotification = (message = PR()) => {
  return toast.info(message, customNotificationConfig);
};

export const warningNotification = (message = PR()) => {
  return toast.warning(message, customNotificationConfig);
};

export const errorNotification = (message = PR()) => {
  return toast.error(message, customNotificationConfig);
};
