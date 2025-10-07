import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search contacts..."
        />
      </label>
    </div>
  );
}
