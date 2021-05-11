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