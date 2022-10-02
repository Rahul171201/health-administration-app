import React, { useState, useEffect } from "react";
import styles from '../../styles/Patient.module.css';
import Sidebar from "../../components/Sidebar";

const ProductDisplay = () => (
  <div className={styles.mainBox}>
    <div className={styles.productBox}>
      <div className={styles.imageBox}>
        <img src="/payment.jpg" alt="payment" className={styles.paymentImage}></img>
      </div>
      <div className={styles.description}>
        <h3>Appointment with Dr. Mukesh Kishore</h3>
        <h5>Dermatologist</h5>
        <div>Amount to be paid : Rs 2000</div>
      </div>
      <form action="http://localhost:3000/api/server/create-checkout-session" method="POST">
        <button type="submit" className={styles.paymentButton}>
          Checkout
        </button>
      </form>
    </div>
    <div className={styles.sidebarBox}>
      <Sidebar type="patient"></Sidebar>
    </div>
  </div>

);

const Message = ({ message }) => (
  <section className={styles.body}>
    <p>{message}</p>
  </section>
);

export default function Payment() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}