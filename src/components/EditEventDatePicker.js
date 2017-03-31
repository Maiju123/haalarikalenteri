import React, { Component } from 'react';
import { Calendar } from 'react-date-range';
import Event from './Event';

/**
 * The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * You can also disable the Dialog passing `true` to the `disabled` property.
*/
class EditEventDatePicker extends Component {     
  	EditEventDatePicker(event, date){
	}
 
    render(){
        return (
            <div>
                <Calendar
                    onInit={this.EditEventDatePicker}
                    onChange={this.EditEventDatePicker}                    
                />
            </div>
        )
    }
}

export default EditEventDatePicker;