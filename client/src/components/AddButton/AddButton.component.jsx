// CSS
import './AddButton.style.css';

function AddButton({ setDisplay }) {
    return (
        <div className='add-button'>
            <i className='fa fa-plus-circle' onClick={() => setDisplay(true)}></i>
        </div>
    );
}

export default AddButton;