import React, { useState, useReducer, Fragment } from "react";
import { useMutation } from '@apollo/react-hooks';
import { ADD_ACTIVITY } from '../../utils/mutations';

import './Create-activity.css';


const CreateActivity = (props) => {
  const [formState, setFormState] = useState({ location: '', timeFrom: '', timeTo: '', notes: '', itineraryId: ''})
  const [addActivity, { error }] = useMutation(ADD_ACTIVITY);
  const itineraryId = localStorage.getItem("itineraryId");
  
  
  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      await addActivity({
        variables: {
          name: formState.name,
          location: formState.location,
          date: formState.date,
          timeFrom: formState.timeFrom,
          timeTo: formState.timeTo,
          notes: formState.notes,
          itineraryId: itineraryId
        }
      })
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
    <section id="create-activity">
    <div className="create-activity-form">

      <form className = "activity-form" onSubmit={handleFormSubmit}> 
      <h3>Activity Info</h3>
      <div className="activity-input-container">
          <input
          type='text'
          name='name'
          id='name'
          placeholder='Enter the activity name'
          onChange={handleChange} />
        </div>

      
        <div className="activity-input-container">
          <input
          type='text'
          name='date'
          id='date'
          placeholder='Date'
          onChange={handleChange} />
        </div>

        <div className="activity-input-container">
          <input
          type='text'
          name='location'
          id='location'
          placeholder='Location'
          onChange={handleChange} />
        </div>

        <div className="activity-input-container">
          <input
          type='text'
          name='timeFrom'
          id='timeFrom'
          placeholder='Start Time'
          onChange={handleChange} />
        </div>

        <div className="activity-input-container">
          <input
          type='text'
          name='timeTo'
          id='timeTo'
          placeholder='End Time'
          onChange={handleChange} />
        </div>

        <div className="activity-input-container">
          <textarea
          className="activity-text"
          type='text'
          name='notes'
          id='notes'
          placeholder='Enter Any Notes'
          onChange={handleChange} />
        </div>

        <button className="btn activity-submit">
          Submit
        </button>
      </form>
    </div>
    </section>
    </>
  );
};

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default CreateActivity;