
import * as React from 'react';
import Link from 'valuelink';
import {Input, isEmail} from 'valuelink/tags';
import {isDate} from './utilities.js';
import './App.css';

const FormInput = (props) => {
    const {label, ...rest} = props;
    return (
        <tr>
            <td>
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
            dob: '',
            isActive : true
        };
    }

  onSubmit = e => {
        console.log('pressed');
        this.setState({name: '', email: '', dob: '', isActive: true});
        console.log(this.state);
        e.preventDefault();
    };
  
  render(){
    const nameLink = Link.state(this,'name')
        .check(x => x, 'Name is required')
        .check(x => x.indexOf(' ') < 0 , "Name shouldn't contain spaces");

    const emailLink = Link.state(this, 'email')
        .check(x => x, 'Email is required')
        .check(x => isEmail(x) ,'Must be a valid email address');
    
    const dobLink = Link.state(this,'dob')
        .check(x => x, 'DOB is required')
        .check(x => isDate(x), 'Must be a valid date in format yyyy-mm-dd');

    const isActiveLink = Link.state(this,'isActive');
    
    return (
        <div className='divStyle'>
            <h2>Add User</h2>
            <form onSubmit={ this.onSubmit }>
                <table>
                    <tbody>
                        <FormInput label="Name:" valueLink={nameLink} type="text" placeholder="username" size="30" />
                        <FormInput label="Email:" valueLink={emailLink} type="text" placeholder="email" size="30" />
                        <FormInput label="DOB:" valueLink={dobLink} type="text" placeholder="Date of Birth - yyyy-mm-dd" size="30" />
                        <FormInput label="Is active:" valueLink={isActiveLink} type="checkbox" />
                        <FormButton buttonText="Add User" type="submit" disabled = { nameLink.error || emailLink.error || dobLink.error } />
                    </tbody>
                </table>             
            </form>
        </div>
    );
  }
}

export default AddUser;

