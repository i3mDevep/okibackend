import React from "react";
import NumberFormat from "react-number-format";
import TextField from "@material-ui/core/TextField";
import { Controller } from "react-hook-form";

export const NumberFieldController = ({
  control,
  name,
  label,
  required,
  defaultValue = "",
}) => {
  return (
    <Controller
      as={
        <NumberFormat
          customInput={TextField}
          thousandSeparator={true}
          prefix={"$ "}
        />
      }
      fullWidth
      name={name}
      label={label}
      defaultValue={defaultValue}
      required={required}
      control={control}
      rules={{
        required: "Required",
      }}
    />
  );
};
