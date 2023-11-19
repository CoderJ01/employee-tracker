// CSS
import './Employees.style.css';

// components
import Add from '../AddButton/AddButton.component';

function Employees() {
    return (
        <div className='employees'>
            <table>
                <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Role</th>
                    <th>Department</th>
                    <th>Salary</th>
                </tr>
                <tr>
                    <td>Smith</td>
                    <td>John</td>
                    <td>Software Engineer</td>
                    <td>Information Technology</td>
                    <td>$90,000</td>
                </tr>
                <tr>
                    <td>Smith</td>
                    <td>John</td>
                    <td>Software Engineer</td>
                    <td>Information Technology</td>
                    <td>$90,000</td>
                </tr>
                <tr>
                    <td>Smith</td>
                    <td>John</td>
                    <td>Software Engineer</td>
                    <td>Information Technology</td>
                    <td>$90,000</td>
                </tr>
                <tr>
                    <td>Smith</td>
                    <td>John</td>
                    <td>Software Engineer</td>
                    <td>Information Technology</td>
                    <td>$90,000</td>
                </tr>
            </table>
            <Add/>
        </div>
    )
}

export default Employees;