function Keypad() {
  function handleChange(event) {
    console.log("Entering password...");
  }
  return (
    <div>
      <form>
        <input onChange={handleChange} type="password"></input>
      </form>
    </div>
  );
}

export default Keypad;
