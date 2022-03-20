import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
export default function ProductCardOne(props) {
  const dummy = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };
  const element = props.element || dummy;
  const fullWidth = props.fullWidth;
  return (
    <Card
      sx={{
        maxWidth: fullWidth ? "100%" : 320,
        margin: "30px 0",
        boxShadow: "none",
        border: "1px solid #ededed",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          style={{ padding: "30px" }}
          image={element.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="body2">
            {element.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="d-flex bg-blue">
        <CardContent className="col-md-9 p-0">
          <Typography
            gutterBottom
            variant="body2"
            className="text-white"
            style={{ fontWeight: "bold" }}
          >
            {element.price}$
          </Typography>
        </CardContent>
        <CardContent className="col-md-3 p-0">
          <Button size="small" variant="contained" color="warning">
            <ProductionQuantityLimitsIcon />
          </Button>
        </CardContent>
      </CardActions>
    </Card>
  );
}
