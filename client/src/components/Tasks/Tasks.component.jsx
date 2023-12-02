// React
import { useState } from 'react';

// CSS
import './Tasks.style.css';

// util 
import { trackInput, processSubmission, deleteTask } from './Tasks.util';

// components
import AddButton from '../AddButton/AddButton.component';
import Trashcan from '../Trashcan/Trashcan.component';

function Tasks({ user }) {
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
            {
                user?.tasks?.map(task => {
                    return (
                        <div className='task'>
                            <h2>{task.title}</h2>
                            <p>{task.description}</p>
                            <p>{task.dateCreated.substring(0, 10)}</p>
                            <div className='task-delete' onClick={() => deleteTask(task.id)}>
                                <Trashcan/>
                            </div>
                            <br/>
                        </div>
                    )
                })
            }
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