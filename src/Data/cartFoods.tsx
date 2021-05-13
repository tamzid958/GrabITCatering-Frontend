import {ICartFood, IFakeFood} from "../Interfaces/DataInterfaces";
import {allFoods, getFoodInformation} from "./foods";
import {toast} from "react-toastify";
import {Link} from "@material-ui/core";
import Grey from "@material-ui/core/colors/grey";

export function addToCart(foodId: number, quantity: number) : ICartFood{
    let initialLocalStoredCartFoods =  localStorage.getItem("cartFoods");
    let sessionCartFoods : ICartFood[]= [];

    if(initialLocalStoredCartFoods){
        sessionCartFoods = JSON.parse(initialLocalStoredCartFoods);
        let existingCartFood = sessionCartFoods.find(e => e.i === foodId);
        if(existingCartFood !== undefined){
            let tempQuantity = existingCartFood.q + quantity;
            sessionCartFoods = cartFoodRemoveMethod(sessionCartFoods, existingCartFood);
            sessionCartFoods.push({ i: foodId, q: tempQuantity});
            localStorage.setItem("cartFoods", JSON.stringify(sessionCartFoods));
        }
        else{
            sessionCartFoods.push({i:foodId, q:quantity});
            localStorage.setItem("cartFoods", JSON.stringify(sessionCartFoods));
        }
    }
    else{
        sessionCartFoods.push({i:foodId, q:quantity});
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
        )},
        {
            onClose: () => window.location.reload()
        });
    return {i:foodId, q:quantity};
}

export function getCartFoods() : IFakeFood[]{
    let initialLocalStoredCartFoods =  localStorage.getItem("cartFoods");
    let sessionCartFoods : ICartFood[] = [];
    let cartFoods : IFakeFood[] = [];

    if(initialLocalStoredCartFoods){
        sessionCartFoods = JSON.parse(initialLocalStoredCartFoods);
    }

    sessionCartFoods.forEach(function (cartFood : ICartFood){
        let currentFood = getFoodInformation(allFoods, cartFood.i);
        if(currentFood !== undefined) {
            cartFoods.push({foodId: currentFood.id,
                title: currentFood.title, price: currentFood.price,
                quantity: cartFood.q
            });
        }
    })
    return cartFoods;
}

export function removeFromCart (id: number){
    let initialLocalStoredCartFoods =  localStorage.getItem("cartFoods");
    let sessionCartFoods : ICartFood[] = [];

    if(initialLocalStoredCartFoods){
        sessionCartFoods = JSON.parse(initialLocalStoredCartFoods);
        let selectedForRemovingCartFood = sessionCartFoods.find(e => e.i === id);
        if(selectedForRemovingCartFood !== undefined){
            sessionCartFoods = cartFoodRemoveMethod(sessionCartFoods, selectedForRemovingCartFood);
            localStorage.setItem("cartFoods", JSON.stringify(sessionCartFoods));
            toast.error("Removed From Cart", {
                onClose: () => window.location.reload()
            });
        }
    }
}
export function isEmptyCart() : boolean{
    let initialLocalStoredCartFoods =  localStorage.getItem("cartFoods");
    let sessionCartFoods : ICartFood[]= [];
    if(initialLocalStoredCartFoods){
        sessionCartFoods = JSON.parse(initialLocalStoredCartFoods);
    }
    return  sessionCartFoods.length === 0;
}

function cartFoodRemoveMethod(cartFoods : ICartFood[], cartFood: ICartFood) {
    return cartFoods.filter(function(ele){
        return ele !== cartFood;
    });
}
