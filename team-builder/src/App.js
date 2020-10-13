import React, { useState } from "react";
import logo from "./logo.svg";
import Member from "./Member";
import Team from "./TeamForm";
import axios from "./axios";
import "./App.css";

const initialFormValues = {
  // Text Inputs //
  memberName: "",
  email: "",
  // DropDown //
  role: "",
};
// backend engineer, frontend engineer, designer

const memberList = [
  {
    memberName: "Justin",
    memberEmail: "justinmavity1021@gmail.com",
    memberRole: "backend engineer",
  },
];
function App() {
  // Member state
  const [members, setMembers] = useState([]);

  // State to hold all values of the form
  const [formValues, setFormValues] = useState(initialFormValues);

  // Function used to update the form
  const updateForm = (inputName, inputValue) => {
    // Sets the values of the form using setFormValues
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };
  // Function used to submit and save values that were passed on the user on the form
  const submitForm = () => {
    // Creates a new team member object
    const newMember = {
      memberName: formValues.memberName.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    axios
      .post("myapi.com", newMember)
      .then((res) => {
        setMembers([...members, res.data]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="container">
        <h1>Team Member Data Sheet</h1>
        <Team values={formValues} update={updateForm} submit={submitForm} />

        {members.map((member) => {
          return <Member key={member.id} details={member} />;
        })}
      </div>
    </div>
  );
}

export default App;
