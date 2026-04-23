'use client';

import { useState } from 'react';
import styles from './UserData.module.scss';
import Button from '@/shared/ui/Button';
import useUser from '@/entities/model/useUser';

const UserData = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { sendFeedback } = useUser();

    const submitForm = async (e) => {
        e.preventDefault();

        const email = e.target.email.value || '';
        const content = e.target.content.value;

        console.log(content);

        await sendFeedback(content, email, setIsSubmitting);
    };

    return (
        <form onSubmit={submitForm} className={`${styles.form}`}>
            <h1>Форма обратной связи</h1>

            <div>
                <label htmlFor="email" className="form-label">
                    Электронная почта (необязательно):{' '}
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    name="email"
                />
            </div>

            <div>
                <label htmlFor="content" className="form-label">
                    Ваш комментарий:{' '}
                </label>
                <textarea
                    className="form-control"
                    id="content"
                    rows="3"
                    name="content"
                    required
                ></textarea>
            </div>

            <div>
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
