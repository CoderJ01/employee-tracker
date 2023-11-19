// CSS
import './Dashboard.style.css';

// components
import Employees from '../../components/Employees/Employees.component';
import Tasks from '../../components/Tasks/Tasks.component';

function Dashboard() {
    return (
        <div className='dashboard'>
            <Employees/>
            <Tasks/>
        </div>
    );
}

export default Dashboard;