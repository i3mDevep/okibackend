import { useEffect, useState } from "react";

export const usePromiseFields = (fields, control) => {
  const [field, setfield] = useState([]);

  useEffect(async () => {
    let tmp = fields || [];
    for (let field of tmp) {
      field.controller["control"] = control;
      if (field.promise) {
        const [assign, fnt] = field.promise;
        try {
          field.field[assign] = await fnt();
        } catch (error) {
          console.error(error);
        }
      }
    }
    setfield(tmp);
  }, []);

  return field;
};
