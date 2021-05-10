import {AppBar, Grid, Toolbar, Typography, IconButton, Link as MaterialLink, Badge} from "@material-ui/core";
import GrabitLogo from "../Assets/images/Grabit_Logo.png";
import FastFoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined';
import PermPhoneMsgRoundedIcon from '@material-ui/icons/PermPhoneMsgRounded';
import LocalMallRoundedIcon from'@material-ui/icons/LocalMallRounded';
import Yellow from "@material-ui/core/colors/yellow";
import {Link} from 'react-router-dom';
export default function Navbar(){
    return (
        <AppBar position="sticky" color="default" style={{
            paddingTop: 10
        }}>
            <Toolbar>
                <Grid justify="space-between" container direction="row" alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <Link to="/">
                            <img src={GrabitLogo} width={150} alt="Logo" />
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Grid container spacing={1}  direction="row" alignItems="center">
                            <Grid item xs={1} sm={1}>
                                <FastFoodOutlinedIcon/>
                            </Grid>
                            <Grid item xs={11} sm={11}>
                                <Typography variant="body2">
                                    Block E, Road 2, House 10
                                    Rupnagar, Mirpur, Dhaka 1216
                                </Typography>
                            </Grid>
                            <Grid item xs={1} sm={1}>
                                <PermPhoneMsgRoundedIcon/>
                            </Grid>
                            <Grid item xs={11} sm={11}>
                                <MaterialLink href="tel:+880-1883-960093" variant="body2" color="textPrimary">
                                    +880-1883-960093
                                </MaterialLink> /
                                <MaterialLink href="tel:+880-1777537411" variant="body2" color="textPrimary">
                                    +880-1777537411
                                </MaterialLink>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" style={{
                            fontWeight: "bolder"
                        }}>
                            ৳ 0.00
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton href="/cart">
                            <Badge badgeContent={4} max={10} color="secondary">
                                <LocalMallRoundedIcon fontSize="large" style={{
                                    color: Yellow[900],
                                }}/>
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}