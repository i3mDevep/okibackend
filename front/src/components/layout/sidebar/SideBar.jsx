import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import nextId from "react-id-generator";
import clsx from "clsx";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink as CustomNavLink } from "react-router-dom";
import { imgSideBarBackground, logoMain } from "../../common/urls";
import Button from "@material-ui/core/Button";

import authContext from '../../../context/auth'

import "./style.css";

const drawerWidth = 240;

const URL_BACKGROUND = imgSideBarBackground;

const themer = createMuiTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  selected: {
    backgroundColor: "red",
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
//    backgroundImage: `url(${URL_BACKGROUND})`,
    backgroundColor: "#000",
    backgroundPosition: "-3rem",
    backgroundSize: "cover",
    color: "white",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    zIndex: 50,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    //backgroundImage: `url(${URL_BACKGROUND})`,
    backgroundColor: "#000",
    backgroundPosition: "left",
    backgroundSize: "cover",
    color: "white",
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(3),
    "@media (max-width: 508px)": {
      padding: "24px 0",
      width: "90% !important",
    },
  },
  btncls: {
    marginTop: "auto",
    backgroundColor: "rgba(0,0,0,.3)",
    color: "white",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "rgba(0,0,0,.4)",
    },
  },
  itemList: {
    "&:hover": {
      backgroundColor: "rgba(0,0,0,.6)",
    },
  },
}));

const SubItemSideBar = ({ content, color }) => {
  const classes = useStyles();
  const location = useLocation();
  const currentPath = location.pathname;
  const color_ = currentPath === content.path ? "#21bf73" : color;
  let Icon = content.icon;
  return (
    <ListItem
      button
      component={CustomNavLink}
      className={classes.itemList}
      to={content.path}
      style={{ backgroundColor: color_ }}
    >
      <ListItemIcon>
        <Icon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary={content.title} />
    </ListItem>
  );
};

const ItemSideBar = ({ content, toggleItem, toggle }) => {
  const classes = useStyles();
  let Icon = content.icon;
  return (
    <ListItem className={classes.itemList}>
      <ListItemIcon>
        <Icon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary={content.title} />
      <IconButton
        style={{ backgroundColor: "rgba(0,0,0, 0.5)" }}
        color="primary"
        aria-label="routes"
        onClick={toggleItem}
      >
        {toggle ? (
          <KeyboardArrowDownIcon style={{ color: "white" }} />
        ) : (
          <KeyboardArrowUpIcon style={{ color: "white" }} />
        )}
      </IconButton>
    </ListItem>
  );
};
function RederSideBar({ c, color }) {
  const [open, setopen] = useState(true);
  const handleToggle = () => {
    setopen(!open);
  };
  if (c.routes) {
    const key = nextId("side-bar-id-i-");
    const item = (
      <ItemSideBar
        key={key}
        content={c}
        toggleItem={handleToggle}
        toggle={!open}
      />
    );
    const subitems = c.routes.map((route, i) => {
      const key = nextId("side-bar-id-");
      return <RederSideBar key={key} c={route} color={c.color} />;
    });
    if (open) {
      return [item, ...subitems];
    }
    return item;
  }
  return <SubItemSideBar content={c} color={color} />;
}

const SideBar = ({ children, config }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const { activateAuth } = useContext(authContext)

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const handleCloseSession = () => {
    activateAuth()
  }

  return (
    <ThemeProvider theme={themer}>
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <img alt="logo" src={logoMain} style={{ width: "80%" }} />
            <IconButton onClick={handleDrawerClose} style={{ color: "white" }}>
              {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
            {config.map((c, i) => {
              const key = nextId("side-bar-id-");
              return <RederSideBar key={`render-item-${key}`} c={c} />;
            })}
          </List>
          <Button
            onClick={handleCloseSession}
            className={classes.btncls}
          >
            Salir
          </Button>
        </Drawer>
        <main
          className={classes.content}
          style={{ width: "-webkit-fill-available" }}
        >
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default SideBar;
