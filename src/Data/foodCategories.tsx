import PizzaVariant from "../Assets/images/pizza-pizza-filled-with-tomatoes-salami-olives.jpg";
import BurgerVariant from "../Assets/images/pexels-jonathan-ochoa-7007929.jpg";
import MealVariant from "../Assets/images/pexels-rachel-claire-5490822.jpg";
import PastaVariant from "../Assets/images/pexels-ella-olsson-3026808.jpg";
import AppetizerVariant from "../Assets/images/pexels-valeria-boltneva-1893555.jpg";
import { IFoodCategory} from "../Interfaces/DataInterfaces";

export const allFoodCategories: IFoodCategory[] = foodCategories();

function foodCategories(): IFoodCategory[] {
    let id: number = 1;
    let foodCategoryArray : IFoodCategory[] = [];

    foodCategoryArray.push(createFoodCategory(id++, PizzaVariant, 'PIZZA', 'Click here to find \n your fav toppings!'));
    foodCategoryArray.push(createFoodCategory(id++, BurgerVariant, 'BURGERS', 'Grab your kind of burgers,\n now!'));
    foodCategoryArray.push(createFoodCategory(id++, PastaVariant, 'PASTA', 'For your baked cheese \n cravings!'));
    foodCategoryArray.push(createFoodCategory(id++, MealVariant, 'MEALS', 'Be it midday. or night, \n you deserve it!'));
    foodCategoryArray.push(createFoodCategory(id++, AppetizerVariant, 'APPETIZERS', 'Ordering your meal? \n Try these, too!'));

    return foodCategoryArray;

}

function createFoodCategory(id: number, img: string, title: string, subtitle: string) : IFoodCategory{
    return {id, img, title, subtitle};
}

export function getFoodCategoryInformation(foodCategories: IFoodCategory[], id: number){
    return foodCategories.find(e => e.id === id);
}