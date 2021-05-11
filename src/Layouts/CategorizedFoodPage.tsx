import {Container} from "@material-ui/core";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Foods from "../Components/Foods";
import {allFoods} from "../Data/foods";

export default function CategorizedFoodPage(){
    return(
        <div>
            <Navbar/>
            <Container fixed style={{ marginTop:50 }}>
                <Foods foods={allFoods}/>
            </Container>
            <Footer/>
        </div>
    );
}