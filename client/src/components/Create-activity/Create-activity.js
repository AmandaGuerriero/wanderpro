import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [inputFields, setInputFields] = useState([
    { date:'', location: '', timeFrom: '', timeTo:'', notes: '' }
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ date:'', location: '', timeFrom: '', timeTo:'', notes: ''});
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
//needs to be updated
  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "date") {
      values[index].firstName = event.target.value;
    } else {
      values[index].lastName = event.target.value;
    }

    setInputFields(values);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("inputFields", inputFields);
  };

  return (
    <>
      <h1>Dynamic Form Fields in React</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="form-group flex">
                <label htmlFor="date">Date</label>
                <input
                type='text' 
                name='dateBegin' 
                id='dateBegin' 
                placeholder='Date Begin'
                  value={inputField.date}
                  onChange={event => handleInputChange(index, event)}
                />
              </div>

              <div className="form-group col-sm-4">
                <label htmlFor="location">Location</label>
                <input
                  type='text' 
                  name='location' 
                  id='location' 
                  placeholder='Address'
                  value={inputField.location}
                  onChange={event => handleInputChange(index, event)}
                />
              </div>

              <div className="form-group col-sm-4">
                <label htmlFor="timeFrom">Time starts</label>
                <input
                  type='time' 
                  name='timeFrom' 
                  id='timeFrom' 
                  placeholder='Time'
                  value={inputField.timeFrom}
                  onChange={event => handleInputChange(index, event)}
                />
              </div>

              <div className="form-group col-sm-4">
                <label htmlFor="location">Time ends</label>
                <input
                  type='time' 
                  name='timeTo' 
                  id='timeTo' 
                  placeholder='Time ends'
                  value={inputField.timeTo}
                  onChange={event => handleInputChange(index, event)}
                />
              </div>

              <div className="form-group col-sm-4">
                <label htmlFor="location">Notes</label>
                <input
                  type='text' 
                  name='notes' 
                  id='notes' 
                  placeholder='Notes'
                  value={inputField.notes}
                  onChange={event => handleInputChange(index, event)}
                />
              </div>

              <div className="form-group col-sm-2">
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleRemoveFields(index)}
                >
                  -
                </button>
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleAddFields()}
                >
                  +
                </button>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="submit-button">
          <button
            className="btn btn-primary mr-2"
            type="submit"
            onSubmit={handleSubmit}
          >
            Save
          </button>

          <p>
        <button onClick={props.prev}>Previous</button>
        <button onClick={props.next}>Next</button>
      </p>
        </div>
        <br/>
        <pre>
          {JSON.stringify(inputFields, null, 2)}
        </pre>

      </form>
    </>
  );
};


export default Create-activity;