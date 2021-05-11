import Pizza from "../Assets/images/pizza-pizza-filled-with-tomatoes-salami-olives.jpg";
import {IFood} from "../Interfaces/DataInterfaces";

export const allFoods: IFood[] = foods();


function foods(): IFood[] {
    let id: number = 1;
    let foodArray : IFood[] = [];
    for(let i =0; i< 12; i++){
        foodArray.push(createFood(id++, Pizza, 'Pizza', 1,
            'Classic Margherita Pizza 12″', 349.00, 5 , true));
    }
    return foodArray;

}

function createFood(id: number, img: string, category: string,
                    categoryId: number, title: string, price: number,
                    avgReview: number, available: boolean): IFood {
    return { id, img, category, categoryId, title, price, avgReview, available };
}

export function getFoodInformation(foods: IFood[], id: number) {
    return foods.find(e => e.id === id);
}

export function getCategorizedFoodInformation(foods: IFood[], categoryId: number) {
    return foods.filter(e => e.categoryId === categoryId);
}