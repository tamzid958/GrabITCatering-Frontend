import {Box, Button, Collapse, Container, Grid, IconButton, TextField, Typography} from "@material-ui/core";
import Pizza from "../Assets/images/pizza-pizza-filled-with-tomatoes-salami-olives.jpg";
import Orange from "@material-ui/core/colors/orange";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import {Alert} from "@material-ui/lab";
import CloseIcon from '@material-ui/icons/Close';
import React from "react";
import {Link} from "react-router-dom";
export default function FoodDisplay(){
    const [open, addedToCart] = React.useState(false);

    return (
        <Container fixed style={{ marginTop: 50 }}>
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
                    <Grid container spacing={2} style={{
                        marginTop: 20,
                    }} >
                        <Grid item xs={3}>
                            <TextField defaultValue={1} type="number"
                                       label="Quantity" variant="outlined" color="secondary"
                                       InputProps={{
                                           inputProps: { min: 1 }
                                       }}/>
                        </Grid>
                        <Grid item xs={8}>
                            <Button variant="contained" size="large" style={{
                                backgroundColor: Orange[700],
                                height: 48,
                                fontWeight: "bold",
                                color: "whitesmoke"
                            }} onClick={() => {
                                addedToCart(true);
                            }}
                            >
                                Add To Cart
                            </Button>
                        </Grid>
                    </Grid>
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
                            }
                        >
                            Added To Cart. <Link to="/cart">Check Cart</Link>
                        </Alert>
                    </Collapse>
                </Grid>
            </Grid>
        </Container>
    );
}