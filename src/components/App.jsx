import { useSelector } from 'react-redux';

import { getContacts } from '../redux/selectors';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Section from './Section/Section';
import SearchBar from './SearchBar/SearchBar';

import { GlobalStyle } from './GlobalStyles';
import { Container } from './Container/Container.styled';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <>
      <Container>
        <Section title="Phonebook" />
        <Section title="Contacts">
          <ContactForm />
          {contacts.length > 0 && (
            <>
              <SearchBar />
              <ContactList />
            </>
          )}
        </Section>
      </Container>
      <GlobalStyle />
    </>
  );
};
