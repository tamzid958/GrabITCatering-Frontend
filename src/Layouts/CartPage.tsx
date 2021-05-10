import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CartTable from "../Components/CartTable";

export default function CartPage(){
    return(
        <div>
            <Navbar/>
            <CartTable/>
            <Footer/>
        </div>
    );
}