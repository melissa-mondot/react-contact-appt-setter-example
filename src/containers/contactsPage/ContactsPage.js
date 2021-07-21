import React, { useState, useEffect } from "react";

export const ContactsPage = ({ ...props }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName("");
    setPhone("");
    setEmail("");
  }, [props.contactNames]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addContact(name, phone, email);
    // duplications avoided by using name as object key
  };
  console.log(name, phone, email);
  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            required
            name="name"
            autoFocus
            placeholder="firstName lastName"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Phone:</label>
          <input
            required
            name="phone"
            type="tel"
            placeholder="555-555-5555"
            onChange={(e) => setPhone(e.target.value)}
          />
          <label>Email:</label>
          <input
            required
            name="email"
            type="email"
            placeholder="name@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Submit Contact</button>
        </form>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
