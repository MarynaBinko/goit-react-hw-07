import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filterSlice';
import styles from "./SearchBox.module.css";



const SearchBox = () => {
  const dispatch=useDispatch();
  const filter =useSelector(selectNameFilter);

  const handleChange=(event)=>{
    dispatch(changeFilter(event.target.value));
  };
  
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input type="text" value={filter} onChange={handleChange} className={styles.input}/>
    </div>
  )
}

export default SearchBox


