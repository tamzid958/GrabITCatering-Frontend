import {
    Box, Button,
    Card, CardActions, CardContent,
    Container,
    Grid, Hidden,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Typography
} from "@material-ui/core";
import Orange from "@material-ui/core/colors/orange";
import {IFakeFood} from "../Interfaces/DataInterfaces";
import {shippingCost} from "../Data/shippingCost";

export default function CartTable(props : {foods: IFakeFood[]}){
    let subTotal : number = 0.00;

    return(
        <Container fixed style={{marginTop: 50}}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    <TableContainer component={Paper}>
                        <Table aria-label="caption table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Food</TableCell>
                                    <TableCell align="left">Price</TableCell>
                                    <TableCell align="left">Quantity</TableCell>
                                    <TableCell align="left">SubTotal</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.foods.map((food : IFakeFood) => (
                                    <TableRow key={food.id}>
                                        <TableCell align="left">
                                            {food.title}
                                        </TableCell>
                                        <TableCell align="left">৳ {food.price}</TableCell>
                                        <TableCell align="left">{food.quantity}</TableCell>
                                        <TableCell align="left">৳ {food.price * food.quantity}</TableCell>
                                        <Hidden xsUp>{subTotal += food.price * food.quantity}</Hidden>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
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
                                        ৳ {subTotal}
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
                                        ৳ {subTotal !== 0.00? (subTotal + shippingCost) : 0.00}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Button size="large" variant="contained"
                                    style={{
                                        marginBottom: 20,
                                        backgroundColor: Orange[700],
                                        fontWeight: "bold",
                                        color: "whitesmoke",
                                        width: "100%"
                                    }} href="/checkout">Proceed to Checkout</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}