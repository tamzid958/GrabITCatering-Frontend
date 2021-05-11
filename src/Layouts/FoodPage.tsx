import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FoodDisplay from "../Components/FoodDisplay";
import DescriptionAndReview from "../Components/DescriptionAndReview";
import {Container, Typography} from "@material-ui/core";
import Foods from "../Components/Foods";
import {allFoods, getFoodInformation, getCategorizedFoodInformation} from "../Data/foods";
import {Redirect, useParams} from "react-router";
import {ParamTypes} from "../Interfaces/URLParams";
import React from "react";
import {IFood} from "../Interfaces/DataInterfaces";

export default function FoodPage(){
    const { id } = useParams<ParamTypes>();
    let relatedFoods : IFood[] = [];
    let food = getFoodInformation(allFoods, Number(id));
    if(food === undefined) return (<Redirect to={"/"}/>);

    relatedFoods = getCategorizedFoodInformation(allFoods, food.categoryId);

    return (
        <div>
            <Navbar/>
            <FoodDisplay food={food}/>
            <DescriptionAndReview food={food}/>
            {(relatedFoods.length > 0)?
                <div>
                    <Container fixed style={{ marginTop: 50 }}>
                        <Typography variant="h3" style={{
                            fontWeight: "bold",
                        }}>
                            Related Foods
                        </Typography>
                    </Container>
                    <Foods foods={relatedFoods}/>
                </div>: null
            }
            <Footer/>
        </div>
    );
}