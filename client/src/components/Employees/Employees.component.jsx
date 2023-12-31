// React
import { useState } from 'react';

// CSS
import './Employees.style.css';

// util
import { trackInput, processSubmission, deleteEmployee, toTitleCase, addCommasToNumber } from './Employees.util';

// components
import AddButton from '../AddButton/AddButton.component';
import Trashcan from '../Trashcan/Trashcan.component';

function Employees({ user }) {
    const [display, setDisplay] = useState(false);
    const [formState, setFormState] = useState({ lastname: '', firstname: '', email: '', role: '', department: '', salary: ''});
    const [errorText, setErrorText] = useState('');

    function handleChange(e) {
        trackInput(e, formState, setFormState);
    }

    function handleSubmit(e) {
        processSubmission(e, formState, setErrorText, user);
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
                    <th></th>
                </tr>
                { 
                    user?.employees?.map(employee => {
                        return (
                            <tr>
                                <td>{toTitleCase(employee.lastName)}</td>
                                <td>{toTitleCase(employee.firstName)}</td>
                                <td>{employee.email}</td>
                                <td>{toTitleCase(employee.role)}</td>
                                <td>{toTitleCase(employee.department)}</td>
                                <td>${addCommasToNumber(employee.salary)}</td>
                                <td className='ed-delete' onClick={() => deleteEmployee(employee.id, setErrorText)}><Trashcan/></td>
                            </tr>
                        );
                    }) 
                }
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
            {
                user?.employees?.map(employee => {
                    return (
                        <table className='employees-mobile'>
                            <tr>
                                <th>Last Name:</th>
                                <td>{toTitleCase(employee.lastName)}</td>
                            </tr>
                            <tr>
                                <th>First Name:</th>
                                <td>{toTitleCase(employee.firstName)}</td>
                            </tr>
                            <tr>
                                <th>Email:</th>
                                <td>{employee.email}</td>
                            </tr>
                            <tr>
                                <th>Role:</th>
                                <td>{toTitleCase(employee.role)}</td>
                            </tr>
                            <tr>
                                <th>Department:</th>
                                <td>{toTitleCase(employee.department)}</td>
                            </tr>
                            <tr>
                                <th>Salary:</th>
                                <td>${addCommasToNumber(employee.salary)}</td>
                            </tr>
                            <tr>
                                <th>Delete?</th>
                                <td className='ed-delete' onClick={() => deleteEmployee(employee.id, setErrorText)}><Trashcan/></td>
                            </tr>
                        </table>
                    )
                })
            }
            <text className='employees-error'>{errorText}</text>
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