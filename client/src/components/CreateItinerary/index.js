import React, { useState } from 'react';
import { ADD_ITINERARY } from "../../utils/mutations"
import { QUERY_ITINERARIES } from "../../utils/queries"
import { useMutation } from '@apollo/react-hooks';
import './Createpost.css';

const CreateItinerary = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [dateBegin, setDateBegin] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [description, setDescription] = useState('');
  // const [characterCount, setCharacterCount] = useState(0);
  const [state, setState] = React.useState({
    title: "",
    location: "",
    dateBegin: "",
    dateEnd: "",
    description: "",
  })

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

  // update me object's cache
  // const { me } = cache.readQuery({ query: QUERY_ME });
  // cache.writeQuery({
  //   query: QUERY_ME,
  //   data: { me: { ...me, posts: [...me.posts, addPost] } }
  // });
  //   }
  // });

  // update state based on form input changes
 

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const mutationResponse = await addItinerary({
        variables: { title, location, dateBegin, dateEnd, description }
      });

      // clear form value
      setTitle('');

      setLocation('');

      setDateBegin('');

      setDateEnd('');

      setDescription('');

    } catch (e) {
      console.error(e);
    }
  };

  // const handleChange = event => {
  //   const { setTitle, value } = event.target;
  //   setFormState({
  //     ...formState,
  //     [name]: value
  //   });
  // };

  // const handleChange = event => {
  //   if (event.target.value.length <= 280) {
  //     setTitle(event.target.value);
  //     setLocation(event.target.value);
  //     setDateBegin(event.target.value);
  //     setDateEnd(event.target.value);
  //     setDescription(event.target.value);
      // setCharacterCount(event.target.value.length);
  //   }
 

  const handleChange = event => {
    const { name, value } = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    })
    console.log(event.target.value)

    // setTitle({
    //   ...title,
    //   [title]: value,
    // })

    // setLocation({
    //   ...location,
    //   [name]: value,
    // })

    // setDateBegin({
    //   ...dateBegin,
    //   [name]: value,
    // })

    // setDateEnd({
    //   ...dateEnd,
    //   [name]: value,
    // });

    // setDescription({
    //   ...description,
    //   [name]: value

    // });
  };

	return (
		<section id='create-itinerary'>
      <div className='c-create-itinerary-form'>
        <form onSubmit={handleFormSubmit}>
          <ul>
            <div className='form-group'>
                <input 
                placeholder='Name your itinerary'
                type='text' 
                name='title' 
                id='title'
                value={state.title}
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
                value={state.location}
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
                value={state.dateBegin}
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
                value={state.dateEnd}
                onChange={handleChange}/>
              </div>
            </div>
        
            <div className='form-group'>
                <textarea 
                name='description' 
                id='description' 
                rows="4" 
                placeholder='Write a caption…'
                value={state.description}
                onChange={handleChange}/>
            </div>
          
            <div className='form-group flex'>
              <div className='icon-container'>
                <div className='icon-spirit icon__photo'></div>
              </div>
              <div className='input-container'>
                <input 
                  type='file' 
                  name='image_url' 
                  placeholder='+ Photo'></input>
                </div>
            </div>
            
        </ul>
        <div className="flex-row flex-end">
          <ul>
          <button type="submit">
            Next
          </button>
          </ul>
        </div>
        </form>
      </div>
	  </section>
  
);
}

export default CreateItinerary;
