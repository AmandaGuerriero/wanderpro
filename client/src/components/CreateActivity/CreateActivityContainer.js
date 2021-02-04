import React, { useState, Fragment } from "react";
import CreateActivity from './CreateActivity'
import { Link } from 'react-router-dom';
import { faTrashAlt, faPlusCircle, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Create-activity.css';

const CreateActivityContainer = (props) => {
  const itineraryId = localStorage.getItem("itineraryId");
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
    <div className="activity-buttons">
    <button
        className="btn btn-link add-activity-btn"
        type="button"
        onClick={() => handleAddFields()}
      >
        <h2><FontAwesomeIcon icon={faPlusCircle}/> Add Activity</h2>
      </button>
    <Link to={`/itinerary/${itineraryId}`}><button className="full-itinerary-btn btn"><h2><FontAwesomeIcon icon={faClipboardList}/> View Full Itinerary</h2></button></Link>
    </div>

        <div className="center">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="f-container">
              <button
                className="btn delete-btn"
                type="button"
                onClick={() => handleRemoveFields(index)}
              >
                <FontAwesomeIcon icon={faTrashAlt}/>
              </button>
              <CreateActivity/>
              </div>
            </Fragment>
          ))}
        </div>
        <br/>
    </>
  );
};
                 
export default CreateActivityContainer;