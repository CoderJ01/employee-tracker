// React
import { useState } from 'react';

// CSS
import './Register.style.css';

// util
import { trackInput, processSubmission } from './Register.util';

function Register() {
    const [formState, setFormState] = useState({ lastname: '', firstname: '', email: '', phonenumber: '', password: '', companyname: '' });
    const [errorText, setErrorText] = useState('');

    const r = <text style={{ color: 'red'}}>*</text>

    function handleChange(e) {
        trackInput(e, formState, setFormState);
    }

    function handleSubmit(e) {
        processSubmission(e, formState, setErrorText);
    }

    return (
        <div className='register'>
            <form>
                <h2>Register</h2>
                <br/>
                <div>
                    <label htmlFor='lastname'>Last Name:{r}</label><br/>
                    <input type='text' name='lastname' defaultValue={formState.lastname} onChange={handleChange}/>
                </div>
                <br/>
                <div>
                    <label htmlFor='firstname'>First Name:{r}</label><br/>
                    <input type='text' name='firstname' defaultValue={formState.firstname} onChange={handleChange}/>
                </div>
                <br/>
                <div>
                    <label htmlFor='email'>Email:{r}</label><br/>
                    <input type='text' name='email' defaultValue={formState.email} onChange={handleChange}/>
                </div>
                <br/>
                <div>
                    <label htmlFor='phonenumber'>Phone Number:</label><br/>
                    <input maxLength={11} type='text' name='phonenumber' defaultValue={formState.phonenumber} onChange={handleChange}/>
                </div>
                <br/>
                <div>
                    <label htmlFor='password'>Password (8+ characters):{r}</label><br/>
                    <input type='password' name='password' defaultValue={formState.password} onChange={handleChange}/>
                </div>
                <br/>
                <div>
                    <label htmlFor='companyname'>Company Name:{r}</label><br/>
                    <input type='text' name='companyname' defaultValue={formState.companyname} onChange={handleChange}/>
                </div>
                <br/>
                <span style={{ color: 'red', fontWeight: 'bold' }}>{errorText}</span>
                {
                    errorText === '' ? ('') :
                    (<><br/><br/></>)
                }
                <div className='register-button'>
                    <button onClick={handleSubmit}>Register</button>
                </div>
                <br/>
            </form>
        </div>
    );
}

export default Register;