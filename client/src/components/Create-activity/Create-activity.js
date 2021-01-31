import React, { useState, useReducer, Fragment } from "react";
import ReactDOM from "react-dom";
import { useMutation } from '@apollo/react-hooks';
import { ADD_ACTIVITY } from '../../utils/mutations';
import { QUERY_ITINERARIES } from '../../utils/queries';

import './Create-activity.css';


const CreateActivity = (props) => {
  const [formState, setFormState] = useState({ location: '', timeFrom: '', timeTo: '', notes: '', itineraryId: ''})
  const [addActivity, { error }] = useMutation(ADD_ACTIVITY);
  
  const handleFormSubmit = async event => {
    event.preventDefault();
    console.log(formState)
    try {
      await addActivity({
        variables: {
          location: formState.location,
          date: formState.date,
          timeFrom: formState.timeFrom,
          timeTo: formState.timeTo,
          notes: formState.notes,
          itineraryId: formState.itineraryId
        }
      })
      console.log(addActivity)
    } 
    catch(e){
      console.log(e);
    }
  };

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
          <label htmlFor='itID'>Itinerary ID</label>
          <input
          type='text'
          name='itineraryId'
          id='itineraryId'
          placeholder='Enter An ID for your Itinerary'
          onChange={handleChange} />
        </div>
      
        <div className="input-container">
          <label>Date</label>
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

export default CreateActivity;