// CSS 
import './Header.style.css';

// util
import removeCookie from './Header.util';

function Header() {
    function handleLogout(e) {
        e.preventDefault();
        removeCookie();
    }

    return(
        <header>
            <text className='header-blank'>Logout</text>
            <h1>Employee Tracker</h1>
            <text className='header-logout' onClick={handleLogout}>Logout</text>
        </header>
    );
}

export default Header;