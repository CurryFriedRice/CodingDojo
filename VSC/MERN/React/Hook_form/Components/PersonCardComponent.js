import React, { Component } from 'react';

const PersonCardComponent = props =>
{
  return (
    <div className="card">
        <h1>{props.user.lastName}, {props.user.firstName}</h1>
        <p>Age: {props.user.age}</p>
        <p>Hair Color: {props.user.hairColor}</p>
    </div>
  );
}

export default PersonCardComponent;
