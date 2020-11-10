import React from 'react';
const validation = (props) => {
  let validationMsg = 'Text long enough';
  if (props.inputLength <= 5) {
    validationMsg = 'Text to short';
  }

  return (
    <div>
      <p>{validationMsg}</p>
    </div>
  );
};

export default validation;
