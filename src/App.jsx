import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState(""); // Държи стойността на въведеното име
  const [message, setMessage] = useState(""); // Държи съобщението за пожелание

  const handleShowMessage = () => {
    if (name.trim() === "") {
      setMessage("Моля, въведете име!"); // Валидация за празно поле
    } else {
      setMessage(
        `Весела Коледа, ${name}! Нека годината ти бъде изпълнена с щастие и здраве!`
      );
    }
  };

  return (
    <div className="container">
      <h1 className="title">🎄 Коледна Картичка 🎅</h1>
      <input
        type="text"
        className="input"
        placeholder="Въведете вашето име"
        onChange={(e) => setName(e.target.value)}
      />
      <button className="button" onClick={handleShowMessage}>
        Покажи пожеланието
      </button>
      <p className="message">Весела Коледа!</p>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default App;
