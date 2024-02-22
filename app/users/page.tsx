'use client';
import { signOut } from 'next-auth/react';
import EmptyState from '../components/EmptyState';

const Users = () => {
    return (
        <div className="hidden lg:block lg:pl-80 h-full">
            <EmptyState />
            <button onClick={() => signOut()}>Logout</button>
        </div>
    );
};

export default Users;
