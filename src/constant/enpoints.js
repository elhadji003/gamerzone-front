const BASE_URL = 'http://127.0.0.1:8000/api/users/';

const ENDPOINTS = {
    BASE_URL,

    // Auth
    REGISTER: 'register/',
    LOGIN: 'login/',
    Me: 'me/',
    LOGOUT: 'logout/',
    DELETE_USER: 'delete/',

    // Users
    USERS: 'users/',
    USER_BY_ID: (id) => `user/${id}/`,
    UPDATE_PROFILE: (id) => `updateProfileUser/${id}/`,

    // Password
    RESET_PASSWORD: 'reset-password/',
    RESET_PASSWORD_CONFIRM: (uidb64, token) => `reset/${uidb64}/${token}/`,
};

export default ENDPOINTS;
