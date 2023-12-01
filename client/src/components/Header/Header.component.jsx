// CSS 
import './Header.style.css';

// util
import removeCookie from './Header.util';

function Header({ user }) {
    function handleLogout(e) {
        e.preventDefault();
        removeCookie();
    }

    return(
        <header>
            {
                user.length === 0 ? 
                (
                    <>
                    <text className='header-blank'>Login</text>
                    <h1>Employee Tracker</h1>
                    <a href={`${import.meta.env.VITE_CLIENT_URL}/login`}className='header-logout'>Login</a>
                    </>
                ) : 
                (
                    <>
                    <text className='header-blank'>Logout</text>
                    <h1>Employee Tracker</h1>
                    <text className='header-logout' onClick={handleLogout}>Logout</text>
                    </>
                )
            }
        </header>
    );
}

export default Header;