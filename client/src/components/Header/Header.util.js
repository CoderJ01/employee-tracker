import cookie from 'js-cookie';

export default function removeCookie(e) {
    e.preventDefault();
    cookie.remove('employee-tracker-cookie');
    window.location.reload(false);
}