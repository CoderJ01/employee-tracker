// React
import { useState } from 'react';

// CSS
import './Employees.style.css';

// util
import { trackInput, processSubmission } from './Employees.util';

// components
import AddButton from '../AddButton/AddButton.component';

function Employees() {
    const [display, setDisplay] = useState(false);
    const [formState, setFormState] = useState({ lastname: '', firstname: '', email: '', role: '', department: '', salary: ''});
    const [errorText, setErrorText] = useState('');

    function handleChange(e) {
        trackInput(e, formState, setFormState);
    }

    function handleSubmit(e) {
        e.preventDefault();
        processSubmission(e, formState, setErrorText);
    }

    return (
        <div className='employees'>
            <table className='employees-desktop'>
                <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Department</th>
                    <th>Salary</th>
                </tr>
                <tr>
                    <td>Smith</td>
                    <td>John</td>
                    <td>smith.john@email.com</td>
                    <td>Software Engineer</td>
                    <td>Information Technology</td>
                    <td>$90,000</td>
                </tr>
                <tr>
                    <td>Smith</td>
                    <td>John</td>
                    <td>smith.john@email.com</td>
                    <td>Software Engineer</td>
                    <td>Information Technology</td>
                    <td>$90,000</td>
                </tr>
                <tr>
                    <td>Smith</td>
                    <td>John</td>
                    <td>smith.john@email.com</td>
                    <td>Software Engineer</td>
                    <td>Information Technology</td>
                    <td>$90,000</td>
                </tr>
                <tr>
                    <td>Smith</td>
                    <td>John</td>
                    <td>smith.john@email.com</td>
                    <td>Software Engineer</td>
                    <td>Information Technology</td>
                    <td>$90,000</td>
                </tr>
                {
                    !display ? ('') :
                    (
                        <>
                        <tr>
                            <td><input type='text' name='lastname' defaultValue={formState.lastname} onChange={handleChange}/></td>
                            <td><input type='text' name='firstname' defaultValue={formState.firstname} onChange={handleChange}/></td>
                            <td><input type='text' name='email' defaultValue={formState.email} onChange={handleChange}/></td>
                            <td><input type='text' name='role' defaultValue={formState.role} onChange={handleChange}/></td>
                            <td><input type='text' name='department' defaultValue={formState.department} onChange={handleChange}/></td>
                            <td><input type='text' name='salary' defaultValue={formState.salary} onChange={handleChange}/></td>
                        </tr>
                        </>
                    )
                }
            </table>
            <table className='employees-mobile'>
                <tr>
                    <th>Last Name:</th>
                    <td>Smith</td>
                </tr>
                <tr>
                    <th>First Name:</th>
                    <td>John</td>
                </tr>
                <tr>
                    <th>Email:</th>
                    <td>smith.john@email.com</td>
                </tr>
                <tr>
                    <th>Role:</th>
                    <td>Software Engineer</td>
                </tr>
                <tr>
                    <th>Department:</th>
                    <td>Information Technology</td>
                </tr>
                <tr>
                    <th>Salary:</th>
                    <td>$90,000</td>
                </tr>
            </table>
            {
                !display ? ('') : 
                (
                    <>
                    <table className='employees-mobile'>
                        <tr>
                            <th>Last Name:</th>
                            <td><input type='text' name='lastname' defaultValue={formState.lastname} onChange={handleChange}/></td>
                        </tr>
                        <tr>
                            <th>First Name:</th>
                            <td><input type='text' name='firstname' defaultValue={formState.firstname} onChange={handleChange}/></td>
                        </tr>
                        <tr>
                            <th>Email:</th>
                            <td><input type='text' name='email' defaultValue={formState.email} onChange={handleChange}/></td>
                        </tr>
                        <tr>
                            <th>Role:</th>
                            <td><input type='text' name='role' defaultValue={formState.role} onChange={handleChange}/></td>
                        </tr>
                        <tr>
                            <th>Department:</th>
                            <td><input type='text' name='department' defaultValue={formState.department} onChange={handleChange}/></td>
                        </tr>
                        <tr>
                            <th>Salary:</th>
                            <td><input type='text' name='salary' defaultValue={formState.salary} onChange={handleChange}/></td>
                        </tr>
                    </table>
                    <text className='employees-error'>{errorText}</text>
                    <div className='employees-submit-button'>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                    </>
                )
            }
            <AddButton setDisplay={setDisplay}/>
        </div>
    )
}

export default Employees;