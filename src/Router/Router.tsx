import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import HomePage from "../Layouts/HomePage";
import FoodPage from "../Layouts/FoodPage";
import CartPage from "../Layouts/CartPage";
import CheckoutPage from "../Layouts/CheckoutPage";
import CategorizedFoodPage from "../Layouts/CategorizedFoodPage";

export default function GrabitRouter(){
  return(
      <Router>
          <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/food/:id" component={FoodPage}/>
              <Route exact path="/categories/:id" component={CategorizedFoodPage}/>
              <Route exact path="/cart" component={CartPage}/>
              <Route exact path="/checkout" component={CheckoutPage}/>
              <Route path="*" component={HomePage}/>
          </Switch>
      </Router>
  )
}