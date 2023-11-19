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
                <tr>
                    <td><input type='text' name='lastname'/></td>
                    <td><input type='text' name='firstname'/></td>
                    <td><input type='text' name='firstname'/></td>
                    <td><input type='text' name='position'/></td>
                    <td><input type='text' name='industry'/></td>
                    <td><input type='text' name='salary'/></td>
                </tr>
            </table>
            <Add/>
        </div>
    )
}

export default Employees;