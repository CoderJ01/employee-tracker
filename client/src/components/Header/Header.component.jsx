// CSS 
import './Header.style.css';

// util
import removeCookie from './Header.util';

function Header({ user }) {
    function handleLogout(e) {
        e.preventDefault();
        removeCookie();
    }

    console.log(user);

    return(
        <header>
            {
                user.length === 0 ? 
                (
                    <>
                    <div className='header-blank-login'>
                        <text className='header-logout header-blank'>Register</text>
                        <text className='header-logout header-blank'>Login</text>
                    </div>
                    <h1>Employee Tracker</h1>
                    <div className='header-login'>
                        <a href={`${import.meta.env.VITE_CLIENT_URL}/register`} className='header-logout'>Register</a>
                        <a href={`${import.meta.env.VITE_CLIENT_URL}/login`} className='header-logout'>Login</a>
                    </div>
                    </>
                ) : 
                (
                    <>
                    <text className='header-blank-logout header-blank'>Logout</text>
                    <div className='header-greet'>
                        <h1>Employee Tracker</h1>
                        <text>Hello, <span style={{ fontStyle: 'italic' }}>{user?.username}</span></text>
                    </div>
                    <text className='header-logout' onClick={handleLogout}>Logout</text>
                    </>
                )
            }
        </header>
    );
}

export default Header;