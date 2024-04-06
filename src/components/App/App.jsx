// import css from './App.css';
import { useState } from "react";
import ClickCounter from "../ClickCounter/ClickCounter";
import Toggler from "../Toggler/Toggler";
import Reader from '../Reader/Reader';

import artictes  from '../../src/articles.json';


// const ClickCounter = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Clicks: {clicks}</button>;
// }

export default function App() {

  const [clicks, setClicks] = useState(0);

  const [obj, setObj] = useState({
    a: 0,
    b: 0,
  });

  function handleChangeObj() {
    setObj({
      ...obj,
      a: 5,
    });
  }

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  // const [a, setA] = useState(0);

  // const handleA = () => {
    // setA(a + 1);
  // }

  // const [clicksA, setClicksA] = useState(0);
  // const [clicksB, setClicksB] = useState(0);
  // const [clicksC, setClicksC] = useState(0);
  // const [text, setText] = useState('Hello');

  // const handleClickA = () => {
  //   setClicksA(clicksA + 1);
  // };

  //   const handleClickB = () => {
  //   setClicksB(clicksB + 1);
  //   };
  
  //   const handleClickC = () => {
  //   setClicksC(clicksC + 1);
  // };

  // const handleClick1 = () => {
  //   console.log('Hello!')
  // };

  // const handleClick2 = (event) => {
  //   console.log('Hello!')
  //   console.log(event);
  // };

  // const handleClick3 = (mes) => {
  //   console.log('Hello!')
  //   console.log(mes);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Hello form submit!');
  // };

  return (
    <div>
      <h1>State in React</h1>
      <hr />

      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      
      <hr />

      <button onClick={handleChangeObj}>Change obj state</button>

      <hr />

      <Toggler />
      <Toggler />
      <Toggler />

      <hr />

      <Reader items={artictes} />


      {/* <button onClick={handleClickA}>A: {clicksA}</button>
      <button onClick={handleClickB}>B: {clicksB}</button>
      <button onClick={handleClickC}>C: {clicksC}</button> */}

      {/* <button onClick={handleA}>{a}</button> */}
      {/* <input type="text" onChange={(event) => setText(event.target.value)}/>
      <p>{text}</p> */}

{/* 
      <button onClick={handleClick1}>Click me 1!</button>
      <button onClick={handleClick2}>Click me 2!</button>
      <button onClick={() => handleClick3('this is arg')}>Click me 3!</button> */}
    
      {/* <form onSubmit={handleSubmit}>
        <button>Submit</button>
      </form> */}

    </div>
  );
}
