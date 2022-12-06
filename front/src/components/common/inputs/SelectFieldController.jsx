import React from "react";
import TextField from "@material-ui/core/TextField";
import { Controller } from "react-hook-form";

export const SelectFieldController = ({ control, name, label, helperText, options }) => {
  return (
    <Controller
      name={name}
      as={
        <TextField
          id={name}
          select
          label={label}
          fullWidth
          SelectProps={{
            native: true,
          }}
          helperText={helperText}
        >
          <option aria-label="None" value="" />
          {Array.isArray(options) &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </TextField>
      }
      control={control}
      defaultValue=""
      rules={{
        required: "Required",
      }}
    />
  );
};
