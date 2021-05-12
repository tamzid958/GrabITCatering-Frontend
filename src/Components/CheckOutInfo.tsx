import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from "@material-ui/core";
import Orange from "@material-ui/core/colors/orange";
import React from "react";
import {useForm} from "react-hook-form";
import Red from "@material-ui/core/colors/red";
import {CheckOutFormInput, PaymentMethodEnum} from "../Interfaces/FormInterfaces";
import {shippingCost} from "../Data/shippingCost";
import {IFakeFood} from "../Interfaces/DataInterfaces";


export default function CheckOutInfo(props: {foods: IFakeFood[]}){
    let subTotal : number = 0;

    const [value, setValue] = React.useState({paymentMethod: PaymentMethodEnum.cashOnDelivery});
    const [state, setState] = React.useState({checkedAgreement: true});

    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue({...value, [event.target.name]: event.target.value });
    };
    const handleChangeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { register,  formState: { errors }, handleSubmit } = useForm<CheckOutFormInput>();
    const onSubmit = (data: CheckOutFormInput) => {
        if(data.paymentMethod === undefined) data.paymentMethod = PaymentMethodEnum.cashOnDelivery;
        console.log(data)
    };

    props.foods.forEach(function (cartFood : IFakeFood){
        subTotal += (cartFood.quantity * cartFood.price);
    });

    return(
        <Container fixed style={{ marginTop: 50 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={8}>
                        <Card style={{ padding:30 }}>
                            <Typography variant="h6" style={{ marginBottom: 20 }}>
                                Billing details
                            </Typography>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="First Name" variant="outlined" required={true}
                                               {...register("firstName",
                                                   { pattern: /^[A-Z]+$/i })}
                                               style={{ width:"100%" }} color="secondary" />
                                    <Typography variant="body1" style={{
                                        marginTop: 10,
                                        color: Red[900],
                                    }}>
                                        {errors.firstName?.type === 'pattern' && "Only alphabets are allowed"}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="Last Name" variant="outlined" required={true}
                                               {...register("lastName",
                                                   { pattern: /^[A-Z]+$/i })}
                                               style={{ width:"100%" }} color="secondary" />
                                    <Typography variant="body1" style={{
                                        marginTop: 10,
                                        color: Red[900],
                                    }}>
                                        {errors.lastName?.type === 'pattern' && "Only alphabets are allowed"}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1} style={{
                                marginTop: 20
                            }} >
                                <Grid item xs={12} sm={6}>
                                    <TextField label="Company Name (optional)" variant="outlined"
                                               {...register("companyName")}
                                               style={{ width:"100%" }} color="secondary" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="Street Address" variant="outlined" required={true}
                                               {...register("streetAddress")}
                                               style={{ width:"100%" }} color="secondary" />
                                </Grid>
                            </Grid>
                            <Grid container spacing={1} style={{
                                marginTop: 20
                            }} >
                                <Grid item xs={12} sm={6}>
                                    <TextField type="tel" label="Phone" required={true}
                                               {...register("phone")}
                                               variant="outlined" style={{ width:"100%" }} color="secondary" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField type="email" label="Email Address" required={true}
                                               {...register("email")}
                                               variant="outlined" style={{ width:"100%" }} color="secondary" />
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
                                {...register("notes")}
                            />
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
                                            ৳ {subTotal !== 0 ? subTotal : "0.00" }
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
                                            ৳ {subTotal !== 0? (subTotal + shippingCost) : "0.00"}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <FormControl component="fieldset" style={{
                                    marginTop: 20
                                }}>
                                    <RadioGroup aria-label="paymentMethod" {...register("paymentMethod")}
                                                value={value.paymentMethod}
                                                name="paymentMethod" onChange={handleChangeValue}>
                                        <FormControlLabel value={PaymentMethodEnum.cashOnDelivery}
                                                          control={<Radio required={true} />} label="Cash on Delivery" />
                                        <FormControlLabel value={PaymentMethodEnum.onlinePayment}
                                                          control={<Radio required={true} />} label="Online Payment" />
                                    </RadioGroup>
                                </FormControl>
                                {(value.paymentMethod === PaymentMethodEnum.onlinePayment)?
                                    <div>
                                        <Typography variant="body2">
                                            A pop will be shown. Choose your preferred payment method.
                                            After successful payment, you will receive message about the transaction.
                                        </Typography>
                                    </div>: null
                                }
                                <FormControlLabel style={{ marginTop: 20 }}
                                                  control={<Checkbox
                                                      required={true}
                                                      checked={state.checkedAgreement}
                                                      onChange={handleChangeChecked}
                                                      name="checkedAgreement" />}
                                                  label={
                                                      <Typography variant="body2">
                                                          I have read and agree to the website terms and conditions
                                                      </Typography>}
                                />
                            </CardContent>
                            <CardActions>
                                <Button type="submit" size="large" variant="contained"
                                        style={{
                                            marginBottom: 20,
                                            backgroundColor: Orange[700],
                                            fontWeight: "bold",
                                            color: "whitesmoke",
                                            width: "100%"
                                        }}>{(value.paymentMethod === PaymentMethodEnum.onlinePayment)?
                                    "Pay Online" : "Place Order"}</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}