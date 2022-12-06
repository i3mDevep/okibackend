import React from "react";
import TextField from "@material-ui/core/TextField";
import { Controller } from "react-hook-form";

export const TextFieldController = ({ control, name, label, required, ...rest }) => {
  return (
    <Controller
      as={
        <TextField
          required={required}
          id={name}
          name={name}
          label={label}
          fullWidth
          autoComplete={name}
          { ...rest }
        />
      }
      control={control}
      name={name}
      defaultValue=""
      rules={{
        required: "Required",
      }}
    />
  );
};
