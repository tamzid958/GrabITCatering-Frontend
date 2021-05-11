import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CartTable from "../Components/CartTable";
import {getCartFoods} from "../Data/cartFoods";

export default function CartPage(){
    let cartFoods = getCartFoods();
    return(
        <div>
            <Navbar/>
            <CartTable foods={cartFoods}/>
            <Footer/>
        </div>
    );
}