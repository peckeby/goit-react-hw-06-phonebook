import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

import {
  FormLabel,
  FormInput,
} from 'components/ContactForm/ContactForm.styled';

export default function SearchBar() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onHandleChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <FormLabel>
      Find contacts by name
      <FormInput
        type="search"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filter}
        onChange={onHandleChange}
      />
    </FormLabel>
  );
}
