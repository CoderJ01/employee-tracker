// CSS
import './Register.style.css';

function Register() {
    return (
        <div className='register'>
            <form>
                <h2>Register</h2>
                <br/>
                <div>
                    <label htmlFor='lastname'>Last Name:</label><br/>
                    <input type='text' name='lastname'/>
                </div>
                <br/>
                <div>
                    <label htmlFor='firstname'>First Name:</label><br/>
                    <input type='text' name='firstname'/>
                </div>
                <br/>
                <div>
                    <label htmlFor='email'>Email:</label><br/>
                    <input type='text' name='email'/>
                </div>
                <br/>
                <div>
                    <label htmlFor='phonenumber'>Phone Number:</label><br/>
                    <input type='text' name='phonenumber'/>
                </div>
                <br/>
                <div>
                    <label htmlFor='password'>Password (8+ characters):</label><br/>
                    <input type='password' name='password'/>
                </div>
                <br/>
                <div>
                    <label htmlFor='companyname'>Company Name:</label><br/>
                    <input type='text' name='companyname'/>
                </div>
                <br/>
                <br/>
            </form>
        </div>
    );
}

export default Register;