import React, { useState, useReducer, Fragment } from "react";
import ReactDOM from "react-dom";
import { ADD_ACTIVITY } from '../../utils/mutations';
import { QUERY_ITINERARIES } from '../../utils/queries';
import { useMutation } from '@apollo/react-hooks';
import './Create-activity.css';


const CreateAcitivty = () => {
  const [formState, setFormState] = useState({ location: '', timeFrom: '', timeTo: '', notes: '', itineraryId: ''})
  const addActivity = useMutation(ADD_ACTIVITY);
  
  const handleFormSubmit = async event => {
    event.preventDefault();
    const mutationResponse = await addActivity({
      varibles: {
        location: formState.location,
        timeFrom: formState.timeFrom,
        timeTo: formState.timeTo,
        notes: formState.notes,
        itineraryId: formState.itineraryId
      }
    });
  }

  const handleChange = event => {
    const {name, value} = event.target;
    setFormState({
      ...formState,
      [name]:value
    })
  }

  return (
    <>
      <h1>Dynamic Form Fields in React</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="input-container">
          <label htmlFor='date'>Date</label>
          <input
          type='text'
          name='date'
          id='date'
          placeholder='Date'
          onChange={handleChange} />
        </div>


        <div className="input-container">
          <label>Location</label>
          <input
          type='text'
          name='location'
          id='location'
          placeholder='Location'
          onChange={handleChange} />
        </div>

        <div className="input-container">
          <label>Start Time</label>
          <input
          type='text'
          name='timeFrom'
          id='timeFrom'
          placeholder='Start Time'
          onChange={handleChange} />
        </div>

        <div className="input-container">
          <label>End Time</label>
          <input
          type='text'
          name='timeTo'
          id='timeTo'
          placeholder='End Time'
          onChange={handleChange} />
        </div>

        <div className="input-container">
          <label>Notes</label>
          <textarea
          type='text'
          name='notes'
          id='notes'
          placeholder='Enter Any Notes'
          onChange={handleChange} />
        </div>

        <div className="input-container">
          <label>Itinerary ID</label>
          <textarea
          type='text'
          name='itineraryId'
          id='itinderaryId'
          placeholder='Enter An ID for your Itinerary'
          onChange={handleChange} />
        </div>

        <div className="flex-row flex-end">
          <button type="submit">
            Submit
          </button>

          <p>
        <button onClick={props.prev}>Previous</button>
        <button onClick={props.next}>Next</button>
      </p>
        </div>
      </form>
    </>
  );
};

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default CreateAcitivty;