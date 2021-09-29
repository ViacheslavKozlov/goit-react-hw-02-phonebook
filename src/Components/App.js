import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PhonebookForm from "./PhonebookForm/PhonebookForm";
import PhonebookHeadline from "./PhonebookHeadline/PhonebookHeadline";
import PhonebookList from "./PhonebookList/PhonebookList";
import PhonebookListHeadline from "./PhonebookListHeadline/PhonebookListHeadline";
import PhonebookSearch from "./PhonebookSearch/PhonebookSearch";

class App extends Component {
  state = {
    contacts: [
      { id: uuidv4(), name: "Darth Vader", number: "459-12-56" },
      { id: uuidv4(), name: "Luke Skywalker", number: "443-89-12" },
      { id: uuidv4(), name: "ObiWan Kenobi", number: "645-17-79" },
      { id: uuidv4(), name: "R2 D2", number: "227-91-26" },
      { id: uuidv4(), name: "Padme Amidala", number: "123-34-67" },
      { id: uuidv4(), name: "Darth Sidius", number: "467-54-34" },
      { id: uuidv4(), name: "QuaiGon Jinn", number: "789-23-45" },
      { id: uuidv4(), name: "Boba Fett", number: "274-45-09" }
    ],
    filter: ""
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    const newContact = {
      id: uuidv4(),
      name,
      number
    };
    contacts.some(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is alredy exist`)
      : this.setState({ contacts: [...contacts, newContact] });
    // contacts.some(contact => contact.number === newContact.number)
    //   ? alert(`One of your contacts is alredy has phone number ${newContact.number} `)
    //   : this.setState({ contacts: [...contacts, newContact] });

    // const doubleNameValidate = this.state.contacts.find(contact => contact.name === newContact.name);
    // const doubleNumberValidate = this.state.contacts.find(contact => contact.number === newContact.number);

    // if (doubleNameValidate) {
    //   alert(`&{newContact.name} is already exist`);
    //   return;
    // } else if (doubleNumberValidate) {
    //   alert(`&{newContact.number} is already exist`);
    // } else {
    //   this.setState(({ contacts }) => ({ contact: [newContact, ...contacts] }));
    // }
  };

  onChangeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedInput = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedInput));
  };

  deleteContact = id => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== id) }));
  };

  render() {
    const { filter } = this.state;
    const filteredResults = this.filterContacts();
    return (
      <>
        <PhonebookHeadline title="Phonebook" />
        <PhonebookForm onSubmit={this.addContact} />
        <PhonebookListHeadline title="Contacts" />
        <PhonebookSearch value={filter} onChange={this.onChangeFilter} />
        <PhonebookList contacts={filteredResults} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}

export default App;