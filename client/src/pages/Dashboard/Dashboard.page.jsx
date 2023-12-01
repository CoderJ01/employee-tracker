// CSS
import './Dashboard.style.css';

// components
import Employees from '../../components/Employees/Employees.component';
import Tasks from '../../components/Tasks/Tasks.component';

function Dashboard({ user }) {
    return (
        <div className='dashboard'>
            <Employees user={user}/>
            <Tasks user={user}/>
        </div>
    );
}

export default Dashboard;