import {Contact, Button, ListItem} from './ContactList.styled'

const ContactList = ({contacts, onClick}) => (

<div><ul>
      {contacts.map(contact =><ListItem key={contact.id}><Contact><span>{contact.name}:</span><span>{contact.number}</span><Button type="button" onClick = {()=>(onClick(contact.id))}>×</Button></Contact></ListItem>)}
      </ul></div>
);

export default ContactList;

