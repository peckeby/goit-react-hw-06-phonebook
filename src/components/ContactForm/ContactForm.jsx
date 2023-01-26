import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

import {
  Form,
  FormLabel,
  FormInput,
  AddContactBtn,
} from './ContactForm.styled';

export default function ContactForm() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const [userNumber, setUserNumber] = useState('');
  const [userName, setUserName] = useState('');

  const fiterChange = filter => {
    return contacts.filter(contact => contact.name.includes(filter));
  };

  const onHandleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'userName':
        setUserName(value);
        break;
      case 'userNumber':
        setUserNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (contacts.length > 0 && fiterChange(userName).length > 0) {
      alert(`${userName} is already in contacts.`);
    } else {
      dispatch(addContact(userName, userNumber));
    }
    setUserNumber('');
    setUserName('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="userName"
          onChange={onHandleChange}
          value={userName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel>
        Phone
        <FormInput
          type="tel"
          name="userNumber"
          onChange={onHandleChange}
          value={userNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </Form>
  );
}
