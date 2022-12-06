import 'react-notifications-component/dist/theme.css'
import Notification, { store } from 'react-notifications-component'
export default Notification
export { store }

export const quicklyNotification = (message, type, title ) => {
    store.addNotification({
        title: title,
        message: message,
        type: type,
        insert: "top",
        container: "top-left",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2500,
          onScreen: true,
        },
      });
}