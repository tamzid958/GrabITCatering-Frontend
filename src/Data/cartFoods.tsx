import {ICartFood, IFakeFood} from "../Interfaces/DataInterfaces";
import {allFoods, getFoodInformation} from "./foods";
import {toast} from "react-toastify";
import {Link} from "@material-ui/core";
import Grey from "@material-ui/core/colors/grey";

const allCartFoods : ICartFood[] = cartFoods();

function cartFoods() : ICartFood[]{
    return [
        {foodId: 1, quantity: 2},
        {foodId: 1, quantity: 2},
        {foodId: 2, quantity: 2},
    ];
}

export function addToCart(foodId: number, quantity: number) : ICartFood{
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
    let id: number = 1;

    let cartFoods : IFakeFood[] = [];

    allCartFoods.forEach(function (cartFood : ICartFood){
        let currentFood = getFoodInformation(allFoods, cartFood.foodId);
        if(currentFood !== undefined) {
            let existingFood = cartFoods.find(e => e.foodId === currentFood!.id);

            if( existingFood === undefined ){
                cartFoods.push({
                    id: id++, foodId: currentFood.id,
                    title: currentFood.title, price: currentFood.price,
                    quantity: cartFood.quantity
                });
            }
            else{
                existingFood.quantity += cartFood.quantity;
            }
        }
    })
    return cartFoods;
}

export function removeFromCart (){
    toast.error("Removed From Cart");
}