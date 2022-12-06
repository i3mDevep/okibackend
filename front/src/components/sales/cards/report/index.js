import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard({
  title,
  tag,
  data,
  formatter = (v) => v,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Resumen de ventas hoy
        </Typography>
        <Typography variant="h5" component="h2">
          {formatter((data && data[tag]) || 0)}
        </Typography>
        <Typography variant="body2" component="p">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
