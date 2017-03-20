import React from 'react';
import {form, from, DisabledFormSubmit} from 'react-inform';
import './ContactForm.css'
//import validator from 'validator';
import { isEmail, isNumeric, isLength } from 'string-validator';

/*const fields = ['username', 'email', 'password', 'confirmPassword'];

const validate = values => {
  const { username, email, password, confirmPassword } = values;
  const errors = {};
  
  if (!username) errors.username = 'Username is required!';
  if (!password) errors.password = 'Password is required!';
  if (confirmPassword !== password) errors.confirmPassword = 'Passwords must match!';
  if (!validator.isEmail("example@mail.com")) errors.email = 'Invalid email! example@mail.com'

  return errors;
}*/

function LabeledInput({ text, error, id, props }) {
  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <input id={id} placeholder={text} type="text" {...props} />
      <span className="ui-hint">{error}</span>
    </div>
  );
}

const isRequired = value => value;

const rulesMap = {
  username: {
    'Username is required': isRequired,
  },
  email: {
    'Email is required': isRequired,
    'Must be a valid email': isEmail(),
  },
  phone: {
	'Phone number is required': isRequired,
	'Numeric characters only': isNumeric(),
	'Must be 10 digits long' : isLength(10,10), 
  },
  password: {
    'Password is required': isRequired,
  },
  confirmPassword: {
    'Passwords must match': (value, { password }) => value === password,
  },
};
class ContactForm extends React.Component {
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			username: '',
			phone: '',
			email: ''
  		};
	}
  
  handleSubmit(e) {
    e.preventDefault();
    const { form } = this.props;
	console.log(this.props)
    
    if (form.isValid()) {
		//this works	
	  	//this.state = {username: this.props.fields.username.value, email: this.props.fields.email.value, phone: this.props.fields.phone.value};	
      	this.setState({username: this.props.fields.username.value, email: this.props.fields.email.value, phone: this.props.fields.phone.value});
	  	this.props.submitAction(this.state);
     } 
  }
 
  
  render() {
    const { username, email, phone, password, confirmPassword } = this.props.fields;
	
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <h3>Sign Up</h3>
		<LabeledInput text="Username" id="username" {...username} />
        <LabeledInput text="Email" id="email" {...email} />
		<LabeledInput text="Phone Number" id="phone" {...phone} />
        <LabeledInput type="password" text="Password" id="password" {...password} />
        <LabeledInput
          type="password"
          text="Confirm Password"
          id="confirmPassword"
          {...confirmPassword}
        />
		<DisabledFormSubmit className="button" value="I am enabled when valid!" />
      </form>
    );
  }
}
ContactForm = form(
  from(rulesMap)
)(ContactForm);

export default ContactForm;