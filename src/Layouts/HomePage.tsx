import Navbar from "../Components/Navbar";
import FoodCategories from "../Components/FoodCategories";
import Foods from "../Components/Foods";
import { Hidden, Typography } from "@material-ui/core";
import Footer from "../Components/Footer";
import VideoCover from "../Components/VideoCover";
import {allFoods} from "../Data/foods";
import React from "react";
import {allFoodCategories} from "../Data/foodCategories";

export default function HomePage(){
    return(
    <div>
        <Navbar/>
        <FoodCategories foodCategories={allFoodCategories}/>
        <Typography variant="h3" align="center" style={{
            marginTop: 50,
            fontWeight: "bolder",
            fontStyle: "italic"
        }}>
            Browse Foods
        </Typography>
        <Foods foods={allFoods}/>
        <Hidden only={['sm', 'md', 'xs']}>
            <VideoCover/>
        </Hidden>
        <Footer/>
    </div>
    );
}