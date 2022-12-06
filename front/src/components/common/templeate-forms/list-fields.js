import React from "react"
import NumberFormat from "react-number-format";
import TextField from "@material-ui/core/TextField";

const SelecteField = React.forwardRef((props, ref)  => (
  <TextField inputRef={ref} {...props}>
    <option aria-label="None" value="" />
    {Array.isArray(props.options) &&
      props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
  </TextField>
));

export const listFields = {
  textField: TextField,
  numberFormart: NumberFormat,
  selectField: SelecteField,
};
