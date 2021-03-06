import {Box, Button, Container, Grid, TextField, Typography} from "@material-ui/core";
import Orange from "@material-ui/core/colors/orange";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import React from "react";
import {useForm} from "react-hook-form";
import Red from "@material-ui/core/colors/red";
import {QuantityFormInput} from "../Interfaces/FormInterfaces";
import {addToCart} from "../Data/cartFoods";
import {IFood} from "../Interfaces/DataInterfaces";


export default function FoodDisplay(props: {food: IFood}){
    const { register,  formState: { errors }, handleSubmit } = useForm<QuantityFormInput>();
    const onSubmit = (data: QuantityFormInput) =>{
        data.foodId = props.food.id;
        if(data.quantity === undefined) data.quantity = 1;
        console.log(addToCart(data.foodId, parseInt(String(data.quantity))));
    }
    return (
        <Container fixed style={{ marginTop: 50 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={6}>
                        <img src={props.food.img} height={500} width={"100%"} alt={props.food.title} style={{
                            objectFit: "cover",
                        }}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" style={{
                            opacity: 0.6
                        }}>
                            Home / {props.food.categoryName} ft. Grabit! / {props.food.title}
                        </Typography>
                        <Typography variant="h5" style={{
                            marginTop: 20
                        }}>
                            {props.food.title}
                        </Typography>
                        <Typography variant="h5" style={{
                            marginTop: 20,
                            fontWeight: "bold"
                        }}>
                            ৳ 799.00
                        </Typography>
                        <Typography  variant="body1" style={{
                            marginTop: 20
                        }}>
                            {props.food.description}
                        </Typography>
                        {(props.food.available) ?
                            <Grid container spacing={2} style={{
                                marginTop: 20,
                            }} >
                                <Grid item xs={3}>
                                    <TextField required={true} defaultValue={1}
                                               {...register("quantity",{ min: 1 })} type="number"
                                               label="Quantity" variant="outlined" color="secondary"
                                               InputProps={{
                                                   inputProps: {min: 1}
                                               }}/>
                                </Grid>
                                <Grid item xs={8}>
                                    <Button type="submit" variant="contained" size="large" style={{
                                        backgroundColor: Orange[700],
                                        height: 48,
                                        fontWeight: "bold",
                                        color: "whitesmoke"
                                    }}>
                                        Add To Cart
                                    </Button>
                                </Grid>
                            </Grid> : <Typography variant="body1" style={{
                                marginTop: 20,
                                color: Red[900],
                            }}>
                                Stock Out
                            </Typography>
                        }

                            <Typography variant="body1" style={{
                                marginTop: 10,
                                color: Red[900],
                            }}>
                                {errors.quantity?.type === 'min' && "minimum quantity: 1"}
                            </Typography>
                        <Box border={1}  style={{
                            marginTop: 20,
                            width: 70
                        }}>
                        </Box>
                        <Typography variant="body1" style={{
                            marginTop: 20,
                        }}>
                            Category: {props.food.categoryName} ft. Grabit!
                        </Typography>
                        <div  style={{ display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 20,
                            marginBottom: 20,
                        }}>
                            <Typography variant="h6" style={{
                                fontWeight: "bold",
                                marginRight: 10
                            }}>
                                Average Feedback:
                            </Typography>
                            <SentimentVerySatisfiedIcon style={{ fontSize: 20, color: Orange[700], }} />
                        </div>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}