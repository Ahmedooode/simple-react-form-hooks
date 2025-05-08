import "./App.css";
import { useState } from "react";
import Popup from "./popup";
import MyInput from "./MyInput";
function App() {
  const [myFormInput, setMyFormInput] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salary: "",
  });
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handelSubmit = (event) => {
    event.preventDefault();
    const ageNum = Number(myFormInput.age);
    const phoneLength = myFormInput.phoneNumber.trim().length;
    if (ageNum < 18 || ageNum > 60) {
      setPopupMessage("Age must be between 18 and 60.");
      setShowPopup(true);
      return;
    }
    if (phoneLength > 12) {
      setPopupMessage("Phone number must be 12 digits or less. ");
      setShowPopup(true);
      return;
    }
    setPopupMessage("Form submitted successfully!");
    setShowPopup(true);
  };
  function handelmyInputNameChange(value) {
    setMyFormInput({ ...myFormInput, name: value });
  }

  function handelmyInputPhoneNumberChange(value) {
    setMyFormInput({ ...myFormInput, phoneNumber: value });
  }

  function handelmyInputAgeChange(value) {
    setMyFormInput({ ...myFormInput, age: value });
  }

  return (
    <div className="App">
      <form className="form-container" onSubmit={handelSubmit}>
        <h1>Requesting a Loan</h1>
        <hr />

        <MyInput
          value={myFormInput.name}
          handelChange={handelmyInputNameChange}
          inputName="name : "
        />

        <MyInput
          value={myFormInput.phoneNumber}
          handelChange={handelmyInputPhoneNumberChange}
          inputName="Phone Number : "
        />

        <MyInput
          value={myFormInput.age}
          inputName=" Age : "
          handelChange={handelmyInputAgeChange}
        />

        <label className="label">Are you an employee?</label>
        <input
          value={myFormInput.isEmployee}
          onChange={(event) => {
            setMyFormInput({
              ...myFormInput,
              isEmployee: event.target.checked,
            });
          }}
          className="checkbox"
          type="checkbox"
        />

        <label className="label">Salary</label>
        <select
          value={myFormInput.salary}
          onChange={(event) => {
            setMyFormInput({ ...myFormInput, salary: event.target.value });
          }}
          className="input"
        >
          <option>less than 500$</option>
          <option>500$ - 1000$</option>
          <option>more than 1000$</option>
        </select>

        <button
          disabled={
            myFormInput.name == "" ||
            myFormInput.age == "" ||
            myFormInput.phoneNumber == ""
          }
          className="submit-button"
        >
          Submit
        </button>
      </form>
      {showPopup && (
        <Popup message={popupMessage} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}

export default App;
