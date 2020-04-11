import React from 'react';
import person, { males, females } from './file2';

function App() {
    const { firstName, email } = person;
    const personV2 = person;
    personV2.friends = [...males, ...females];
    personV2.phone = 123456;

    return (
        <div>
            <p>{firstName} {email}</p>
            {console.log([...males, ...females])}
            {console.log([...males, firstName, "Helle", ...females, "Tina"])}
            {console.log(personV2)}
        </div>
    );
}

export default App;