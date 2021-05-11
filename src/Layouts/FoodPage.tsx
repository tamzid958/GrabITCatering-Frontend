import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FoodDisplay from "../Components/FoodDisplay";
import DescriptionAndReview from "../Components/DescriptionAndReview";
import {Container, Typography} from "@material-ui/core";
import Foods from "../Components/Foods";
import {allFoods, getFoodInformation} from "../Data/foods";
import {Redirect, useParams} from "react-router";
import {ParamTypes} from "../Interfaces/URLParams";
import React from "react";

export default function FoodPage(){
    const { id } = useParams<ParamTypes>();
    let food = getFoodInformation(allFoods, Number(id));
    if(food === undefined) return (<Redirect to={"/"}/>);

    return (
        <div>
            <Navbar/>
            <FoodDisplay food={food}/>
            <DescriptionAndReview food={food}/>
            <Container fixed style={{ marginTop: 50 }}>
                <Typography variant="h3" style={{
                    fontWeight: "bold",
                }}>
                    Related Foods
                </Typography>
            </Container>
            <Foods foods={allFoods}/>
            <Footer/>
        </div>
    );
}