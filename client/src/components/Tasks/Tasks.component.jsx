// CSS
import './Tasks.style.css';

function Tasks() {
    return (
        <div className='tasks'>
            <div className='task'>
                <h2>Task Title</h2>
                <p>Description</p>
                <p>Date</p>
                <br/>
            </div>
            <div className='task'>
                <h2>Task Title</h2>
                <p>Description</p>
                <p>Date</p>
                <br/>
            </div>
            <div className='task'>
                <h2>Task Title</h2>
                <p>Description</p>
                <p>Date</p>
                <br/>
            </div>
            <div className='task'>
                <h2>Task Title</h2>
                <p>Description</p>
                <p>Date</p>
                <br/>
            </div>
            <div className='add' style={{ marginTop: '2vh' }}>
                <i className='fa fa-plus-circle'></i>
            </div>
        </div>
    );
}

export default Tasks;