import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CheckOutInfo from "../Components/CheckOutInfo";
import {getCartFoods, isEmptyCart} from "../Data/cartFoods";
import {IFakeFood} from "../Interfaces/DataInterfaces";
import {Redirect} from "react-router";
import React from "react";

export default function CheckoutPage(){
    let cartFoods : IFakeFood[] = getCartFoods();
    if(isEmptyCart()) return (<Redirect to={"/"}/>);
    return(
        <div>
            <Navbar/>
            <CheckOutInfo foods={cartFoods}/>
            <Footer/>
        </div>
    );
}