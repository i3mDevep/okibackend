export function convertErrorInString(error) {
  let err = "";
  Object.entries(error.response.data).forEach((key) => {
    Array.isArray(key) &&
      key.forEach((msg) => {
        if (Array.isArray(msg)) {
          msg.forEach((e) => {
            err = err + e + " ";
          });
        } else {
          err = err + msg + ":";
        }
      });
  });
  return err;
}
