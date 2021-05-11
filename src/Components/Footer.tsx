import {Card, Container, Grid, Link, Paper, Typography} from "@material-ui/core";
import Orange from "@material-ui/core/colors/orange";
import Grey from "@material-ui/core/colors/grey";
export default function Footer(){
    return(
        <div>
            <Container fixed style={{marginTop: 60}}>
                <Grid container spacing={1}>
                    <Grid item xs>
                        <Paper style={{
                            padding: 40,
                            paddingBottom: 62
                        }}>
                            <Typography style={{
                                fontWeight: "bold",
                                marginBottom: 10
                            }}>
                                Get to Know Grabit  Cloud Space!
                            </Typography>
                            <Typography variant="body1" style={{
                                marginBottom: 10
                            }}>
                                Here at Grabit Catering, we’re creating a
                                culture of having healthy foods. Be it for
                                your midday munch cravings or corporate
                                office/personal events; here you can order
                                complete custom meals!
                            </Typography>
                            <Typography style={{
                                fontWeight: "bold",
                            }}>
                                Become an insider at
                            </Typography>
                            <Link href="https://www.grabit.catering/insider">
                                www.grabit.catering/insider
                            </Link>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper style={{
                            padding:40,
                        }}>
                            <Typography style={{
                            fontWeight: "bold",
                            marginBottom: 10
                            }}>
                                Kitchen HQ | Location Map!
                            </Typography>
                            <Typography variant="body1" style={{
                                marginBottom: 10
                            }}>
                                (Arifabad Housing Society)
                                House E/10,  Road no. 2, Rupnagar,
                                Mirpur, Dhaka 1216, Bangladesh
                            </Typography>
                            <Typography style={{
                                fontWeight: "bold",
                                marginBottom: 10
                            }}>
                                Customer Support!
                            </Typography>
                            <Typography variant="body1" style={{
                                marginBottom: 10
                            }}>
                                Hotline no: +880-1883-960093 <br/>
                                Email: order@grabit.catering
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Card style={{
                marginTop: 50,
                paddingLeft: 50,
                paddingTop: 10,
                paddingBottom: 10,
                borderTop: 1,
                backgroundColor: Orange[700]
            }}>
                <Typography variant="h6" style={{
                    fontWeight: "bolder",
                    opacity: 0.8,
                    color: Grey[50]
                }} >
                    Copyright © by Tamzid Ahmed
                </Typography>
            </Card>
        </div>
    );
}