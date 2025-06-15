import { useState } from "react";

export default function Form() {
  const [username, setUsername] = useState("");
  const [guess, setGuess] = useState("");
  const [theory, setTheory] = useState("");

  function handleSubmit(event) {
    event.preventdefault();
  }
  function handleUsername(event) {
    setUsername(event.target.value);
  }
  function handleGuess(event) {
    setGuess(event.target.value);
  }
  function handleTheory(event) {
    setTheory(event.target.value);
  }
  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Submit your theories:</legend>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsername}
            required
          />

          <label htmlFor="guess">Whodunnit?</label>
          <input
            type="text"
            name="guess"
            value={guess}
            onChange={handleGuess}
            required
          />

          <label htmlFor="theory">Theory:</label>
          <input
            type="text"
            name="theory"
            value={theory}
            onChange={handleTheory}
            required
          />

          <button type="submit">Submit!</button>
        </fieldset>
      </form>
    </>
  );
}
