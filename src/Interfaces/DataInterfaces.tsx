export interface IFood {
    id: number,
    img: string,
    category: string,
    categoryId: number,
    title: string,
    price: number,
    avgReview: number,
    available: boolean
}

export interface IFoodCategory{
    id: number,
    img: string,
    title: string,
    subtitle: string,
}