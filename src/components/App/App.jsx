 import { useState } from 'react';

import LangSwitcher from '../LangSwitcher/LangSwitcher.jsx';
import OrderForm from '../OrderForm/OrderForm.jsx';
import TextInput from '../TextInput/TextInput';
import UserForm from '../UserForm/UserForm.jsx';

import css from './App.module.css';

export default function App() {
  // for UserForm
  const handleAddUser = (newUser) => {
    // console.log('handleAddUser');
    console.log('handleAddUser', newUser);
  };

  // for OrderForm
  const makeOrder = (newOrder) => {
    console.log('makeOrder', newOrder);
  };

  const [inputValue, setInputValue] = useState('');
  const [lang, setLang] = useState('uk');


  return (
    <div className={css.container}>
      <h1>Forms in React</h1>
      <UserForm onSubmit={handleAddUser} />
      <TextInput value={inputValue} onChange={setInputValue} />
      <p>Text: {inputValue}</p>
      <LangSwitcher value={lang} onChange={setLang} />
      <p>Selected {lang}</p>
      <OrderForm onOrder={makeOrder} />
    </div>
  );
}
