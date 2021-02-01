import React, { useState } from 'react';
import { ADD_ITINERARY } from "../../utils/mutations"
import { QUERY_ITINERARIES } from "../../utils/queries"
import { useMutation } from '@apollo/react-hooks';
import { geoCoding } from "../../utils/geocoding"

import './Createpost.css';

const CreateItinerary = (props) => {
  const [formState, setFormState] = useState({ location: '', dateBegin: '', dateEnd: '', title: '', description: ''})
  const [addItinerary, { error }] = useMutation(ADD_ITINERARY);
  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      // Get coordinate from location
      let coordinates = await geoCoding(formState.location);
      let latitude = 0,longitude =0;
      if(coordinates&&coordinates.length) {
        latitude = coordinates[0].center[1];
        longitude = coordinates[0].center[0];
        props.setLatitude(latitude);
        props.setLongitude(longitude);
      }
      console.log(latitude, longitude)
      await addItinerary({
        variables: { 
          title: formState.title, 
          location: formState.location,
          dateBegin: formState.dateBegin, 
          dateEnd: formState.dateEnd, 
          description: formState.description, 
          latitude: latitude, 
          longitude: longitude 
        }
      });

      // // clear form value
      // setTitle('');

      // setLocation('');

      // setDateBegin('');

      // setDateEnd('');
      
      // setDescription('');
      

    } catch (e) {
      console.error(e);
    }
  };
  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    })
    console.log(event.target.value)
  };
 
	return (
  <div>
		<section id="create-itinerary">
      <div className='c-create-itinerary-form'>
      <form onSubmit={handleFormSubmit}>
        <ul>
              <div className='form-group'>
                <input 
                type='text' 
                name='title' 
                id='title'
                // value={state.title}
                onChange={handleChange}/>
            </div>
         
            <div className='form-group flex'>
              <div className="icon-container">
                <div className='icon-spirit icon__location--grey'></div>
              </div>
              <div className='input-container'>
                <input 
                type='text' 
                name='location' 
                id='location' 
                placeholder='City'
                // value={state.location}
                onChange={handleChange}/>
              </div>
           </div>
            <div className='form-group flex'>
              <div className='icon-container'>
                <div className='icon-spirit icon__calendar'></div>
              </div>
              <div className='input-container'>
                <input 
                type='text' 
                name='dateBegin' 
                id='dateBegin' 
                placeholder='Date Begin'
                // value={state.dateBegin}
                onChange={handleChange}/>
              </div>
            </div>
<div className='form-group flex'>
              <div className='icon-container'>
                <div className='icon-spirit icon__calendar'></div>
              </div>
              <div className='input-container'>
                <input 
                type='text' 
                name='dateEnd' 
                id='dateEnd' 
                placeholder='Date End'
                // value={state.dateEnd}
                onChange={handleChange}/>

              </div>
            </div>
              {/* <div className='form-group'>
                <textarea 
                name='description' 
                id='description' 
                rows="4" 
                placeholder='Write a caption…'
                // value={state.description}
                onChange={handleChange}/>
            </div> */}
          
            <div className='form-group flex'>
              <div className='icon-container'>
                <div className='icon-spirit icon__photo'></div>
              </div>
            </div>
{/* 
              <div className='form-group flex'>
                <div className='icon-container'>
                  <div className='icon-spirit icon__photo'></div>
                </div>
                <div className='input-container'>
                  <input 
                  type='file' 
                  name='image_url' 
                  placeholder='+ Photo'>
                </input>
              </div>
              </div> */}
        </ul>
        <button 
                className='btn'
                onClick={handleFormSubmit}
            >
            </button>
        
        </form>
      </div>
	  </section>
  </div>
	);
}

export default CreateItinerary;