import React, { useState, useReducer, Fragment } from "react";
import ReactDOM from "react-dom";
import { ADD_ACTIVITY } from '../../utils/mutations';
import { QUERY_ITINERARIES } from '../../utils/queries';
import { useMutation } from '@apollo/react-hooks';
import './Create-activity.css';
// import "bootstrap/dist/css/bootstrap.css";

// function reducer(state, { field, value }) {
//   return {
//     ...state,
//     [field]: value
//   }
// }

const CreateAcitivty = () => {
  const [state, setState ] = useState('');

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      date: '',
      location: '',
      timeFrom: '',
      timeTo: '',
      notes: ''
    }
  );
  
  const handleChange = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;

    setUserInput({[name]: newValue});
    console.log(newValue)
  }

  const [addActivity, {error}] = useMutation(ADD_ACTIVITY, {
    update(cache, { data: {addActivity} }) {
      try {
        const { posts } = cache.readQuery({ query: ADD_ACTIVITY });
        cache.writeQuery({
          query: QUERY_ITINERARIES,
          data: { posts: [ADD_ACTIVITY, ...posts] }
        });
      } catch (e) {
        console.log(e)
      }
    }
  })


  const handleSubmit = e => {
    e.preventDefault();
    console.log("inputFields");
  };

  return (
    <>
      <h1>Dynamic Form Fields in React</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor='date'>Date</label>
          <input
          type='text'
          name='date'
          id='date'
          placeholder='Date'
          value={state.date}
          onChange={handleChange} />
        </div>


        <div className="input-container">
          <label>Location</label>
          <input
          type='text'
          name='location'
          id='location'
          placeholder='Location'
          value={state.location}
          onChange={handleChange} />
        </div>

        <div className="input-container">
          <label>Start Time</label>
          <input
          type='text'
          name='timeFrom'
          id='timeFrom'
          placeholder='Start Time'
          value={state.timeFrom}
          onChange={handleChange} />
        </div>

        <div className="input-container">
          <label>End Time</label>
          <input
          type='text'
          name='timeTo'
          id='timeTo'
          placeholder='End Time'
          value={state.timeTo}
          onChange={handleChange} />
        </div>

        <div className="input-container">
          <label>Notes</label>
          <textarea
          type='text'
          name='notes'
          id='notes'
          placeholder='Enter Any Notes'
          value={state.notes}
          onChange={handleChange} />
        </div>
      </form>
    </>
  );
};

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default CreateAcitivty;