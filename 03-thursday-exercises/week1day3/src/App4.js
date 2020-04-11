import React, { useState } from "react";
import "./App.css";
import uuid from "uuid/v1";
import NewName from "./NewNames";
import NamesList from "./NamesList";
import NamesTable from "./NamesTable";

function App() {
    const initialData = [
        { id: uuid(), name: "Peter" },
        { id: uuid(), name: "Ole" },
        { id: uuid(), name: "Jan" }
    ];

    const [names, setNames] = useState(initialData);
    const [newName, setNewName] = useState({ id: "", name: "" });
    console.log(names);

    const addName = name => {
        if (name.id === "") {
            name.id = uuid();
            names.push(name);
        } else {
        let nameToEdit = names.find(n => n.id === name.id);
        nameToEdit.name = name.name;
      }
        setNames([...names]);
        setNewName({ id: "", name });
    };

    const deleteName = id => {
        setNames(names.filter(n => n.id !== id));
      };
    
      const editName = id => {
        setNewName({ id: id, name: "" });
      };

    return (
        <div className="App">
            <h1>Lifting state up 2</h1>
            <h3>Total Persons: {names.length}</h3>
            {/* <NamesList names={names} /> */}
            <NamesTable names={names} deleteName={deleteName} editName={editName}/>
            <br />
            <NewName addName={addName} nextName={newName} />
        </div>
    );
}

export default App;