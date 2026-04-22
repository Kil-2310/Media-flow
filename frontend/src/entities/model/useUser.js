import { useCallback } from "react";
import { userAPI } from '@/shared/api';

const useUser = () => {
    const sendFeedback = useCallback(async (content, email, setIsSubmitting) => {
        const formData = {
            email: email,
            content: content
        }

        try {
            const response = await userAPI.APISendFeedback(formData);
            console.log('✅ Feedback sent successfully', response);
        } catch (error) {
            console.error('❌ Failed to send feedback:', error);
        } finally {
            setIsSubmitting(false);
        }
    }, [])
    
    return {
        sendFeedback
    }
}

export default useUser;