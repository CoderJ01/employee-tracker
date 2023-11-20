// React
import { useState } from 'react';

// CSS
import './Tasks.style.css';

// util 
import { trackInput, processSubmission } from './Tasks.util';

// components
import AddButton from '../AddButton/AddButton.component';

function Tasks() {
    const [display, setDisplay] = useState(false);
    const [formState, setFormState] = useState({ title: '', description: '' });
    const [errorText, setErrorText] = useState('');

    function handleChange(e) {
        trackInput(e, formState, setFormState)
    }

    function handleSubmit(e) {
        e.preventDefault();
        processSubmission(e, formState, setErrorText);
    }

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
                        <input maxLength={20} type='text' name='title' onChange={handleChange}/>
                        <br/>
                        <p style={{ fontWeight: 'bold' }}>Description:</p>
                        <textarea maxLength={200} name='description' onChange={handleChange}/>
                        <br/>
                        <div className='task-submit-button' onClick={handleSubmit}>
                            <button>Submit</button>
                        </div>
                        <text style={{ color: 'red', fontWeight: 'bold'}}>{errorText}</text>
                    </div>
                )
            }
            <br/>
            <AddButton setDisplay={setDisplay}/>
        </div>
    );
}

export default Tasks;