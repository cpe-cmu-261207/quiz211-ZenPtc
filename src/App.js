import { useState } from "react";

const Table = ({ name, gender, age }) => {
  return (
    <>
      <table class="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>{name}</td>
            <td>{gender}</td>
            <td>{age}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

function App() {
  const [count, setCount] = useState(620610794);
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    },
    {
      name: "Naruporn Powthongchin 620610794",
      gender: "female",
      age: "20"
    }
  ];
  return (
    <div class="ml-2">
      <h3 class="title is-3">Person List</h3>
      {/* Convert me to a component! */}
      {persons.map((person) => (
        <Table name={person.name} gender={person.gender} age={person.age} />
      ))}

      {/* Code me please! */}
      <h3 class="title is-3">ID Counter</h3>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(620610794);
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
