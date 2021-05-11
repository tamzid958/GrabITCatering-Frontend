import Pizza from "../Assets/images/pizza-pizza-filled-with-tomatoes-salami-olives.jpg";
import {IFood} from "../Interfaces/DataInterfaces";

export const allFoods: IFood[] = foods();


function foods(): IFood[] {
    let id: number = 1;
    let foodArray : IFood[] = [];
    for(let i =0; i< 12; i++){
        foodArray.push(createFood(id++, Pizza,
            'Classic Margherita Pizza 12″', 349.00, 5 , true,"" +
            "Grab the all-new crispy crunch; minced beef all over and now, bashed with more cheese to give you foodgasm in every bite. Grab your Ozy crunch, now!",
            'Pizza', 1));
    }
    return foodArray;

}

function createFood(id: number, img: string,  title: string, price: number, avgReview: number,
                    available: boolean, description: string, categoryName: string, categoryId: number): IFood {
    return { id, img, title, price, avgReview, available, description, categoryName, categoryId};
}

export function getFoodInformation(foods: IFood[], id: number) {
    return foods.find(e => e.id === id);
}

export function getCategorizedFoodInformation(foods: IFood[], categoryId: number) {
    return foods.filter(e => e.categoryId === categoryId);
}