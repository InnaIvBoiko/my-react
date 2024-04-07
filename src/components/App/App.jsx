// import css from './App.css';
// import { useState } from "react";
// import ClickCounter from "../ClickCounter/ClickCounter";
// import Toggler from "../Toggler/Toggler";
import Reader from '../Reader/Reader';
// import Timer from "../Timer/Timer";

import artictes  from '../../src/articles.json';


export default function App() {
  // const [isTimerVisible, setIsTimerVisible] = useState(false);

  // const [obj, setObj] = useState({
  //   a: 0,
  //   b: 0,
  // });

  // function handleChangeObj() {
  //   setObj({
  //     ...obj,
  //     a: 5,
  //   });
  // }


  return (
    <div>
      <h1>Effects in React</h1>
      <hr />

      {/* <ClickCounter />
      <button onClick={() => setIsTimerVisible(!isTimerVisible)}>
        {isTimerVisible ? 'Hide' : 'Show'}
      </button>
    {isTimerVisible && <Timer/>}

      
      <hr /> */}

      {/* <button onClick={handleChangeObj}>Change obj state</button> */}
{/* 
      <hr />

      <Toggler />
      <Toggler />
      <Toggler />

      <hr /> */}

      <Reader items={artictes} />
    </div>
  );
}
