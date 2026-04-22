import { NEXT_PUBLIC_SERVER_URL, headers } from '@/shared/api/apiClient.js'

const userAPI = {
    APISendFeedback: async (data) => {

        return fetch(`${NEXT_PUBLIC_SERVER_URL}/api/user/send_feedback`, {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
    }
}

export default userAPI
