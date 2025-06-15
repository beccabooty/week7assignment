export default function Form() {
  function handleSubmit(event) {
    event.preventdefault();
  }
  return (
    <>
      <h1>Form</h1>
      <form>
        <fieldset>
          <legend>Title of Form</legend>
          <label htmlFor="">Username:</label>
          <input type="text" />
          <label htmlFor="">Whodunnit?</label>
          <input type="text" />
          <label htmlFor="">Theory:</label>
          <input type="text" />
        </fieldset>
      </form>
    </>
  );
}
