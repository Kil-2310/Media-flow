import type { Metadata } from 'next';

import UserData from '@/entities/ui/UserData';

export const metadata: Metadata = {
    title: 'Отзывы',
    description: 'Страница с отзывами пользователей',
};

export default function ReviewsPage() {
    return (
        <>
            <UserData />
        </>
    );
}
