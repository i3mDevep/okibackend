import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListSubheader from '@material-ui/core/ListSubheader';
import './style.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "103%",
    minWidth: "290px",
    maxWidth: "47ch",
    height: "90vh",
    overflowY: 'auto',
    margin: '10px',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AlignItemsList({ list = [], component: Component, onClick, title }) {
  const classes = useStyles();
  const Item = React.forwardRef((props, ref) => (
    <Component innerRef={ref} {...props} />
  ));
  return (
    <div className='list__contact__root'>
    <List className={classes.root} 
         subheader={
          <ListSubheader style={{backgroundColor:'black', color: "whitesmoke"}} component="div" id="nested-list-subheader">
            {title}
          </ListSubheader>
        }
    >
      {list.map((data) => (
        <Item key={data.id} {...data} onClick={onClick} />
      ))}
    </List>
    </div>

  );
}
