import {ICartFood, IFakeFood} from "../Interfaces/DataInterfaces";
import {allFoods, getFoodInformation} from "./foods";

const allCartFoods : ICartFood[] = cartFoods();

function cartFoods() : ICartFood[]{
    return [
        {foodId: 1, quantity: 2},
        {foodId: 1, quantity: 2},
    ];
}

export function addToCart(foodId: number, quantity: number) : ICartFood{
    return {foodId, quantity};
}

export function getCartFoods() : ICartFood[]{
    let id: number = 1;

    let cartFoods : IFakeFood[] = [];

    allCartFoods.forEach(function (cartFood : ICartFood){
        let currentFood = getFoodInformation(allFoods, cartFood.foodId);
        if(currentFood !== undefined) cartFoods.push({id: id++, foodId: currentFood.id,
            title: currentFood.title, price: currentFood.price,
            quantity: cartFood.quantity});
    })
    return cartFoods;
}