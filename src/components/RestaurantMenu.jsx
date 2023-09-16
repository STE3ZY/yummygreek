import React from "react";
import MenuItem from "./MenuItem"; // Import the MenuItem component
import menuData from "./menuData.json"; // Import JSON data
import "./RestaurantMenu.css";

const RestaurantMenu = () => {
  const { dishes } = menuData;

  return (
    <>
      <h1 className="text-5xl text-center m-3">Our Menu</h1>
      <div className="restaurant-menu ">
        {dishes.map((dish) => (
          <MenuItem key={dish.id} item={dish} />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
