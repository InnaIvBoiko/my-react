import { useState, useEffect } from 'react';

const getInitialClick = () => {
    const savedClicks = localStorage.getItem('clickCount');
    return savedClicks !== null ? JSON.parse(savedClicks) : 0;
};

export default function ClickCounter() {
    // const [clicks, setClicks] = useState(() => {
    //     const savedClicks = localStorage.getItem('clickCount');
    //     // if (savedClicks !== null) {
    //     //     return JSON.parse(savedClicks);
    //     // }

    //     // return 0;
    //     return savedClicks !== null ? JSON.parse(savedClicks) : 0;
    // });
    
    const [clicks, setClicks] = useState(getInitialClick);
    const updateClicks = () => {
        setClicks(clicks + 1);
    };

    const [date, setDate] = useState(Date.now());
    const updateDate = () => {
        setDate(Date.now());
    };

    const resetClicks = () => {
        setClicks(0);
    }

    useEffect(() => {
        localStorage.setItem('clickCount', clicks)
        // localStorage.setItem('clickCount', JSON.stringify(clicks))
    }, [clicks]);

    // useEffect(() => {
    //     console.log('Hello without second argoment');
    // });

    // useEffect(() => {
    //     console.log('Hello with second argoment []')
    // }, []);

    //  useEffect(() => {
    //     console.log('Hello with second argoment [clicks]')
    //  }, [clicks]);
    
    // useEffect(() => {
    //    console.log('Hello with second argoment [date]') 
    // }, [date]);

    // useEffect(() => {
    //     console.log('hello!', clicks, date);
    // }, [clicks, date]);

    return (
        <>
            <button onClick={updateClicks}>Clicks: {clicks}</button>
            <button onClick={resetClicks}>Reset</button>
            <button onClick={updateDate}>Date: {date}</button>
        </>
    );
}