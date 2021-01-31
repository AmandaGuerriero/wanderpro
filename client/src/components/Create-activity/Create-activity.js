import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";
const CreateActivity = (props) => {
  const [inputFields, setInputFields] = useState([
    { date: '', location: '', timeFrom: '', timeTo:'', notes:''   }
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ date: '', location: '', timeFrom: '', timeTo:'', notes:''  });
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "date") {
      values[index].date = event.target.value;
    } else {
      values[index].location = event.target.value;
      values[index].timeFrom = event.target.value;
      values[index].timeTo = event.target.value;
      values[index].notes.location = event.target.value;
    }

    setInputFields(values);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("inputFields", inputFields);
  };

  return (
    <>
      <h1>Add Activitiy</h1>
      <div className='c-create-itinerary-form'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="form-group col-sm-4">
                <label htmlFor="location">Date</label>
                <input
                  type="text" 
                  className="form-control" 
                  id="date"
                  name="date"
                  value={inputField.location}
                  onChange={event => handleInputChange(index, event)}
                />
              </div>
                
    
              <div className="form-group col-sm-4">
                <label htmlFor="location">Location</label>
                <input
                  type="address" 
                  className="form-control" 
                  id="location"
                  name="location"
                  value={inputField.location}
                  onChange={event => handleInputChange(index, event)}
                />
              </div>

              <div className="form-group col-sm-4">
                <label htmlFor="location">Start Time</label>
                <input
                  type="time" 
                  className="form-control" 
                  id="timeFrom"
                  name="timeFrom"
                  value={inputField.timeFrom}
                  onChange={event => handleInputChange(index, event)}
                />
              </div>

              <div className="form-group col-sm-4">
                <label htmlFor="location"> End Time</label>
                <input
                  type="time" 
                  className="form-control" 
                  id="timeTo"
                  name="timeTo"
                  value={inputField.timeTo}
                  onChange={event => handleInputChange(index, event)}
                />
              </div>

               <div className="form-group col-sm-4">
                <label htmlFor="location"> Notes</label>
                <input
                  type="text" 
                  className="form-control" 
                  id="notes"
                  name="notes"
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
        </div>
        <br/>
        <pre>
          {JSON.stringify(inputFields, null, 2)}
        </pre>
      </form>
      </div>
    </>
  );
};



export default CreateActivity;
