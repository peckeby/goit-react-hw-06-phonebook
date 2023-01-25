import ContactsItem from 'components/ContactItem/ContactIttem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import { ListContacts } from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const fiterChange = contacts => {
    return contacts.filter(contact => contact.name.includes(filter));
  };

  return (
    <ListContacts>
      {filter === ''
        ? contacts.map(contact => (
            <ContactsItem contact={contact} key={contact.id} />
          ))
        : fiterChange(contacts).map(contact => (
            <ContactsItem contact={contact} key={contact.id} />
          ))}
    </ListContacts>
  );
}
