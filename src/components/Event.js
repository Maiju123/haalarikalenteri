import React, { Component } from 'react';
import './event.css';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';

const styles = {
  card: {
    margin: '10px',
  }
}

class Event extends Component {



    render() {

        return (

            <Card style={styles.card}>
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

                <CardActions>
                    {this.props.categories.map(function(category) {
                        return <Chip className="my-chip" children={category} />
                    })}
                </CardActions>


                {this.props.date}
                {this.props.desc}
                {this.props.categories}
                {this.props.pw}
            </Card>

        );
    }

}

export default Event;
