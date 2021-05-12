import {ICartFood, ICollectionOrder, IMakeOrder} from "../Interfaces/DataInterfaces";
import {toast} from "react-toastify";
import { v4 as UUID4 } from 'uuid';
import {PaymentMethodEnum} from "../Interfaces/FormInterfaces";
export function makeOrder(data : any){
    let initialLocalStoredCartFoods =  localStorage.getItem("cartFoods");
    let sessionCartFoods : ICartFood[] = [];
    let collectionOrders : ICollectionOrder[] = [];
    let orders : IMakeOrder[] = [];
    let orderId = UUID4();
    let transactionId =  undefined;

    if(initialLocalStoredCartFoods) sessionCartFoods = JSON.parse(initialLocalStoredCartFoods);
    if(data.paymentMethod === PaymentMethodEnum.onlinePayment) transactionId = UUID4();
    if(sessionCartFoods.length !== 0){
        collectionOrders.push({orderId: orderId, firstName: data.firstName, lastName : data.lastName,
            companyName: data.companyName, phone : data.phone, email: data.email,
            streetAddress: data.streetAddress, notes: data.notes,
            paymentMethod: data.paymentMethod, transactionId: transactionId});
        sessionCartFoods.forEach(function (cartFood : ICartFood) {
            orders.push({orderId: orderId, foodId : cartFood.foodId, quantity: cartFood.quantity});
        });
        console.log(collectionOrders, orders);
        toast.info("Order Placed",{
            onClose: () => window.location.reload()
        });
    }
    localStorage.removeItem("cartFoods");
}