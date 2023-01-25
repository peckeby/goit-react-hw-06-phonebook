import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { setUserName } from 'redux/nameSlice';
import { setUserNumber } from 'redux/numberSlice';
import { getContacts, getName, getNumber } from 'redux/selectors';

import {
  Form,
  FormLabel,
  FormInput,
  AddContactBtn,
} from './ContactForm.styled';

export default function ContactForm() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const number = useSelector(getNumber);
  const name = useSelector(getName);

  const fiterChange = filter => {
    return contacts.filter(contact => contact.name.includes(filter));
  };

  const onHandleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'userName':
        dispatch(setUserName(value));
        break;
      case 'userNumber':
        dispatch(setUserNumber(value));
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (contacts.length > 0 && fiterChange(name).length > 0) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact(name, number));
    }
    dispatch(setUserNumber(''));
    dispatch(setUserName(''));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="userName"
          onChange={onHandleChange}
          value={name}
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
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </Form>
  );
}
