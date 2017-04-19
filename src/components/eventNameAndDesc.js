import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
						
class eventNameAndDesc extends Component {
render() {
	return(
	<div><h1>Muokkaa tapahtumaa</h1>
							<TextField 
							floatingLabelText="Tapahtuman otsikko"
							name="title"
							value={this.state.title}
							onChange={this.changeTitle.bind(this)}
							/><br />
							<TextField 
							floatingLabelText="Kuvaus"
							name="description"
							value={this.state.description}
							onChange={this.changeDescription.bind(this)}
							multiLine={true}
      				rows={5}
							/></div>
		);
	}
}
export default eventNameAndDesc;