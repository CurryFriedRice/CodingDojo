import React, { Component } from 'react';

class PersonCardComponent extends Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      firstName : props.user.firstName,
      lastName : props.user.lastName,
      hairColor : props.user.hairColor,
      age : props.user.age
    };
  }

  IncreaseAge = () => 
  {
    console.log(this.state["age"] + 1);
    this.setState({age : this.state.age+1});

  }


  render() {return (
    <div className="card">
        <h1>{this.props.user.lastName}, {this.state.firstName}</h1>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {this.state.hairColor}</p>
        <button onClick={this.IncreaseAge}>Happy Birthday!</button>
    </div>
  )};

}

export default PersonCardComponent;
