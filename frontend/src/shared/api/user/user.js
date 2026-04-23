import { headers } from '@/shared/api/apiClient.js'
import { SERVER_URL } from '/config_data'

const userAPI = {
    APISendFeedback: async (data) => {

        console.log('is', SERVER_URL)

        return fetch(`${SERVER_URL}/api/user/send_feedback`, {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
    }
}

export default userAPI
