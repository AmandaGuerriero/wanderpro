import React, { useState } from 'react';
import { ADD_ITINERARY } from "../../utils/mutations"
import { QUERY_ITINERARIES } from "../../utils/queries"
import { geoCoding } from "../../utils/geocoding"
import { useMutation } from '@apollo/react-hooks';
import './Createpost.css';

const CreateItinerary = (props) => {

  const [addItinerary, { error }] = useMutation(ADD_ITINERARY, {
    update(cache, { data: { addItinerary } }) {
      try {
         // update thought array's cache
         // could potentially not exist yet, so wrap in a try/catch
        const { posts } = cache.readQuery({ query: QUERY_ITINERARIES });
        cache.writeQuery({
          query: QUERY_ITINERARIES,
          data: { posts: [ADD_ITINERARY, ...posts] }
        });
      } catch (e) {
        console.error(e);
      }
    }
  })

  // submit form
  const handleFormSubmit = async event => {
    let title = props.getState("title", "")
    let location = props.getState("location", "")
    let dateBegin = props.getState("dateBegin", "")
    let dateEnd = props.getState("dateEnd", "")
    let description = props.getState("description", "")
    event.preventDefault();
    
    try {
      // Get coordinate from location
      let coordinates = await geoCoding(props.getState("title", ""));
      let latitude = 0,longitude =0;
      if(coordinates&&coordinates.length) {
        latitude = coordinates[0].center[1];
        longitude = coordinates[0].center[0];
        props.setLatitude(latitude);
        props.setLongitude(longitude);
      }
      const mutationResponse = await addItinerary({
        variables: { title, location, dateBegin, dateEnd, description, latitude, longitude }
      });

      // clear form value
      // setTitle('');

      // setLocation('');

      // setDateBegin('');

      // setDateEnd('');
      
      // setDescription('');
      

    } catch (e) {
      console.error(e);
    }
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
                value={props.getState("title", "")}
                onChange={props.handleChange}/>
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
                value={props.getState("location", "")}
                onChange={props.handleChange}/>
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
                value={props.getState("dateBegin", "")}
                onChange={props.handleChange}/>
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
                value={props.getState("dateEnd", "")}
                onChange={props.handleChange}/>
              </div>
            </div>
              <div className='form-group'>
                <textarea 
                name='description' 
                id='description' 
                rows="4" 
                placeholder='Write a caption…'
                value={props.getState("description", "")}
                onChange={props.handleChange}/>
            </div>
          
            <div className='form-group flex'>
              <div className='icon-container'>
                <div className='icon-spirit icon__photo'></div>
              </div>
            </div>

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
              </div>
        </ul>
        {/* <div className="flex-row flex-end">
          <button type="submit">
            Submit
          </button>
        </div> */}
        </form>
      </div>
	  </section>
  </div>
	);
}

export default CreateItinerary;