import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
    Link
} from "@material-ui/core";
import Orange from "@material-ui/core/colors/orange";
import {IFood} from "../Interfaces/DataInterfaces";
import {addToCart} from "../Data/cartFoods";
import {toast, ToastContainer} from "react-toastify";
import React from "react";

export default function Foods(props : { foods: IFood[] }){
    return(
        <Container fixed style={{ marginTop: 50 }}>
            <ToastContainer />
            <Grid container spacing={5}>
                {props.foods.map((food : IFood) => (
                    <Grid item xs={6} sm={3} key={food.id}>
                        <Card>
                            <CardActionArea href={`/food/${food.id}`}>
                                <CardMedia
                                    component="img"
                                    alt={food.title}
                                    height="140"
                                    image={food.img}
                                    title={food.title}
                                />
                                <CardContent style={{
                                     textAlign:'center'
                                }}>
                                    <Typography gutterBottom variant="body2" component="p" color="textSecondary">
                                        {food.categoryName} ft. Grabit!
                                    </Typography>
                                    <Typography variant="h6" component="h2" style={{
                                        fontWeight: "bold",
                                    }}>
                                        {food.title}
                                    </Typography>
                                    <Typography variant="h6" component="h2" color="textSecondary" style={{
                                        fontWeight: "bold",
                                    }}>
                                        ৳ {food.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions  style={{
                               justifyContent: "center"
                            }}>
                                <Link variant="h6" style={{
                                    color:Orange[700],
                                    textDecorationLine: "underline",
                                    cursor: "pointer"
                                }} onClick={() => {
                                    console.log(addToCart(food.id, 1))
                                    toast.success("Added to cart.");
                                }}>
                                   Add To Cart
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}