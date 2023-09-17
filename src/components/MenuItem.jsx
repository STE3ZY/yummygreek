import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faFilter } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import closeModal from "../images/close.svg";
import "./MenuItem.css";

const MenuItem = ({ item, addToCart }) => {
  Modal.setAppElement("#root");

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleAddToCart = () => {
    addToCart(item); // Call the addToCart function from props
    handleCloseModal(); // Close the modal after adding to cart
  };

  return (
    <>
      <div className="menu-item flex flex-col">
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
            <div className="flex  justify-center mb-6">
              <p className="item-price bg-opacity-75 bg-gray-900 rounded p-2 text-white text-lg font-bold ">
                Price: ${item.price.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button
            className="z50 bg-green-500 rounded-full mb-4  mr-6 p-2 text-white font-bold "
            onClick={handleOpenModal}
          >
            Details
          </button>
          <button
            className="z50 bg-blue-500 rounded-full mb-4 p-2 text-white font-bold "
            onClick={handleAddToCart}
          >
            Add
            <FontAwesomeIcon
              className=""
              icon={faCartShopping}
              style={{ color: "#ffffff" }}
              size="xl"
            />
          </button>
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            backgroundColor: "#101010",
            color: "#9f9f9f",
            padding: "60px",
            display: "flex",
            flexDirection: "column",
            width: "400px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
          },
        }}
      >
        <img
          src={closeModal}
          className="closeMenu closeModal"
          onClick={handleCloseModal}
          alt="Close"
        ></img>
        <h3 className="dishTitle font-bold">{item.name}</h3>
        <p className="dishDescription">{item.description}</p>
        <div>
          <p className="font-bold text-center text-white">Ingredients:</p>
          <div>
            {item.ingredients.map((ingredient, index) => (
              <span key={index}>
                {ingredient}
                {index < item.ingredients.length - 1 && ", "}
              </span>
            ))}
          </div>
        </div>
        <button
          className="rounded-full bg-blue-500 mt-4 font-bold text-white h-10"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </Modal>
    </>
  );
};

export default MenuItem;
