function Contacts({ contacts = [], onDeleteButtonClick }) {
  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button value={contact.name} onClick={onDeleteButtonClick}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Contacts;
