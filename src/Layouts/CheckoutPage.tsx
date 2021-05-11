import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CheckOutInfo from "../Components/CheckOutInfo";
import {getCartFoods} from "../Data/cartFoods";

export default function CheckoutPage(){
    let cartFoods = getCartFoods();
    return(
        <div>
            <Navbar/>
            <CheckOutInfo foods={cartFoods}/>
            <Footer/>
        </div>
    );
}