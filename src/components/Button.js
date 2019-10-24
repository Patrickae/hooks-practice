import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default class Button extends React.Component {
	static contextType = LanguageContext;
	renderSubmit(value) {
		return value === 'english' ? 'Submit' : 'Voorleggen'
	}

	render(){
		return (
			<button className='ui button primary'>
				<LanguageContext.Consumer>
					{(value) => this.renderSubmit(value)}
				</LanguageContext.Consumer>
			</button>
		)
	}
}