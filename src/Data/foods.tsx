import Pizza from "../Assets/images/pizza-pizza-filled-with-tomatoes-salami-olives.jpg";
import {IFood, IRating} from "../Interfaces/DataInterfaces";
import {toast} from "react-toastify";
import publicIP from 'public-ip';
export const allFoods: IFood[] = foods();


function foods(): IFood[] {
    let id: number = 1;
    let foodArray : IFood[] = [];
    for(let i =0; i< 12; i++){
        foodArray.push(createFood(id++, Pizza,
            'Classic Margherita Pizza 12″', 349.00, 5 , true,"" +
            "Grab the all-new crispy crunch; minced beef all over and now, bashed with more cheese to " +
            "give you foodgasm in every bite. Grab your Ozy crunch, now!",
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

export async function giveFoodRating(foodId: number, rating: number): Promise<IRating> {
    let raterIP: string = await publicIP.v4({
        fallbackUrls: [
            'https://ifconfig.co/ip'
        ]
    });
    if (rating === 5) {
        toast.success("Hooray! You loved our art! 🥰");
    } else if (rating === 4) {
        toast.info("Happy to hear that you are satisfied! 😊");
    } else if (rating === 3) {
        toast.warning("Sorry, upcoming food will be yummy! 🥺");
    } else if (rating === 2) {
        toast.error("Next time your mood will be best! 😔");
    } else if (rating === 1) {
        toast.dark("Don't go away. We want you to smile! 😭");
    }
    console.log(foodId, rating, raterIP);
    return {foodId, rating, raterIP};
}