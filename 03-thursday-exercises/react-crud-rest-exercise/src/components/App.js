import React, { useState, useEffect } from "react";
import AddEditPerson from "./AddEditPerson";
import AllPersons from "./AllPersons";


function App({apiFacade}) {
  const emptyPerson = { id: "", age: "", name: "", email: "", gender: "" };
  const [personToAddEdit, setPersonToAddEdit] = useState(emptyPerson);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    async function fetchData() {
    let data = await apiFacade.getPersons();
    setPersons(data);
    }
    fetchData();
  }, []);

  const storeAddEditPerson = async (person) => {
    let data = await apiFacade.addEditPerson(person);
    if (person.id.length <= 0) {
      setPersons([...persons, data]);
    } else {
      let personsList = persons.map((p) => p.id === data.id ? data : p);
      setPersons(personsList);
    }
  }

  const deletePerson = async (id) => {
    await apiFacade.deletePerson(id);
    let data = await apiFacade.getPersons();
    setPersons(data);
  }

  const editPerson = (person) => {
    setPersonToAddEdit(person);
  }


  return (
    <div className="container">
      <div className="row">
        <h3>CRUD Demo </h3>
        <div className="col-md-7">
          <h3>All Persons</h3>
          <AllPersons
            persons={persons}
            editPerson={editPerson}
            deletePerson={deletePerson}
          />
        </div>
        <div className="col-md-5">
          <h3 style={{ textAlign: "center" }}>Add Persons</h3>
          <AddEditPerson
            newPerson={personToAddEdit}
            addEditPerson={storeAddEditPerson}
            key={personToAddEdit.id}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
