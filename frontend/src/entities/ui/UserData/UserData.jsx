'use client';

import { useState } from 'react';
import styles from './UserData.module.scss';
import Button from '@/shared/ui/Button';

const UserData = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitForm = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                e.target.reset();
                alert('Сообщение успешно отправлено!');
            } else {
                alert('Ошибка отправки');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={submitForm} className={`${styles.form}`}>
            <textarea name="message" placeholder="Текст комментария ..." required></textarea>

            <input type="hidden" name="access_key" value="2f1f0478-ef9d-4435-9275-32265dc800bd" />

            <div className={`${styles.form__markup_buttons}`}>
                <Button className={'blue_button'} type={'submit'} isDisabled={isSubmitting}>
                    {isSubmitting ? 'Отправка...' : 'Отправить'}
                </Button>

                <Button className={'blue_button'} type={'reset'}>
                    Очистить
                </Button>
            </div>
        </form>
    );
};

export default UserData;
