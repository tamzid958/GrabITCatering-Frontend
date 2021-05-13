export interface IFood {
    id: number,
    img: string,
    title: string,
    price: number,
    avgReview: number,
    available: boolean,
    description: string,
    categoryName: string,
    categoryId: number,
}

export interface IFoodCategory{
    id: number,
    img: string,
    title: string,
    subtitle: string,
}

//shortname for storing data into local storage
export interface ICartFood{
    i: number, //id
    q: number //quantity
}

export interface IFakeFood{
    foodId: number,
    title: string,
    price: number,
    quantity: number,
}
export interface ICollectionOrder{
    orderId : string,
    foodId: number,
    quantity: number,
}

export interface  IMakeOrder{
    orderId: string,
    firstName: string,
    lastName: string,
    companyName?: string,
    streetAddress: string,
    phone: string,
    email: string,
    notes?: string,
    paymentMethod: string,
    subTotal: number,
    transactionId?: string,
}

export interface IRating{
    foodId: number,
    rating: number,
    raterIP: string,
}