// CSS
import './Employees.style.css';

// components
import AddButton from '../AddButton/AddButton.component';

function Employees() {
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
                <tr>
                    <td><input type='text' name='lastname'/></td>
                    <td><input type='text' name='firstname'/></td>
                    <td><input type='text' name='firstname'/></td>
                    <td><input type='text' name='position'/></td>
                    <td><input type='text' name='industry'/></td>
                    <td><input type='text' name='salary'/></td>
                </tr>
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
                    <th>Position:</th>
                    <td>Software Engineer</td>
                </tr>
                <tr>
                    <th>Industry:</th>
                    <td>Information Technology</td>
                </tr>
                <tr>
                    <th>Salary:</th>
                    <td>$90,000</td>
                </tr>
            </table>
            <table className='employees-mobile'>
                <tr>
                    <th>Last Name:</th>
                    <td><input type='text' name='lastname'/></td>
                </tr>
                <tr>
                    <th>First Name:</th>
                    <td><input type='text' name='firstname'/></td>
                </tr>
                <tr>
                    <th>Email:</th>
                    <td><input type='text' name='email'/></td>
                </tr>
                <tr>
                    <th>Position:</th>
                    <td><input type='text' name='position'/></td>
                </tr>
                <tr>
                    <th>Industry:</th>
                    <td><input type='text' name='industry'/></td>
                </tr>
                <tr>
                    <th>Salary:</th>
                    <td><input type='text' name='salary'/></td>
                </tr>
            </table>
            <AddButton/>
        </div>
    )
}

export default Employees;