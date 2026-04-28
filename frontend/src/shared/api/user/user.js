import { SERVER_URL } from '/config_data';
//import { headers } from ''

const userAPI = {
    APIGetCSRFToken: async () => {
        const response = await fetch(`${SERVER_URL}/api/csrf_token`, {
            method: 'GET',
            credentials: 'include',  // Важно для получения cookie
        });
        return response;
    },

    APISendFeedback: async (data, csrfToken) => {
        return fetch(`${SERVER_URL}/api/user/send_feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken,  // Отправляем токен в заголовке
            },
            credentials: 'include',  // Важно для отправки cookie
            body: JSON.stringify(data),
        });
    },
};

export default userAPI;