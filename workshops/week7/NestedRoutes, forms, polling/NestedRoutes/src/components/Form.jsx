import { useState } from "react";

export function Form() {
  const [username, setUsername] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleUsername(event) {
    setUsername(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={handleUsername}
      />
      <p>Current value is: {username}</p>
      <button type="submit">Submit!</button>
    </form>
  );
}
