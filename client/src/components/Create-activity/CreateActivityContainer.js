import React, { useState, Fragment } from "react";
import CreateActivity from './Create-activity'
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
      <h1>Add Activity</h1>
        <div className="form-row">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <CreateActivity />
              <div className="form-group col-sm-2">
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleRemoveFields(index)}
                >
                  -
                </button>
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleAddFields()}
                >
                  +
                </button>
              </div>
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