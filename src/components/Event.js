import React, { Component } from 'react';
import './event.css';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';

class Event extends Component {

  constructor(props) {
    super(props);
    this.state = {shadow: 1}
}

onMouseOver = () => this.setState({shadow: 2});
onMouseOut = () => this.setState({shadow: 1});

    render() {

        return (

            <Card style={{marginTop: '5px', marginBottom: '10px'}}
              onMouseOver={this.onMouseOver}
              onMouseOut={this.onMouseOut}
              zDepth={this.state.shadow}
              >
                <CardHeader
                    title={this.props.title}
                    subtitle={this.props.date}
                    avatar={this.props.img}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText
                    children={this.props.desc}
                    expandable={true}
                />
                <CardActions style={{width: '100%', textAlign: 'right', width:'100%', boxSizing: 'border-box'}} >
                    {this.props.categories.map(function(category) {
                        return <Chip className="my-chip" style={{width: 'initial', display: 'inline-block'}} children={category} />
                    })}
                </CardActions>
            </Card>

        );
    }

}

export default Event;
