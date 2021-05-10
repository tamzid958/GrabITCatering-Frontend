import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FoodDisplay from "../Components/FoodDisplay";
import DescriptionAndReview from "../Components/DescriptionAndReview";
import {Container, Typography} from "@material-ui/core";
import Foods from "../Components/Foods";
import {foods} from "../Data/foods";


export default function FoodPage(){
    return (
        <div>
            <Navbar/>
            <FoodDisplay/>
            <DescriptionAndReview/>
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