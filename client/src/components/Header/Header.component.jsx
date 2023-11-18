// CSS 
import './Header.style.css';

function Header() {
    return(
        <header>
            <text className='header-blank'></text>
            <h1>Employee Tracker</h1>
            <text className='header-logout'>Logout</text>
        </header>
    );
}

export default Header;