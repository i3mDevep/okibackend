import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import { generaterColor } from "../../../utils/generateColor";

export default function MarkItem({ name, id, onClick }) {
  let color = generaterColor();
  return (
    <>
      <ListItem>
        <ListItemIcon>
          <ViewModuleIcon style={{ color: color }} />
        </ListItemIcon>
        <ListItemText primary={name} />
        <ListItemSecondaryAction style={{ marginRight: "15px" }}>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => onClick(id)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider light />
    </>
  );
}
