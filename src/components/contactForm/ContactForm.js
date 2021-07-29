import React from "react";

export const ContactForm = ({
  newName,
  setNewName,
  newPhone,
  setNewPhone,
  newEmail,
  setNewEmail,
  handleSubmit,
}) => {
  return (
    <>
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
            // TODO: regex for ph
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
    </>
  );
};
