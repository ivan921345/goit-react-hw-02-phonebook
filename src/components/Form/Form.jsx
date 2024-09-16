function Form({ onChange, onSubmit, onNumberInputChange }) {
  return (
    <form onSubmit={onSubmit}>
      Name
      <input type="text" name="name" required onChange={onChange} />
      Number
      <input type="tel" name="number" required onChange={onNumberInputChange} />
      <button type="submit">Add contact</button>
    </form>
  );
}

export default Form;
