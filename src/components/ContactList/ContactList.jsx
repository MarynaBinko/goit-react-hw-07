import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoading, selectError, selectFilteredContacts } from '../../redux/contactsSlice';
import { fetchContacts } from '../../redux/contactsOps';
import Contact from '../Contact/Contact';
import styles from "./ContactList.module.css";




const ContactList = () => {
  const dispatch=useDispatch();
  const contacts=useSelector(selectFilteredContacts);
  const loading=useSelector(selectLoading);
  const error=useSelector(selectError);

  useEffect(()=>{
    dispatch(fetchContacts())
  },[dispatch]);

if(loading){
  return <p>Loading...</p>;
}

if (error){
  return <p>Error:{error}</p>;
}
  return (
   <ul className={styles.list}>
    {contacts.map(contact=>(
      <li key={contact.id}>
      <Contact id={contact.id} name={contact.name} number={contact.number}/>
      </li>
    ))
    }
   </ul>
  );
}

export default ContactList
