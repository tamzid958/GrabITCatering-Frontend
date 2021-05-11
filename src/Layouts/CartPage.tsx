import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CartTable from "../Components/CartTable";
import {getCartFoods} from "../Data/cartFoods";
import {IFakeFood} from "../Interfaces/DataInterfaces";

export default function CartPage(){
    let cartFoods : IFakeFood[] = getCartFoods();
    return(
        <div>
            <Navbar/>
            <CartTable foods={cartFoods}/>
            <Footer/>
        </div>
    );
}