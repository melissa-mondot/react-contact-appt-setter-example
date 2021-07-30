import React from "react";

export const AppointmentForm = ({
  contacts,
  contactNames,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  const getTimeString = new Date().toLocaleTimeString("en-US", {
    hour12: false,
  });
  const optionList = contactNames.map((name) => <option key={name}>{name}</option>);

  return (
    <>
      <form name="appointmentForm" onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            required
            autoFocus
            placeholder="Meeting Goal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Contact:
          <select
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          >
            {/* generated contact name list here */}
            {optionList}
          </select>
        </label>
        <label>
          Date:
          <input
            required
            type="date"
            value={getTodayString() || date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Time:
          <input
            required
            type="time"
            value={getTimeString || time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <button>Submit Contact</button>
      </form>
    </>
  );
};
