import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, deleteUser, updateUser } from '../Redux/userSlice';
import { Navbar } from './Navbar';

export const Home = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const [editingUser, setEditingUser] = useState(null);
    const [editForm, setEditForm] = useState({
        name: '',
        email: ''
    });
    
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    
    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    const handleEdit = (user) => {
        setEditingUser(user._id);
        setEditForm({
            name: user.name,
            email: user.email
        });
    };

    const handleUpdate = async (id) => {
        await dispatch(updateUser({ id, userData: editForm }));
        setEditingUser(null);
        setEditForm({ name: '', email: '' });
    };

    const handleCancel = () => {
        setEditingUser(null);
        setEditForm({ name: '', email: '' });
    };
    
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-6">User List</h2>
                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                        <ul className="divide-y divide-gray-200">
                            {users.map((user) => (
                                <li key={user._id} className="px-6 py-4">
                                    {editingUser === user._id ? (
                                        <div className="flex flex-col space-y-4">
                                            <input
                                                type="text"
                                                value={editForm.name}
                                                onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                                                className="border rounded-md px-3 py-2 text-sm"
                                                placeholder="Name"
                                            />
                                            <input
                                                type="email"
                                                value={editForm.email}
                                                onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                                                className="border rounded-md px-3 py-2 text-sm"
                                                placeholder="Email"
                                            />
                                            <div className="flex space-x-4">
                                                <button
                                                    onClick={() => handleUpdate(user._id)}
                                                    className="bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600 transition duration-150 ease-in-out"
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    onClick={handleCancel}
                                                    className="bg-gray-500 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-600 transition duration-150 ease-in-out"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-between">
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-indigo-600 truncate">{user.name}</p>
                                                <p className="text-sm text-gray-500 truncate">{user.email}</p>
                                            </div>
                                            <div className="ml-4 flex space-x-4 flex-shrink-0">
                                                <button
                                                    onClick={() => handleEdit(user)}
                                                    className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(user._id)}
                                                    className="font-medium text-red-600 hover:text-red-500 transition duration-150 ease-in-out"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};