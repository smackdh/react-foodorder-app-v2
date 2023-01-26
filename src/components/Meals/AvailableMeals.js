import React, { useEffect } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import firebase from "../firebase/firebase";

const AvailableMeals = () => {
  const url = "https://react-http-c8445-default-rtdb.firebaseio.com/meals";

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(url).then();
      const data = await response.json();

      const mealsArray = [];

      for (const key in data) {
        mealsArray.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
    };
    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
