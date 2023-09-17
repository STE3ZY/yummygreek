import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem"; // Import the MenuItem component
import CartModal from "./CartModal"; // Import the CartModal component
import menuData from "./menuData.json"; // Import JSON data

import "./RestaurantMenu.css";

const RestaurantMenu = () => {
  const { dishes } = menuData;
  const [cart, setCart] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Function to open the cart modal
  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  // Function to close the cart modal
  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

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
      <div className=" flex flex-col text-sm items-center">
        <p className="range font-bold">Set max price: ${priceRange}</p>
        <input
          type="range"
          min={0}
          max={50} // Set an appropriate maximum value for the slider
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />
        <div className="filters flex justify-between items-start">
          <div className="diatery flex flex-col mr-4">
            <p className="filter-label font-bold">Dietary Preferences:</p>
            <div className="dietary-filters flex flex-col">
              <label>
                <input
                  type="checkbox"
                  checked={glutenFree}
                  onChange={() => handleDietaryChange("glutenFree")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-2"
                />
                Gluten-free
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={lactoseFree}
                  onChange={() => handleDietaryChange("lactoseFree")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-2"
                />
                Lactose-free
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={nutFree}
                  onChange={() => handleDietaryChange("nutFree")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-2"
                />
                Nut-free
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={vegan}
                  onChange={() => handleDietaryChange("vegan")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-2"
                />
                Vegan
              </label>
            </div>
          </div>
          <div className="alergens flex flex-col">
            <p className="filter-label font-bold">Allergens:</p>
            <div className="allergen-filters flex flex-col">
              <label>
                <input
                  type="checkbox"
                  checked={containsNuts}
                  onChange={() => handleAllergenChange("containsNuts")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-2"
                />
                Contains Nuts
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={containsGluten}
                  onChange={() => handleAllergenChange("containsGluten")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-2"
                />
                Contains Gluten
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={containsLactose}
                  onChange={() => handleAllergenChange("containsLactose")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-2"
                />
                Contains Lactose
              </label>
            </div>
          </div>
        </div>

        <button
          onClick={openCartModal}
          className="view-cart-button bg-blue-500 text-lg text-white rounded-full p-2"
        >
          <span className="font-bold">View</span>{" "}
          <FontAwesomeIcon
            className=""
            icon={faCartShopping}
            style={{ color: "#ffffff" }}
            size="xl"
          />{" "}
          ({cart.length})
        </button>
      </div>

      <h1 className="title-menu text-6xl text-center m-3">Our Menu</h1>
      <div className="restaurant-menu">
        {filteredDishes.map((dish) => (
          <MenuItem key={dish.id} item={dish} addToCart={addToCart} />
        ))}
      </div>
      <CartModal
        cart={cart}
        isOpen={isCartModalOpen}
        closeModal={closeCartModal}
      />
    </>
  );
};

export default RestaurantMenu;
