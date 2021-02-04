import React, { useState } from 'react';
import { ADD_ITINERARY } from "../../utils/mutations";
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import './CreateItinerary.css';

const CreateItinerary = (props) => {
  const [formState, setFormState] = useState({ location: '', dateBegin: '', dateEnd: '', title: '', description: '' })
  const [addItinerary, { error, data }] = useMutation(ADD_ITINERARY)
  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const data = await addItinerary({
        variables: {
          title: formState.title,
          location: formState.location,
          dateBegin: formState.dateBegin,
          dateEnd: formState.dateEnd,
          description: formState.description,
        }
      });

      localStorage.setItem('itineraryId', data.data.addItinerary._id);
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
  };

  return (
    <div>
      <section id="create-itinerary">
        <h1 className="page-header">
          Create Your Itinerary
    </h1>
        <div className='c-create-itinerary-form'>
          <form className="itinerary-form" onSubmit={handleFormSubmit}>
            <ul>
              <div className='form-group'>
                <input
                  type='text'
                  name='title'
                  id='title'
                  placeholder='Itinerary Name'
                  // value={state.title}
                  onChange={handleChange} />
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
                    onChange={handleChange} />
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
                    onChange={handleChange} />
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
                    onChange={handleChange} />

                </div>
              </div>
              <div className='form-group'>
                <textarea 
                className="itinerary-text"
                name='description' 
                id='description' 
                rows="4" 
                placeholder='Write a caption…'
                onChange={handleChange}/>
            </div>
            <div className='form-group flex'>
              <div className='icon-container'>
                <div className='icon-spirit icon__photo'></div>
              </div>
            </div>
        </ul>
        <button 
          className='btn itinerary-submit'
          onClick={handleFormSubmit}
        >
          <Link to={"/activity"}>
          Submit
          </Link>
        </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default CreateItinerary;