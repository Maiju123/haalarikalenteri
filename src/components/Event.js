import React, { Component } from 'react';
import './event.css';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import moment from 'moment'

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {shadow: 1}
  }

onMouseOver = () => this.setState({shadow: 2});
onMouseOut = () => this.setState({shadow: 1});

  render() {

    const dateTime = (
      moment(this.props.date).format("DD.MM.YYYY") + " klo: " +
      moment(this.props.time).format("HH:mm")
    )

    return (
      <Card style={{marginTop: '5px', marginBottom: '10px'}}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        zDepth={this.state.shadow}
      >
        <CardHeader
            title={this.props.title}
            subtitle={dateTime}
            avatar={this.props.img}
            actAsExpander={true}
            showExpandableButton={true}
        />
        <CardText
            children={this.props.desc.split('\n').map(function(item, key) {
              return (
                <span key={key}>
                  {item}
                  <br/>
                </span>
              )
            })}
            expandable={true}
        />
        <CardActions style={{width: '100%', textAlign: 'right', width:'100%', boxSizing: 'border-box'}} >
            {this.props.categories.map(function(category, index) {
                return <Chip key={category} className="my-chip" style={{width: 'initial', display: 'inline-block'}} children={category} />
            })}
        </CardActions>
      </Card>
    );
  }

}

export default Event;
