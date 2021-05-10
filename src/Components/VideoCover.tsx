import ChefImg from "../Assets/images/pexels-pietro-jeng-671956.jpg";
import {Card, CardContent, CardMedia, Container, Grid, IconButton, Typography} from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import CookVideo from "../Assets/videos/1507620040.webm";

export default function VideoCover(){
    return(
        <div style={{
            marginTop: 50,
            backgroundImage: 'url('+ ChefImg +')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 300,
            padding: 100,
            color: "whitesmoke",
        }}>
            <Container fixed>
                <Grid container spacing={1}  direction="row" alignItems="center">
                    <Grid item xs={6} sm={6}>
                        <Card color="transparent">
                            <CardContent>
                                <Grid container spacing={6}  direction="row" alignItems="center">
                                    <Grid item  xs={1} sm={1}>
                                        <IconButton aria-label="play/pause">
                                            <PlayCircleOutlineIcon style={{
                                                fontSize: 40,
                                                color: "black"
                                            }}/>
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={11} sm={11}>
                                        <Typography variant="body1" style={{
                                            fontWeight: "bolder"
                                        }}>
                                            SEE HOW WE PREPARE YOUR FOOD?
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardMedia
                                component='video'
                                image={CookVideo}
                                autoPlay
                                muted
                                loop
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}