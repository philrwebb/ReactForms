
import * as React from 'react';
import Link from 'valuelink';
import {Input, isEmail} from 'valuelink/tags';
import {isDate, isStrongPassword, isValidPostcode} from './utilities.js';
import './App.css';

const FormInput = (props) => {
    const {label, ...rest} = props;
    return (
        <tr>
            <td className='labeltext'>
                {label}
            </td>
            <td>
                <Input {...rest} />
            </td>
            <td className='error-placeholder'>
                {props.valueLink.error || ''}
            </td>
        </tr>
    );
};

const FormButton = (props) => {
    const {buttonText, ...rest } = props;
    return (
        <tr>
            <td/>
            <td>
                <button {...rest}>{buttonText}</button>
            </td>
            <td/>
        </tr>
    );
};

class AddUser extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name : '',
            email : '',
            emailCheck: '',
            password: '',
            dob: '',
            address : {
                line1: '',
                line2: '',
                suburb: '',
                postcode: ''
            },
            isActive : true
        };
        console.log(this.state);
    }

  onSubmit = e => {
        this.setState({name: '', email: '', emailCheck: '', password: '',dob: '', isActive: true, address : {line1: '', line2: '', suburb: '', postcode: ''}});
        e.preventDefault();
    };
  
  render(){
    const nameLink = Link.state(this,'name')
        .check(x => x, 'Name is required')
        .check(x => x.indexOf(' ') < 0 , "Name shouldn't contain spaces");

    const emailLink = Link.state(this, 'email')
        .check(x => x, 'Email is required')
        .check(x => isEmail(x) ,'Must be a valid email address');

    const emailCheckLink = Link.state(this,'emailCheck')
        .check(x => x, 'Re-enter Email is required')
        .check(x => x = this.state.email, 'Emails addresses do not match');

    const passwordLink = Link.state(this, 'password')
        .check(x => x, 'password is required')
        .check(x => isStrongPassword(x), 'Must be 8 characters ');
    
    const dobLink = Link.state(this,'dob')
        .check(x => x, 'DOB is required')
        .check(x => isDate(x), 'Must be a valid date in format yyyy-mm-dd');

    const addressLine1Link = Link.state(this,'address').at('line1')
        .check(x => x, 'Address Line 1 is required');

    const addressLine2Link = Link.state(this,'address').at('line2');

    const addressSuburbLink = Link.state(this,'address').at('suburb')
        .check(x => x, 'Suburb is required');;

    const addressPostcodeLink = Link.state(this, 'address').at('postcode')
        .check(x => x, 'Postcode is required')
        .check(x => isValidPostcode(x), 'Postcode should be 4 digits only');

    const isActiveLink = Link.state(this,'isActive');
    
    return (
        <div className='divStyle'>
            {/* <h2>Add User</h2> */}
            <form onSubmit={ this.onSubmit }>
                <table>
                    <thead>
                        <tr />
                        <tr>
                            <td />
                            <td className='formheader'>Add User</td>
                            <td />
                        </tr>
                        <tr />
                    </thead>
                    <tbody>
                        <FormInput label="Name:" valueLink={nameLink} type="text" placeholder="username" size="30" />
                        <FormInput label="Email:" valueLink={emailLink} type="text" placeholder="email" size="30" />
                        <FormInput label="Re-Enter Email:" valueLink={emailCheckLink} type="text" placeholder="Re-enter email" size="30" />
                        <FormInput label="Password:" valueLink={passwordLink} type="password" placeholder="password" />
                        <FormInput label="DOB:" valueLink={dobLink} type="text" placeholder="Date of Birth - yyyy-mm-dd" size="30" />
                        <FormInput label="Is active:" valueLink={isActiveLink} type="checkbox" />
                        <FormInput label="Address Line 1:" valueLink={addressLine1Link} type="text" placeholder="Address Line 1" size="30" />
                        <FormInput label="Address Line 2:" valueLink={addressLine2Link} type="text" placeholder="Address Line 2" size="30" />
                        <FormInput label="Suburb:" valueLink={addressSuburbLink} type="text" placeholder="Suburb" size="30" />
                        <FormInput label="Postcode:" valueLink={addressPostcodeLink} type="text" placeholder="Postcode" size="30" />                                                                        
                        <FormButton buttonText="Add" type="submit" disabled = { nameLink.error || emailLink.error || dobLink.error } />
                        <FormButton buttonText="Cancel" />
                    </tbody>
                </table>             
            </form>
        </div>
    );
  }
}

export default AddUser;

