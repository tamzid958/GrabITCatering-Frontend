export enum PaymentMethodEnum {
    cashOnDelivery = "Cash on Delivery",
    onlinePayment = "Online Payment"
}

export interface CheckOutFormInput {
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress: string;
    phone: string;
    email: string;
    notes: string;
    paymentMethod: PaymentMethodEnum;
}

export interface QuantityFormInput{
    foodId: number,
    quantity: number
}
