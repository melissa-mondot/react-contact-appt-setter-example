import React, { useState, useEffect } from "react";
import { TileList } from "../../components/tileList/TileList";
import { Tile } from "../../components/tile/Tile";

export const ContactsPage = ({ ...props }) => {
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const createContact = () => {
    let name = document.newContactForm.newName.value;
    let phone = document.newContactForm.newPhone.value;
    let email = document.newContactForm.newEmail.value;
    let newContact = { name, phone, email };
    return newContact;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newContact = await createContact();
    props.addContact(newContact);
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <form name="newContactForm" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            required
            name="newName"
            autoFocus
            placeholder="firstName lastName"
            onChange={updateInput}
            value={formData.newName || ""}
          />
          <label>Phone:</label>
          <input
            required
            name="newPhone"
            type="tel"
            placeholder="555-555-5555"
            onChange={updateInput}
            value={formData.newPhone || ""}
          />
          <label>Email:</label>
          <input
            required
            name="newEmail"
            type="email"
            placeholder="name@email.com"
            onChange={updateInput}
            value={formData.newEmail || ""}
          />
          <button>Submit Contact</button>
        </form>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList>
          <Tile />
        </TileList>
      </section>
    </div>
  );
};
