// CSS
import './Tasks.style.css';

// components
import AddButton from '../AddButton/AddButton.component';

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
            <div className='task'>
                <h2>Title: <input type='text' name='title'/></h2>
                <p style={{ fontWeight: 'bold' }}>Description:</p>
                <textarea name='description'/>
                <br/>
            </div>
            <br/>
            <AddButton/>
        </div>
    );
}

export default Tasks;