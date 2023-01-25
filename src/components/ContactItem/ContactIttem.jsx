import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const {
  ListContactsItem,
  DeleteBtn,
} = require('components/ContactList/ContactList.styled');

export default function ContactsItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = evt => {
    const itemId = evt.currentTarget.parentNode.getAttribute('id');
    dispatch(deleteContact(itemId));
  };

  return (
    <ListContactsItem name={contact.name} id={contact.id} key={contact.id}>
      <p>
        {contact.name}: {contact.tel}
      </p>
      <DeleteBtn type="button" onClick={handleDelete}>
        Delete
      </DeleteBtn>
    </ListContactsItem>
  );
}
