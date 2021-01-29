import { PersonSharp } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card';
import database from "./firebase";
import "./TinderCards.css";


function TinderCards() {
    // this is the same as people = []
    // it's just we're renaming the way we want to reset this state
    // that's the fundamental core of react – changing states of components
    const [people, setPeople] = useState([]);
    // setPeople([...people,"sanni","kozi"]);
    // runs something based on condition
    // empty brackets mean that it'll only run once
    // if there is something in it then it updates every time the variable inside changes
    // onSnapshot – think of it as taking a picture of a database
    // setPeople updates const people
    // we map each doc (with autokey) and then spit out its data
    // that data is esentially object with key, value pairs being name: "sth" and url: "sth"
    // you want assign a constant that'll update database content BEFORE useEffect happens
    // and you do that by return() => {unsubscribe()} so that it updates before we execute the listener
    // we can call unsubscribe because database.collection is a function which we assigned to unsubscribed variable
    useEffect(() => {
        const unsubscribe = database.collection('people').onSnapshot(snapshot => 
            setPeople(snapshot.docs.map(person => person.data()))
        );

        return () => {
            unsubscribe();
        }

    }, [people]);
    
    // always add key to component because it allows react to efficiently re-render list
    return (
        <div>
            <div class="tinder-cards-container">
                {people.map(person => (
                    <TinderCard 
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    >
                        <div 
                        className="card"
                        style={{ backgroundImage: `url(${person.url})`}}
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards;