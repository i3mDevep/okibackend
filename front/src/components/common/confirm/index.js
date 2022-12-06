import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export function question({ title, message }, callback) {
  confirmAlert({
    title: title,
    message: message,
    buttons: [
      {
        label: "Yes",
        onClick: () => callback(),
      },
      {
        label: "No",
      },
    ],
  });
}
