import {Box, Button, Collapse, Container, Grid, IconButton, TextField, Typography} from "@material-ui/core";
import Pizza from "../Assets/images/pizza-pizza-filled-with-tomatoes-salami-olives.jpg";
import Orange from "@material-ui/core/colors/orange";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import {Alert} from "@material-ui/lab";
import CloseIcon from '@material-ui/icons/Close';
import React from "react";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import Red from "@material-ui/core/colors/red";
import {QuantityFormInput} from "../Interfaces/FormInterfaces";

export default function FoodDisplay(){
    const [open, addedToCart] = React.useState(false);
    const { register,  formState: { errors }, handleSubmit } = useForm<QuantityFormInput>();
    const onSubmit = (data: QuantityFormInput) =>{
        if(data.quantity === undefined) data.quantity = 1;
        addedToCart(true);
        console.log(data);
    }
    return (
        <Container fixed style={{ marginTop: 50 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={6}>
                        <img src={Pizza} height={500} width={"100%"} alt="Home / Pizza ft. Grabit! / The Ozy Crunch 12″"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" style={{
                            opacity: 0.6
                        }}>
                            Home / Pizza ft. Grabit! / The Ozy Crunch 12″
                        </Typography>
                        <Typography variant="h5" style={{
                            marginTop: 20
                        }}>
                            The Ozy Crunch 12″
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
                            Grab the all-new crispy crunch; minced beef all
                            over and now, bashed with more cheese to give you
                            foodgasm in every bite. Grab your Ozy crunch, now!
                        </Typography>
                            <input type="hidden" value={1} {...register("foodId")}/>
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
                            </Grid>
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
                            Category: Pizza ft. Grabit!
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
                        <Collapse in={open}>
                            <Alert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            addedToCart(false);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }>
                                Added To Cart. <Link to="/cart">Check Cart</Link>
                            </Alert>
                        </Collapse>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}