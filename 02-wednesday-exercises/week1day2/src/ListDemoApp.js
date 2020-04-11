import React, { useState } from "react";
import './App.css';

function NumberList({ numbers }) {
  console.log("--NUMBERS -->", numbers);
  const listItems = numbers.map(n => <ListItem key={n} value={n} />);
  return <ul> {listItems}</ul>;
}

function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberTable({ numbers }) {
  const createRow = numbers.map(n => <CreateRow key={n} value={n} />);
  return (
    <table>
      <thead>
        <tr>
          {createRow}
        </tr>
      </thead>
    </table>
  );
}

function CreateRow(props) {
  return <th>{props.value}</th>
}

function ListDemo(props) {
  console.log(props.numbers)
  return (
    <div>
      <h2>All numbers passed in via props</h2>
      <NumberList numbers={props.numbers} />
    </div>
  );
}
export default function App() {
  const [numbers] = useState([1, 2, 3, 4]);
  return (
    <div>
      <ListDemo numbers={numbers} />
      <NumberTable numbers={numbers} />
    </div>
  );
}
