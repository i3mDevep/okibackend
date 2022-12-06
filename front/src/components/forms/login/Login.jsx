import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm, Controller } from "react-hook-form";
import { logoMain } from "../../common/urls";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffff",
    padding: 15,
    borderRadius: 10,
    border: "3px solid #52057b",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: 20,
    backgroundColor: "#0a043c",
  },
  logo: {
    width: 250,
  },
}));

export default function SignIn({ onSubmit }) {
  const classes = useStyles();

  const { handleSubmit, control, errors: fieldsErrors } = useForm();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img alt="" src={logoMain} className={classes.logo} />
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            as={
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                name="username"
                autoComplete="username"
                autoFocus
                variant="outlined"
                label="Username"
              />
            }
            control={control}
            defaultValue=""
            rules={{
              required: "Required"
            }}
          />
          <Controller
            name="password"
            as={
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                helperText={
                  fieldsErrors.password ? fieldsErrors.password.message : null
                }
                variant="outlined"
                label="Password"
                error={fieldsErrors.password}
              />
            }
            control={control}
            defaultValue=""
            rules={{
              required: "Required",
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
