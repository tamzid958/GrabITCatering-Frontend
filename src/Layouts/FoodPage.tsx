import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FoodDisplay from "../Components/FoodDisplay";
import DescriptionAndReview from "../Components/DescriptionAndReview";
import {Container, Typography} from "@material-ui/core";
import Foods from "../Components/Foods";
import {foods} from "../Data/foods";
import {useParams} from "react-router";


export default function FoodPage(){
    let id = useParams();
    return (
        <div>
            <Navbar/>
            <FoodDisplay food={id}/>
            <DescriptionAndReview food={id}/>
            <Container fixed style={{ marginTop: 50 }}>
                <Typography variant="h3" style={{
                    fontWeight: "bold",
                }}>
                    Related Foods
                </Typography>
            </Container>
            <Foods foods={foods}/>
            <Footer/>
        </div>
    );
}