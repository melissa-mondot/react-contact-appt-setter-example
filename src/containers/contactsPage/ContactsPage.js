import React, { useState } from "react";
import { TileList } from "../../components/tileList/TileList";
import { ContactForm } from "../../components/contactForm/ContactForm";

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

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          newName={newName}
          setNewName={setNewName}
          newPhone={newPhone}
          setNewPhone={setNewPhone}
          newEmail={newEmail}
          setNewEmail={setNewEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={props.contacts} />
      </section>
    </div>
  );
};
