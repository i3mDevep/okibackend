import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { currencyFormat } from "../../../utils/formatCOP";
import CardMedia from "@material-ui/core/CardMedia";
import { imgCardShop } from "../../common/urls";
import { GenericForm, SimpleForm } from "../../common/templeate-forms";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: 20
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
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
});

export function ResumeSale({
  price,
  products = [],
  formAddCardShop,
  formPayment,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={imgCardShop}
        title="Card Shop"
      />
      <SimpleForm {...formAddCardShop} />
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Bienvenido a tu carrito de compras
        </Typography>
        <Typography variant="h5" component="h2">
          {currencyFormat(price || 0)}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Resumen de compra:
        </Typography>
        {products.map((p, index) => (
          <Typography key={index} variant="body2" component="p">
            {`lleva ${p.count} de ${p.product.name} con un valor de  ${
              p.product &&
              currencyFormat(parseInt(p.count) * parseInt(p.product.price))
            }`}
          </Typography>
        ))}
      </CardContent>
      <GenericForm {...formPayment} />
    </Card>
  );
}
