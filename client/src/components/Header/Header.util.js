import cookie from 'js-cookie';

export default function removeCookie() {
    cookie.remove('employee-tracker-cookie');
    window.location.reload(false);
}