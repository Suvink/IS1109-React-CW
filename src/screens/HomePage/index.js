import React, { useState, useEffect } from 'react';
import "./index.css";
import ChildComponent from './components/ChildComponent';

function HomePage(props) {

    //Declare the hooks
    const [counter, setCounter] = useState(0);
    const [secondCounter, setSecondCounter] = useState(101);

    //Handling after effects
    useEffect(() => {
        setSecondCounter(secondCounter - 1)
    }, [counter]); // bind counter as a dependancy to the useEffect

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <div className="home-section">
            <h1 className="home-title">Count: {counter}</h1>
            <h1 className="home-title">Second Count: {secondCounter}</h1>
            <button className="button is-primary" onClick={increment}>Click Me</button>

            <div className="parent-child-section mt-6">
                <ChildComponent message="It works!" />
            </div>
        </div>
    );
}

export default HomePage;