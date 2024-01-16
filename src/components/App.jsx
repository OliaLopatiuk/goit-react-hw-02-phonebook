import { Component } from "react";
import { nanoid } from 'nanoid'
import {ContactForm} from './ContactForm/ContactForm'
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

     addContact = (name, number) => {

     const check = this.state.contacts.findIndex(contact => contact.name.toLowerCase() === name.toLowerCase());


       if(!!~check) {
        alert(`${name} is already in contacts`);
        return
        }

       const newContact = {
        id: nanoid(),
       name,
       number
      }

      this.setState(prevState => ({contacts: [...prevState.contacts, newContact]}));
       }

  deleteContact = (id) => {
    this.setState(prevState => ({contacts: prevState.contacts.filter(contact => contact.id !== id)}));
  }


  handleChange = (e) => {
    this.setState({filter: e.currentTarget.value})
    }

    getFilteredContacts = () => {
      const normalizedFilter = this.state.filter.toLocaleLowerCase();
      return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    }

  render() {
  
    const filteredContacts = this.getFilteredContacts();

    return <div><h1>Phonebook</h1><ContactForm onSubmit={this.addContact}/>
    <h2>Contacts</h2>
    <Filter onChange={this.handleChange}></Filter>
    <ContactList contacts={filteredContacts} onClick = {this.deleteContact}></ContactList>
    </div>;
  }
};
