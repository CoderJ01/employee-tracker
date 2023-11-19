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
                        <h2>Title: <input type='text' name='title'/></h2>
                        <p style={{ fontWeight: 'bold' }}>Description:</p>
                        <textarea name='description'/>
                        <br/>
                    </div>
                )
            }
            <br/>
            <AddButton setDisplay={setDisplay}/>
        </div>
    );
}

export default Tasks;