import ItemContact from 'components/ItemContact/ItemContact';
import { Item } from './ListContacts.styled';
import { List } from './ListContacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/selector';
import { deleteContact } from 'redux/contactsSlice';

const ListContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <ItemContact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={() => {
              dispatch(deleteContact(contact.id));
            }}
          />
        </Item>
      ))}
    </List>
  );
};

export default ListContacts;
