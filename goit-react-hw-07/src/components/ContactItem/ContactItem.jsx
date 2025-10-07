import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import styles from './ContactItem.module.css';

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <span className={styles.name}>{contact.name}</span>
        <span className={styles.number}>{contact.number}</span>
      </div>
      <button
        className={styles.button}
        type="button"
        onClick={handleDelete}
        aria-label={`Delete ${contact.name}`}
      >
        Delete
      </button>
    </li>
  );
}
