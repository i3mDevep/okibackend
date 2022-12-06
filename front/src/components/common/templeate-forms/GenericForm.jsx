import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { RenderListFields, showErrors } from "./index";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: 10,
    backgroundColor: "#0a043c",
  },
}));

export function SimpleForm({ onSubmit, fields, defaultReset }) {
  const classes = useStyles();

  const { handleSubmit, control, reset, errors } = useForm();

  function resetForm() {
    reset(defaultReset);
  }
  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit((data) => {
        onSubmit(data, resetForm);
      })}
    >
      <Grid container spacing={3}>
        <RenderListFields render={fields} control={control} />
        {showErrors(errors)}
      </Grid>
      <input style={{ visibility: "hidden" }} type="submit" value="Submit" />
    </form>
  );
}

export function GenericForm({ onSubmit, fields, defaults, button }) {
  const classes = useStyles();

  const {
    handleSubmit,
    control,
    reset,
    errors,
    formState: { isDirty, isSubmitting },
  } = useForm();
  const defaultValues = {
    provider: "",
    marca: "",
    unit: "",
  };
  function resetForm() {
    reset(defaults || defaultValues);
  }
  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit((data) => {
        onSubmit(data, resetForm);
      })}
    >
      <Grid container spacing={3}>
        <RenderListFields render={fields} control={control} />
        {showErrors(errors)}
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled={!isDirty || isSubmitting}
      >
        {button}
      </Button>
    </form>
  );
}
