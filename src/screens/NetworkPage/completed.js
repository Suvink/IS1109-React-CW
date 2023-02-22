import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./index.css";

function NetworkPage(props) {

    const [jokes, setJokes] = useState([]);

    const getJokes = () => {
        axios.get("https://v2.jokeapi.dev/joke/Any?type=single&amount=10").then(response => {
            console.log(response.data.jokes);
            setJokes(response.data.jokes)
        }).catch(error => {
            console.log(error)
        });
    }

    useEffect(() => {
        getJokes();
    }, []);


    return (
        <div>
            <center>
                <h1 className='network-title'>Networking with Axios</h1>

                <ol>
                    {
                        jokes.length !== 0 ?
                            jokes.map((joke) => {
                                return <li>{joke.joke}</li>
                            })
                            : null
                    }
                </ol>

            </center>
        </div>
    );
}

export default NetworkPage;