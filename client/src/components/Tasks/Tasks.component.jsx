// React
import { useState } from 'react';

// CSS
import './Tasks.style.css';

// components
import AddButton from '../AddButton/AddButton.component';

function Tasks() {
    const [display, setDisplay] = useState(false);

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
            {
                !display ? ('') :
                (
                    <div className='task'>
                        <h2>Title:</h2>
                        <input type='text' name='title'/>
                        <br/>
                        <p style={{ fontWeight: 'bold' }}>Description:</p>
                        <textarea name='description'/>
                        <br/>
                        <div className='task-submit-button'>
                            <button>Submit</button>
                        </div>
                    </div>
                )
            }
            <br/>
            <AddButton setDisplay={setDisplay}/>
        </div>
    );
}

export default Tasks;