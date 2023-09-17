import React from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

Modal.setAppElement("#root");

const CartModal = ({ cart, isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "400px",
          margin: "0 auto",
          textAlign: "center",
        },
      }}
    >
      <div className="mb-4">
        <FontAwesomeIcon
          className=""
          icon={faCartShopping}
          style={{ color: "#000000" }}
          size="xl"
        />
      </div>
      <ul>
        {cart.map((cartItem, index) => (
          <li key={index}>
            {cartItem.name}
            {" $"}
            {cartItem.price}
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-center items-center">
        <button className="bg-green-500 rounded-full text-xl text-white font-bold p-4 mt-4 mb-4">
          Confirm Order
        </button>
        <button
          onClick={closeModal}
          className="bg-red-500 w-20 rounded-full text-lg text-white  mt-4"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default CartModal;
