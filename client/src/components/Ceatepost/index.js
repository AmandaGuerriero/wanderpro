import React from 'react';
import './Createpost.css';

const Createpost = () => {
  const [postText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_Itinerary, {
    update(cache, { data: { addPost } }) {
      try {
        // update thought array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { posts } = cache.readQuery({ query: QUERY_ITINERARIES });
        cache.writeQuery({
          query: QUERY_ITINERARIES,
          data: { posts: [ADD_Itinerary, ...posts] }
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } }
      });
    }
  });

  // update state based on form input changes
  const handleChange = event => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      await addPost({
        variables: { postText }
      });

      // clear form value
      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

	return (
/* create itinerary form  */
		<section id='create-itinerary'>
/* Title */
      <div className='c-create-itinerary-form'>
        <form action=''>
        <ul>
            <li>
              <div className='form-group'>
                <input type='text' name='title' id='title' placeholder='Name your itinerary'></input>
              </div>
            </li>
/* Location input */
          <li>
            <div className='form-group flex'>
              <div class="icon-container">
                <div className='icon-spirit icon__location--grey'></div>
              </div>
              <div class='input-container'>
                <input type='text' name='location' id='location' placeholder='City'></input>
              </div>
           </div>
/* Date Begin */
            <div className='form-group flex'>
              <div className='icon-container'>
                <div className='icon-spirit icon__calendar'></div>
              </div>
              <div className='input-container'>
                <input type='text' name='dateBegin' id='dateBegin' placeholder='Date Begin'></input>
              </div>
            </div>
/* Date End */
<div className='form-group flex'>
              <div className='icon-container'>
                <div className='icon-spirit icon__calendar'></div>
              </div>
              <div className='input-container'>
                <input type='text' name='dateEnd' id='dateEnd' placeholder='Date End'></input>
              </div>
            </div>
          </li>
/* caption - description  */
            <li>
              <div class='form-group'>
                <textarea name='description' id='description' rows="4" placeholder='Write a caption…'></textarea>
              </div>
            </li>
            <li>
/* upload a photo */
              <div className='form-group flex'>
                <div className='icon-container'>
                  <div className='icon-spirit icon__photo'></div>
                </div>
                <div className='input-container'>
                  <input type='file' name='image_url' placeholder='+ Photo'></input>
                 </div>
              </div>
            </li>
        </ul>
          
          {/* <ul className='no-space'>
            <li className='c-createpost-summary__map'>
            <app-list></app-list>
            </li>
          </ul> */}

        </form>
      </div>
	  </section>
	);
}

export default Createpost;
