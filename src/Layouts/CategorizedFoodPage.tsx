import {Container, Typography} from "@material-ui/core";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Foods from "../Components/Foods";
import {allFoods, getCategorizedFoodInformation} from "../Data/foods";
import {Redirect, useParams} from "react-router";
import {ParamTypes} from "../Interfaces/URLParams";
import {allFoodCategories, getFoodCategoryInformation} from "../Data/foodCategories";
import React from "react";
import {IFood} from "../Interfaces/DataInterfaces";

export default function CategorizedFoodPage(){
    let { id } = useParams<ParamTypes>();
    let categorizedFoods : IFood[] = [];
    let foodCategory = getFoodCategoryInformation(allFoodCategories, Number(id));
    if(foodCategory === undefined) return (<Redirect to={"/"}/>);
    categorizedFoods = getCategorizedFoodInformation(allFoods, foodCategory.id);
    console.log(categorizedFoods);
    return(
        <div>
            <Navbar/>
            <Container fixed style={{ marginTop:50 }}>
                {(categorizedFoods.length === 0) ?
                    <Typography variant="h3" style={{
                        textAlign: "center",
                        fontStyle: "italic",
                        marginBottom: "25%"
                    }}>No food available in this category</Typography>
                    :<Foods foods={categorizedFoods}/>
                }
            </Container>
            <Footer/>
        </div>
    );
}