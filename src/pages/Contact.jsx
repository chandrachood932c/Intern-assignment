import React, { useState, useEffect } from "react";
import "./app.css";
import { db } from "../firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const contactsRef = collection(db, "contacts");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      // Add data to Firestore
      try {
        await addDoc(contactsRef, {
          name: name,
          email: email,
          message: message,
        });
        alert("Your message has been submitted👍");
      } catch (error) {
        alert(error.message);
      }
    
      setName("");
      setEmail("");
      setMessage("");
    };
  

  return (
    <div className="min-h-screen relative m-20 p-20">
        <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us 🤳</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        onClick={handleSubmit}
        type="submit"
      >
        Submit
      </button>
    </form>
    </div>
    
  );
};




export default Contact;