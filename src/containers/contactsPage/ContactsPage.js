import React, { useState } from "react";
import { TileList } from "../../components/tileList/TileList";
import { Tile } from "../../components/tile/Tile";

export const ContactsPage = ({ ...props }) => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addContact();
    setNewName("");
    setNewPhone("");
    setNewEmail("");
  };

  const addContact = () => {
    let names = props.contactNames();
    names.includes(newName)
      ? alert("Contact name already exists.") // TODO: needs something more slick than an alert
      : props.addContact(newName, newPhone, newEmail);
  };

  // const contactTiles = () => {
  //   ;
  // };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <form name="newContactForm" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              required
              autoFocus
              placeholder="firstName lastName"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </label>
          <label>
            Phone:
            <input
              required
              type="tel"
              placeholder="555-555-5555"
              value={newPhone}
              onChange={(e) => setNewPhone(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              required
              type="email"
              placeholder="name@email.com"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </label>
          <button>Submit Contact</button>
        </form>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList />
        {props.contacts.map((contact) => (
          <Tile
            key={contact.name}
            name={contact.name}
            phone={contact.phone}
            email={contact.email}
          />
        ))}
      </section>
    </div>
  );
};
