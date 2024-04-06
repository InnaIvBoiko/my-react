// import { useState } from 'react';

export default function ClickCounter({value, onUpdate}) {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

    return <button onClick={onUpdate}>Clicks: {value}</button>;
    // return <button onClick={handleClick}>Clicks: {clicks}</button>;
}