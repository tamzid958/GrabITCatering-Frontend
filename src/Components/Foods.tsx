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

export default function Foods(props : any){
    return(
        <Container fixed style={{ marginTop: 50 }}>
            <Grid container spacing={5}>
                {props.foods.map((food : any) => (
                    <Grid item xs={6} sm={3} key={food.id}>
                        <Card>
                            <CardActionArea href={`/food/${food.id}`}>
                                <CardMedia
                                    component="img"
                                    alt={food.title}
                                    height="140"
                                    image={food.img}
                                    title="Contemplative Reptile"
                                />
                                <CardContent style={{
                                     textAlign:'center'
                                }}>
                                    <Typography gutterBottom variant="body2" component="p" color="textSecondary">
                                        {food.category} ft. Grabit!
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
                                <Link variant="h6" href="#" style={{
                                    color:Orange[700],
                                    textDecorationLine: "underline"
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