import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contacts</h2>
      {contacts.length === 0 ? (
        <p className={styles.empty}>No contacts found</p>
      ) : (
        <ul className={styles.list}>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
    </div>
  );
}
