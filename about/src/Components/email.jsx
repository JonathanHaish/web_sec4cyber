import React from 'react';

export default class MailTo extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: 'Name', email: 'email@example.com' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	 this.handleChange();
     return (
         <div></div>
     );
  };

  handleChange() {
    this.setState({feedback: this.props.value})
  };

  handleSubmit() {
    const templateId = 'template_id';

	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
  };

  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  };
}