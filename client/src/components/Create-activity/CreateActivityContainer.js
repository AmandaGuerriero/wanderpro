import React, { useState, Fragment } from "react";
import CreateActivity from './Create-activity'
import { faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Create-activity.css';

const CreateActivityContainer = (props) => {
  const [inputFields, setInputFields] = useState([
    {location:'', date:'', timeFrom:'', timeTo:'', notes:'', itineraryId:''}
  ]);

  const handleAddFields=() => {
    const values = [...inputFields];
    values.push({ location:'', date:'', timeFrom:'', timeTo:'', notes:'', itineraryId:''});
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <>
      <button
                  className="btn btn-link add-activity-btn"
                  type="button"
                  onClick={() => handleAddFields()}
                >
                  <h2><FontAwesomeIcon icon={faPlusCircle}/> Add Activity</h2>
                </button>
        <div className="center">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <CreateActivity/>
              <button
                className="btn delete-btn"
                type="button"
                onClick={() => handleRemoveFields(index)}
              >
                <FontAwesomeIcon icon={faTrashAlt}/>
              </button>

            </Fragment>
          ))}
        </div>
        <br/>
    </>
  );
};
  
  // return (
    // <div>
    //   {inputFields.map((inputField, index) => (
    //         <Fragment key={`${inputField}~${index}`}>
            

    //         </Fragment>
    //         )
    // </div>
    
  // )};
                 
export default CreateActivityContainer;