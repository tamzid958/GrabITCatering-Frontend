import {
    Button,
    Container,
    GridList,
    GridListTile, useMediaQuery, useTheme,
} from "@material-ui/core";
import {IFoodCategory} from "../Interfaces/DataInterfaces";

export default function FoodCategories(props : {foodCategories: IFoodCategory[]}){
    let isScreenSmall = false;
    const theme = useTheme();
    if(useMediaQuery(theme.breakpoints.down('sm'))) isScreenSmall = true;
    return(
        <Container fixed style={{ marginTop: 50 }}>
            <GridList cellHeight={isScreenSmall? 200 : 500} cols={isScreenSmall? 2 : 5} style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
            }}>
                {props.foodCategories.map((foodCategory : IFoodCategory) => (
                    <GridListTile key={foodCategory.id}>
                        <img src={foodCategory.img} alt={foodCategory.title} style={{
                            filter: "blur(3px) brightness(50%)",
                        }}/>
                        <div style={{
                            position: 'absolute',
                            top: isScreenSmall? "30%" : "60%",
                            left: isScreenSmall? '10px' : '20px',
                            fontSize: isScreenSmall? 14 : 18,
                            color: 'whitesmoke',
                            fontWeight: "bold",
                        }}>
                            GRABIT FT. {foodCategory.title} <br/>
                           <span style={{
                               fontSize: isScreenSmall? 10 : 15,
                               fontWeight: "lighter",
                               whiteSpace: isScreenSmall? "normal" : "pre-line"
                           }} >
                               {foodCategory.subtitle}
                           </span> <br/> <br/>
                            <Button variant="contained" href={`/categories/${foodCategory.id}`} size={isScreenSmall? "small": "medium"}>
                               Browse {foodCategory.title}
                            </Button>
                        </div>
                    </GridListTile>
                ))}
            </GridList>
        </Container>
    );
}