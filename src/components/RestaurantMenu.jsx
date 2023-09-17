import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem"; // Import the MenuItem component
import menuData from "./menuData.json"; // Import JSON data

import "./RestaurantMenu.css";

const RestaurantMenu = () => {
  const { dishes } = menuData;

  // State variables for dietary preferences
  const [glutenFree, setGlutenFree] = useState(false);
  const [lactoseFree, setLactoseFree] = useState(false);
  const [nutFree, setNutFree] = useState(false);
  const [vegan, setVegan] = useState(false);

  // State variables for allergens
  const [containsNuts, setContainsNuts] = useState(false);
  const [containsGluten, setContainsGluten] = useState(false);
  const [containsLactose, setContainsLactose] = useState(false);

  const [priceRange, setPriceRange] = useState(40); // Initial price range

  // Function to handle changes in dietary preferences
  const handleDietaryChange = (preference) => {
    switch (preference) {
      case "glutenFree":
        setGlutenFree(!glutenFree);
        break;
      case "lactoseFree":
        setLactoseFree(!lactoseFree);
        break;
      case "nutFree":
        setNutFree(!nutFree);
        break;
      case "vegan":
        setVegan(!vegan);
        break;
      default:
        break;
    }
  };

  // Function to handle changes in allergens
  const handleAllergenChange = (allergen) => {
    switch (allergen) {
      case "containsNuts":
        setContainsNuts(!containsNuts);
        break;
      case "containsGluten":
        setContainsGluten(!containsGluten);
        break;
      case "containsLactose":
        setContainsLactose(!containsLactose);
        break;
      default:
        break;
    }
  };

  // Function to filter dishes based on selected preferences, allergens, and price range
  const filterDishes = (dish) => {
    return (
      (!glutenFree || dish.tags.includes("gluten-free")) &&
      (!lactoseFree || dish.tags.includes("lactose-free")) &&
      (!nutFree || dish.tags.includes("nut-free")) &&
      (!vegan || dish.tags.includes("vegan")) &&
      (!containsNuts || !dish.tags.includes("contains-nuts")) &&
      (!containsGluten || !dish.tags.includes("contains-gluten")) &&
      (!containsLactose || !dish.tags.includes("contains-lactose")) &&
      dish.price <= priceRange
    );
  };

  // Filtered dishes based on preferences, allergens, and price range
  const filteredDishes = dishes.filter(filterDishes);

  return (
    <>
      <div className="filters flex flex-col text-sm items-center">
        <p className="range font-bold">Set max price: ${priceRange}</p>
        <input
          type="range"
          min={0}
          max={50} // Set an appropriate maximum value for the slider
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />
        <p className="filter-label font-bold">Dietary Preferences:</p>
        <div className="dietary-filters">
          <label>
            Gluten-free
            <input
              type="checkbox"
              checked={glutenFree}
              onChange={() => handleDietaryChange("glutenFree")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-2"
            />
          </label>
          <label>
            Lactose-free
            <input
              type="checkbox"
              checked={lactoseFree}
              onChange={() => handleDietaryChange("lactoseFree")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-2"
            />
          </label>
          <label>
            Nut-free
            <input
              type="checkbox"
              checked={nutFree}
              onChange={() => handleDietaryChange("nutFree")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-2"
            />
          </label>
          <label>
            Vegan
            <input
              type="checkbox"
              checked={vegan}
              onChange={() => handleDietaryChange("vegan")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-2"
            />
          </label>
        </div>
        <p className="filter-label font-bold">Allergens:</p>
        <div className="allergen-filters">
          <label>
            Contains Nuts
            <input
              type="checkbox"
              checked={containsNuts}
              onChange={() => handleAllergenChange("containsNuts")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-2"
            />
          </label>
          <label>
            Contains Gluten
            <input
              type="checkbox"
              checked={containsGluten}
              onChange={() => handleAllergenChange("containsGluten")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-2"
            />
          </label>
          <label>
            Contains Lactose
            <input
              type="checkbox"
              checked={containsLactose}
              onChange={() => handleAllergenChange("containsLactose")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-2"
            />
          </label>
        </div>
      </div>

      <h1 className="title-menu text-6xl text-center m-3">Our Menu</h1>
      <div className="restaurant-menu">
        {filteredDishes.map((dish) => (
          <MenuItem key={dish.id} item={dish} />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
