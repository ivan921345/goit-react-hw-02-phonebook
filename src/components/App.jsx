import React, { Component } from 'react';
import Form from './Form';
import Contacts from './Contacts';
import shortId from 'shortid';
import Filter from './Filter';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  onDeleteButtonClick = e => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.name !== e.target.value),
    }));
  };
  onFilterInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onFormSubmit = (values, { resetForm }) => {
    console.log(values);
    for (let i = 0; i < this.state.contacts.length; i++) {
      if (
        values.name.toLowerCase() === this.state.contacts[i].name.toLowerCase()
      ) {
        alert('This contact has already been added');
        return;
      }
    }
    this.setState(({ contacts, number }) => ({
      contacts: [
        ...contacts,
        {
          id: shortId.generate(),
          name: values.name,
          number: values.number,
        },
      ],
    }));

    resetForm();
  };
  render() {
    const normalizedFiler = this.state.filter.toLowerCase();
    const filtered = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFiler)
    );
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Form onSubmit={this.onFormSubmit} />
        <Filter
          contacts={this.state.contacts}
          onFilterInputChange={this.onFilterInputChange}
        />
        <Contacts
          contacts={filtered}
          onDeleteButtonClick={this.onDeleteButtonClick}
        />
      </div>
    );
  }
}

export default App;
