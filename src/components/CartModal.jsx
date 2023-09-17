import React from "react";
import Modal from "react-modal";

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
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((cartItem, index) => (
          <li key={index}>{cartItem.name}</li>
        ))}
      </ul>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default CartModal;
