import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CheckOutInfo from "../Components/CheckOutInfo";
import {getCartFoods} from "../Data/cartFoods";
import {IFakeFood} from "../Interfaces/DataInterfaces";

export default function CheckoutPage(){
    let cartFoods : IFakeFood[] = getCartFoods();
    return(
        <div>
            <Navbar/>
            <CheckOutInfo foods={cartFoods}/>
            <Footer/>
        </div>
    );
}