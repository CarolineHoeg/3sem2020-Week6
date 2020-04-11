import React, { useState, useEffect } from 'react';
import './App.css';

function JokeHandler() {
    const [norrisJoke, setNorrisJoke] = useState([]);
    const [dadJoke, setDadJoke] = useState([]);

    const handleClick = () => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then(res => res.json())
            .then(jokes => {
                setNorrisJoke(jokes);
            });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setDadJoke(
                fetch("https://icanhazdadjoke.com/", {
                    headers: new Headers({
                        Accept: "application/json"
                    })
                })
                    .then(res => res.json())
                    .then(joke => {
                        setDadJoke(joke);
                    })
            );
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p>{norrisJoke}</p>
            <button onClick={handleClick}>
                Get ChuckNorris / Under 17 requires accompanying parent or adult
                guardian ;-)
            </button>
            <h2>New dad joke every 10 seconds: {dadJoke}</h2>
        </div>
    );
}



function App() {
    return (
        <div className="App">
            < JokeHandler />
        </div>
    );
}

export default App;