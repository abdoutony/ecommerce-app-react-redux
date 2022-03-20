import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
export default function FeaturedItem(props) {
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
  return (
    <Card sx={{ maxWidth: 345, margin: "30px 0" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={element.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {element.title}
          </Typography>
          <Typography
            gutterBottom
            variant="span"
            className="bg-warning"
            color="text.primay"
          >
            {element.category}
          </Typography>

          <Typography
            variant="body2"
            color="text.primary"
            style={{ fontWeight: "bold" }}
          >
            Price:
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {element.price}$
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="pt-2 pb-4">
        <Button size="small" variant="contained" color="warning">
          <ProductionQuantityLimitsIcon /> Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
