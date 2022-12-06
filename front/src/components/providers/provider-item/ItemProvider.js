import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  inline: {
    display: "block",
  },
}));

export default function ItemProvider({ id, name, email, web, phone, onClick }) {
  const classes = useStyles();
  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {email}
              </Typography>
              {phone}
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          <IconButton onClick={() => onClick(id)} edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText secondary={web} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
}
