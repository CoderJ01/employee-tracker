// React
import { useState } from 'react';

// CSS
import '../Register/Register.style.css';

// util
import { trackInput, processSubmission } from './Login.util';

function Login() {
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [errorText, setErrorText] = useState('');

    function handleChange(e) {
        trackInput(e, formState, setFormState);
    }

    function handleSubmit(e) {
        processSubmission(e, formState, setErrorText);
    }

    return (
        <div className='register'>
            <form>
                <h2>Login</h2>
                <br/>
                <div>
                    <label htmlFor='username'>Username or Email:</label><br/>
                    <input type='text' name='username' defaultValue={formState.username} onChange={handleChange}/>
                </div>
                <br/>
                <div>
                    <label htmlFor='password'>Password:</label><br/>
                    <input type='password' name='password' defaultValue={formState.password} onChange={handleChange}/>
                </div>
                <br/>
                <span style={{ color: 'red', fontWeight: 'bold' }}>{errorText}</span>
                {
                    errorText === '' ? ('') :
                    (<><br/><br/></>)
                }
                <div className='register-button'>
                    <button onClick={handleSubmit}>Login</button>
                </div>
                <br/>
            </form>
        </div>
    );
}

export default Login;