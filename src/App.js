import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import Drink from "./DrinkItem"
import DrinkMenu from "./DrinkMenu"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  // const [drinks, setDrinks] = useState([]);

  // useEffect(() => {
  //   async function getDrinks() {
  //     let drinks = await SnackOrBoozeApi.getDrinks();
  //     setDrinks(drinks);
  //     setIsLoading(false);
  //   }
  //   getDrinks();
  // }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>

            <Route exact path="/">
              <Home snacks={snacks} />
            </Route>
            <Route exact path="/snacks">
              <Menu snacks={snacks} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>

            {/* <Route exact path="/">
              <Home drinks={drinks} />
            </Route>
            <Route exact path="/drinks">
              <DrinkMenu drinks={drinks} title="drinks" />
            </Route>
            <Route path="/drinks/:id">
              <Drink items={drinks} cantFind="/drinks" />
              </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route> */}

          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}



export default App;