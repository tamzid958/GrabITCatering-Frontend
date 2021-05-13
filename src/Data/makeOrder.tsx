import {ICartFood, ICollectionOrder, IMakeOrder} from "../Interfaces/DataInterfaces";
import {toast} from "react-toastify";
import { v4 as UUID4 } from 'uuid';
import {CheckOutFormInput, PaymentMethodEnum} from "../Interfaces/FormInterfaces";
export function makeOrder(data : CheckOutFormInput, subTotal : number){
    let initialLocalStoredCartFoods =  localStorage.getItem("cartFoods");
    let sessionCartFoods  : ICartFood[] = [];
    let collectionOrders : ICollectionOrder[] = [];
    let orders : IMakeOrder[] = [];
    let orderId = UUID4();
    let transactionId =  undefined;

    if(initialLocalStoredCartFoods) sessionCartFoods = JSON.parse(initialLocalStoredCartFoods);
    if(data.paymentMethod === PaymentMethodEnum.onlinePayment) {
        transactionId = UUID4();
    }
    if(sessionCartFoods.length !== 0){
        orders.push(createOrder(orderId, data.firstName, data.lastName, data.companyName, data.phone,  data.email,
            data.streetAddress, data.paymentMethod, subTotal,  data.notes, transactionId));
        sessionCartFoods.forEach(function (cartFood : ICartFood) {
            collectionOrders.push(createCollectionOder(orderId, cartFood.i, cartFood.q));
        });
        console.log(collectionOrders, orders);
        toast.info("Order Placed. Check Your Mail.",{
            onClose: () => window.location.reload()
        });
    }
    localStorage.removeItem("cartFoods");
}

function createOrder(orderId: string, firstName: string, lastName: string, companyName: string, phone : string,
                     email: string, streetAddress: string, paymentMethod: string, subTotal: number, notes?: string,
                     transactionId?: string): IMakeOrder{
    return {orderId, firstName, lastName, companyName, phone, email, streetAddress, paymentMethod, subTotal,
        notes, transactionId};
}

function createCollectionOder(orderId: string, foodId: number, quantity: number): ICollectionOrder{
    return {orderId, foodId, quantity};
}