import React from 'react';

const UserInput = (props) => {
  return (
    <input
      type="text"
      onChange={props.changed.bind(this)}
      value={props.currentName}
    />
  );
};

export default UserInput;
