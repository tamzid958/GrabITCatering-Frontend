import {ICartFood, IFakeFood} from "../Interfaces/DataInterfaces";
import {allFoods, getFoodInformation} from "./foods";
import {toast} from "react-toastify";
import {Link} from "@material-ui/core";
import Grey from "@material-ui/core/colors/grey";

export function addToCart(foodId: number, quantity: number) : ICartFood{
    let initialSessionCartFoods =  localStorage.getItem("cartFoods");
    let sessionCartFoods : ICartFood[]= [];

    if(initialSessionCartFoods){
        sessionCartFoods = JSON.parse(initialSessionCartFoods);
        let existingCartFood = sessionCartFoods.find(e => e.foodId === foodId);
        if(existingCartFood !== undefined){
            let tempQuantity = existingCartFood.quantity + quantity;
            sessionCartFoods = cartFoodRemoveMethod(sessionCartFoods, existingCartFood);
            sessionCartFoods.push({ foodId: foodId, quantity: tempQuantity});
            localStorage.setItem("cartFoods", JSON.stringify(sessionCartFoods));
        }
        else{
            sessionCartFoods.push({foodId, quantity});
            localStorage.setItem("cartFoods", JSON.stringify(sessionCartFoods));
        }
    }
    else{
        sessionCartFoods.push({foodId, quantity});
        localStorage.setItem("cartFoods", JSON.stringify(sessionCartFoods));
    }
    toast.success(()=> {
        return(
            <div>
                Added To Cart.
                <Link style={{
                    marginLeft: 5,
                    color: Grey[50],
                    textDecoration: "underline"
                }} href={"/cart"}>Check Cart</Link>
            </div>
        )});
    return {foodId, quantity};
}

export function getCartFoods() : IFakeFood[]{
    let initialSessionCartFoods =  localStorage.getItem("cartFoods");
    let sessionCartFoods : ICartFood[] = [];
    let cartFoods : IFakeFood[] = [];
    let id: number = 1;

    if(initialSessionCartFoods){
        sessionCartFoods = JSON.parse(initialSessionCartFoods);
    }

    sessionCartFoods.forEach(function (cartFood : ICartFood){
        let currentFood = getFoodInformation(allFoods, cartFood.foodId);
        if(currentFood !== undefined) {
            cartFoods.push({
                id: id++, foodId: currentFood.id,
                title: currentFood.title, price: currentFood.price,
                quantity: cartFood.quantity
            });
        }
    })
    return cartFoods;
}

export function removeFromCart (id: number){
    let initialSessionCartFoods =  localStorage.getItem("cartFoods");
    let sessionCartFoods : ICartFood[] = [];

    if(initialSessionCartFoods){
        sessionCartFoods = JSON.parse(initialSessionCartFoods);
        let selectedForRemovingCartFood = sessionCartFoods.find(e => e.foodId === id);
        if(selectedForRemovingCartFood !== undefined){
            sessionCartFoods = cartFoodRemoveMethod(sessionCartFoods, selectedForRemovingCartFood);
            localStorage.setItem("cartFoods", JSON.stringify(sessionCartFoods));
            toast.error("Removed From Cart");
        }
    }
}

function cartFoodRemoveMethod(cartFoods : ICartFood[], cartFood: ICartFood) {
    return cartFoods.filter(function(ele){
        return ele !== cartFood;
    });
}
