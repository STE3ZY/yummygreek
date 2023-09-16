import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faFilter } from "@fortawesome/free-solid-svg-icons";
import "./MenuItem.css";

const MenuItem = ({ item }) => {
  const [showIngredients, setShowIngredients] = useState(false);

  const toggleIngredients = () => {
    setShowIngredients(!showIngredients);
  };
  const dietaryPreferences =
    item.tags && item.tags.dietaryPreferences
      ? item.tags.dietaryPreferences.join(", ")
      : "Not specified";

  const allergens =
    item.tags && item.tags.allergens
      ? item.tags.allergens.join(", ")
      : "Not specified";

  return (
    <div className="menu-item">
      <div className="item-container relative">
        <img
          src={item.image}
          alt={item.name}
          className="item-image m-4 rounded-lg"
        />
        <div className="main-description absolute inset-0 flex flex-col justify-between items-center text-center">
          <h3 className="item-name bg-opacity-50 bg-gray-900 rounded p-2 text-white text-3xl font-extrabold mt-4">
            {item.name}
          </h3>
          {/*<p className="text-sm mb-2">{item.description}</p>*/}
          <div className="flex  justify-center mb-6">
            <p className="item-price bg-opacity-75 bg-gray-900 rounded p-2 text-white text-lg font-bold ">
              Price: ${item.price.toFixed(2)}
            </p>
            <button>
              <FontAwesomeIcon
                className="bg-red-900 rounded ml-4 p-2"
                icon={faCartShopping}
                style={{ color: "#ffffff" }}
                size="xl"
              />
            </button>
          </div>

          {/* <button
          onClick={toggleIngredients}
          type="button"
          className="ing-button rounded-md m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white"
        >
          {showIngredients ? "Hide Ingredients" : "View Ingredients"}
        </button>
        {showIngredients && (
          <div>
            <p className="font-bold">Ingredients:</p>
            <div>
              {item.ingredients.map((ingredient, index) => (
                <span key={index}>
                  {ingredient}
                  {index < item.ingredients.length - 1 && ", "}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
       <div>Dietary Preferences: {dietaryPreferences}</div>
      <div>Allergens: {allergens}
              */}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
