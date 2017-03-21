import React, { Component } from 'react';

class Event extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
		<div>
      <h1>{this.props.title}</h1>
			<img src={this.props.img} width="300px"></img>
      <p>{this.props.desc}</p>
      <p>{this.props.date}</p>
      <p>{this.props.categories}</p>
    </div>
    );
  }
}

export default Event;
