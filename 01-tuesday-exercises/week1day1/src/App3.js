import React from 'react';
import PropTypes from 'prop-types';
import {names} from './file2';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

Welcome.propTypes = {
    name: PropTypes.string
};

function WelcomePerson(props) {
    return <h1>Hello, {props.person.firstName} {props.person.lastName}, {props.person.email}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
            <Welcome />
            <Welcome name={45} />
            {/* <WelcomePerson person={names[0]} />
            <WelcomePerson person={names[1]} />
            <WelcomePerson person={names[2]} /> */}
            {names.map((p)=><WelcomePerson person={p}/>)}
        </div>
    );
}

export default App;
