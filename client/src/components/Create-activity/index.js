import React, { useState, useReducer, Fragment } from "react";
import ReactDOM from "react-dom";
import { useMutation } from '@apollo/react-hooks';
import { ADD_ACTIVITY } from '../../utils/mutations';
import { QUERY_ITINERARIES } from '../../utils/queries';
import './Create-activity.css';


const CreateAcitivty = () => {
  const [formObject, setFormObject ] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const [notes, setNotes] = useState('');

  // const [userInput, setUserInput] = useReducer(
  //   (state, newState) => ({...state, ...newState}),
  //   {
  //     location: '',
  //     timeFrom: '',
  //     timeTo: '',
  //     notes: ''
  //   }
  // );
  
  const handleChange = event => {
    const {name, value } = event.target
    setFormObject({...formObject, [name]:value })
    console.log(value)
  }

  const [addActivity, { error }] = useMutation(ADD_ACTIVITY, {
    update(cache, { data: {addActivity} }) {
      try {
        const { activities } = cache.readQuery({ query: ADD_ACTIVITY });
        cache.writeQuery({
          query: QUERY_ITINERARIES,
          data: { activities: [ADD_ACTIVITY, ...activities] }
        });
      } catch (e) {
        console.log(e)
      }
    }
  })


  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await addActivity({
        variables:  {location, timeFrom, timeTo, notes}
      }) 
      console.log('hello')   
      setLocation('');
      setTimeFrom('');
      setTimeTo('');
      setNotes('')
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <>
      <h1>Dynamic Form Fields in React</h1>
      <form onSubmit={handleFormSubmit}>
        {/* <div className="input-container">
          <label htmlFor='date'>Date</label>
          <input
          type='text'
          name='date'
          id='date'
          placeholder='Date'
          value={state.date}
          onChange={handleChange} />
        </div> */}


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
        </div>
      </form>
    </>
  );
};

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default CreateAcitivty;