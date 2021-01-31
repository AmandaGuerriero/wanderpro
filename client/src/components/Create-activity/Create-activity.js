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
        varibles: {
          location: formState.location,
          date: formState.date,
          timeFrom: formState.timeFrom,
          timeTo: formState.timeTo,
          notes: formState.notes,
          itineraryId: formState.itineraryId
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
export default CreateActivity;

// import React, { useState, Fragment } from "react";
// import ReactDOM from "react-dom";

// const CreateActivity = (props) => {
//   const [inputFields, setInputFields] = useState([
//     { firstName: '', lastName: '' }
//   ]);

//   const handleAddFields = () => {
//     const values = [...inputFields];
//     values.push({ firstName: '', lastName: '' });
//     setInputFields(values);
//   };

//   const handleRemoveFields = index => {
//     const values = [...inputFields];
//     values.splice(index, 1);
//     setInputFields(values);
//   };

//   const handleInputChange = (index, event) => {
//     const values = [...inputFields];
//     if (event.target.name === "firstName") {
//       values[index].firstName = event.target.value;
//     } else {
//       values[index].lastName = event.target.value;
//     }

//     setInputFields(values);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log("inputFields", inputFields);
//   };

//   return (
//     <>
//       <h1>Dynamic Form Fields in React</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-row">
//           {inputFields.map((inputField, index) => (
//             <Fragment key={`${inputField}~${index}`}>
//               <div className="form-group col-sm-6">
//                 <label htmlFor="firstName">First Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="firstName"
//                   name="firstName"
//                   value={inputField.firstName}
//                   onChange={event => handleInputChange(index, event)}
//                 />
//               </div>
//               <div className="form-group col-sm-4">
//                 <label htmlFor="lastName">Last Name</label>
//                 <input
//                   type="text" 
//                   className="form-control" 
//                   id="lastName"
//                   name="lastName"
//                   value={inputField.lastName}
//                   onChange={event => handleInputChange(index, event)}
//                 />
//               </div>
//               <div className="form-group col-sm-2">
//                 <button
//                   className="btn btn-link"
//                   type="button"
//                   onClick={() => handleRemoveFields(index)}
//                 >
//                   -
//                 </button>
//                 <button
//                   className="btn btn-link"
//                   type="button"
//                   onClick={() => handleAddFields()}
//                 >
//                   +
//                 </button>
//               </div>
//             </Fragment>
//           ))}
//         </div>
//         <div className="submit-button">
//           <button
//             className="btn btn-primary mr-2"
//             type="submit"
//             onSubmit={handleSubmit}
//           >
//             Save
//           </button>
//         </div>
//         <br/>
//         <pre>
//           {JSON.stringify(inputFields, null, 2)}
//         </pre>
//       </form>
//     </>
//   );
// };



// export default CreateActivity;
