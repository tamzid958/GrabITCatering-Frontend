import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CartTable from "../Components/CartTable";
import {foods} from "../Data/foods";
export default function CartPage(){
    return(
        <div>
            <Navbar/>
            <CartTable foods={foods}/>
            <Footer/>
        </div>
    );
}