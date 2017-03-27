import React, { Component } from 'react';
import EditEventPassword from './EditEventPassword';
import './event.css';

class Event extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
		
        <div className="row event-box">    
            <div className="col-xs-4 img-holder">
                <img src={this.props.img}></img>
            </div>
            <div className="col-xs-8">
                <div className="row">
                    <div className="col-xs-8 event-title">
                        {this.props.title}
                    </div>
                    <div className="col-xs-4 event-date">
                        {this.props.date}
                    </div>
                    <div className="col-xs-12 event-desc">
                        {this.props.desc}
                    </div>
                </div>
            </div>
            <div className="col-xs event-categories">
                {this.props.categories}
            </div>
				    <div className="col-xs-12 event-pw">
							{this.props.pw}
            </div>
						<div className="col-xs-12 enter-pw">
            </div>
			</div>
        
    );
  }
}

export default Event;
