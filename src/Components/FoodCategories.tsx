import {
    Button,
    Container,
    GridList,
    GridListTile, useMediaQuery, useTheme,
} from "@material-ui/core";
import {IFoodCategory} from "../Interfaces/DataInterfaces";

export default function FoodCategories(props : {foodCategories: IFoodCategory[]}){
    let column = 5;
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    if(matches){
        column = 2;
    }
    return(
        <Container fixed style={{ marginTop: 50 }}>
            <GridList cellHeight={500} cols={column} style={{
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
                            top: "60%",
                            left: '20px',
                            fontSize: 18,
                            color: 'whitesmoke',
                            fontWeight: "bold",
                        }}>
                            GRABIT FT. {foodCategory.title} <br/>
                           <span style={{
                               fontSize: 15,
                               fontWeight: "lighter",
                               whiteSpace: "pre-line"
                           }} >
                               {foodCategory.subtitle}
                           </span> <br/> <br/>
                            <Button variant="contained" href={`/categories/${foodCategory.id}`}>
                               Browse {foodCategory.title}
                            </Button>
                        </div>
                    </GridListTile>
                ))}
            </GridList>
        </Container>
    );
}