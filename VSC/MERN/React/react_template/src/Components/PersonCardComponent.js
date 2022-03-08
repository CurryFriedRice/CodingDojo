import React, { Component } from 'react';

class PersonCardComponent extends Component
{

  render() {return (
    <div className="card">
        <h1>{this.props.user.lastName}, {this.props.user.firstName}</h1>
        <p>Age: {this.props.user.age}</p>
        <p>Hair Color: {this.props.user.hairColor}</p>
    </div>
  )};

}

export default PersonCardComponent;
