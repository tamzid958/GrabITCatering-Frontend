import {
    Box, Button,
    Card, CardActions,
    CardContent, Checkbox,
    Container,
    FormControl, FormControlLabel,
    Grid, Radio,
    RadioGroup,
    TextField,
    Typography
} from "@material-ui/core";
import Orange from "@material-ui/core/colors/orange";
import React from "react";

export default function CheckOutInfo(){
    const [value, setValue] = React.useState('Cash on Delivery');
    const [state, setState] = React.useState({checkedAgreement: true});
    const handleChangeDeliveryMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    const handleChangeAgreement = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return(
        <Container fixed style={{ marginTop: 50 }}>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={8}>
                    <Card style={{ padding:30 }}>
                        <form noValidate autoComplete="off">
                            <Typography variant="h6" style={{ marginBottom: 20 }}>
                                Billing details
                            </Typography>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="First Name" variant="outlined" style={{ width:"100%" }} color="secondary" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="Last Name" variant="outlined" style={{ width:"100%" }} color="secondary" />
                                </Grid>
                            </Grid>
                            <Grid container spacing={1} style={{
                                marginTop: 20
                            }} >
                                <Grid item xs={12} sm={6}>
                                    <TextField label="Company Name (optional)" variant="outlined" style={{ width:"100%" }} color="secondary" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="Street Address" variant="outlined" style={{ width:"100%" }} color="secondary" />
                                </Grid>
                            </Grid>
                            <Grid container spacing={1} style={{
                                marginTop: 20
                            }} >
                                <Grid item xs={12} sm={6}>
                                    <TextField type="tel" label="Phone" variant="outlined" style={{ width:"100%" }} color="secondary" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField type="email" label="Email Address" variant="outlined" style={{ width:"100%" }} color="secondary" />
                                </Grid>
                            </Grid>
                            <TextField
                                label="Order Notes (optional)"
                                multiline
                                rows={4}
                                variant="outlined"
                                style={{ width:"100%",
                                    marginTop: 20}}
                                color="secondary"
                            />
                        </form>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h4" gutterBottom>
                                Cart Totals
                            </Typography>
                            <Box borderTop={5} style={{
                                marginTop: 20,
                                paddingTop: 20,
                                width: 80 }}>
                            </Box>
                            <Grid container spacing={3}>
                                <Grid item xs>
                                    <Typography variant="h5" component="h2">
                                        Subtotal
                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" component="h2" style={{
                                        fontWeight: "bold"
                                    }}>
                                        ৳ 450
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Box borderTop={1} style={{
                                marginTop: 20,
                                paddingTop: 20,
                            }}>
                            </Box>
                            <Grid container spacing={3}>
                                <Grid item xs>
                                    <Typography variant="h5" component="h2">
                                        Shipping
                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="body2">
                                        #GrabitRiderPro <br/>
                                        Shipping to Dhaka
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Box borderTop={1} style={{
                                marginTop: 20,
                                paddingTop: 20,
                            }}>
                            </Box>
                            <Grid container spacing={3}>
                                <Grid item xs>
                                    <Typography variant="h5" component="h2">
                                        Total
                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" component="h2" style={{
                                        fontWeight: "bold"
                                    }}>
                                        ৳ 450
                                    </Typography>
                                </Grid>
                            </Grid>
                            <FormControl component="fieldset" style={{
                                marginTop: 20
                            }}>
                                <RadioGroup aria-label="paymentMethod" name="paymentMethod" value={value} onChange={handleChangeDeliveryMethod}>
                                    <FormControlLabel value="Cash on Delivery" control={<Radio />} label="Cash on Delivery" />
                                    <FormControlLabel value="Online Payment" control={<Radio />} label="Online Payment" />
                                </RadioGroup>
                            </FormControl>
                            {(value==="Online Payment")?
                                <div>
                                    <Typography variant="body2">
                                        A pop will be shown. Choose your preferred payment method.
                                        After successful payment, you will receive message about the transaction.
                                    </Typography>
                                </div>: null
                            }
                            <FormControlLabel style={{ marginTop: 20 }}
                                              control={<Checkbox
                                                  checked={state.checkedAgreement}
                                                  onChange={handleChangeAgreement}
                                                  name="checkedAgreement" />}
                                              label={
                                                  <Typography variant="body2">
                                                      I have read and agree to the website terms and conditions
                                                  </Typography>}
                            />
                        </CardContent>
                        <CardActions>
                            <Button size="large" variant="contained"
                                    style={{
                                        marginBottom: 20,
                                        backgroundColor: Orange[700],
                                        fontWeight: "bold",
                                        color: "whitesmoke",
                                        width: "100%"
                                    }} href="/">{(value==="Online Payment")? "Pay Online" : "Place Order"} </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}