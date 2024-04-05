"use client";
import React, { useState } from 'react';
import SearchBar from '@/app/(main)/(signin)/admin/(default)/SearchBar';


interface User {
    id: number;
    name: string;
    email: string;
    department: string;
    designation: string;
    status: string;
    role: string;
    avatar: string;
}

const AdminDashboard: React.FC = () => {
    const [users, setUsers] = useState < User[] > ([
        { id: 1, name: 'Karan', email: 'karan@example.com', department: 'CSE', designation: 'Assistant Professor', status: 'Active', role: 'Admin', avatar: 'https://example.com/avatar1.jpg' },
        { id: 2, name: 'CIBI', email: 'cibi@example.com', department: 'CSE', designation: 'Professor', status: 'Active', role: 'User', avatar: 'https://example.com/avatar2.jpg' },
        { id: 3, name: 'CIBI', email: 'cibi@example.com', department: 'CSE', designation: 'Professor', status: 'Active', role: 'User', avatar: 'https://example.com/avatar2.jpg' },
        { id: 4, name: 'CIBI', email: 'cibi@example.com', department: 'CSE', designation: 'Professor', status: 'Active', role: 'User', avatar: 'https://example.com/avatar2.jpg' },
        { id: 5, name: 'CIBI', email: 'cibi@example.com', department: 'CSE', designation: 'Professor', status: 'Active', role: 'User', avatar: 'https://example.com/avatar2.jpg' },
        { id: 6, name: 'CIBI', email: 'cibi@example.com', department: 'CSE', designation: 'Professor', status: 'Active', role: 'User', avatar: 'https://example.com/avatar2.jpg' },
        { id: 7, name: 'CIBI', email: 'cibi@example.com', department: 'CSE', designation: 'Professor', status: 'Active', role: 'User', avatar: 'https://example.com/avatar2.jpg' },
        { id: 8, name: 'CIBI', email: 'cibi@example.com', department: 'CSE', designation: 'Professor', status: 'Active', role: 'User', avatar: 'https://example.com/avatar2.jpg' },
        { id: 9, name: 'CIBI', email: 'cibi@example.com', department: 'CSE', designation: 'Professor', status: 'Active', role: 'User', avatar: 'https://example.com/avatar2.jpg' },
    ]);

    const [editUser, setEditUser] = useState < User | null > (null);
    const [editFormData, setEditFormData] = useState < User > ({
        id: 0,
        name: '',
        email: '',
        department: '',
        designation: '',
        status: '',
        role: '',
        avatar: ''
    });

    const [searchTerm, setSearchTerm] = useState < string > ('');
    const [departmentFilter, setDepartmentFilter] = useState < string > ('');
    const [designationFilter, setDesignationFilter] = useState < string > ('');
    const [roleFilter, setRoleFilter] = useState < string > ('');

    const handleEditClick = (user: User) => {
        setEditUser(user);
        setEditFormData(user);
    };

    const handleEditFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEditFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEditFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const updatedUsers = users.map(user => {
            if (user.id === editFormData.id) {
                return editFormData;
            }
            return user;
        });

        setUsers(updatedUsers);
        setEditUser(null);
    };

    const getStatusColor = (status: string) => {
        return status === 'Active' ? 'text-green-500' : 'text-red-500';
    };

    const handleDeleteUser = (user: User) => {
        const updatedUsers = users.filter(u => u.id !== user.id);
        setUsers(updatedUsers);
    };

    const handleAddUser = () => {
        const newUser: User = {
            id: users.length + 1,
            name: 'New User',
            email: '',
            department: '',
            designation: '',
            status: '',
            role: '',
            avatar: ''
        };
        setUsers(prevUsers => [...prevUsers, newUser]);
        setEditUser(newUser);
        setEditFormData(newUser);
    };

    const filteredUsers = users.filter(user =>
        (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.status.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (departmentFilter === '' || user.department === departmentFilter) &&
        (designationFilter === '' || user.designation === designationFilter) &&
        (roleFilter === '' || user.role === roleFilter)
    );

    return (
        <>
            <div className="relative">
                <h1 className="text-2xl font-bold mb-[16px]">Admin Dashboard</h1>
                <div className="mb-4 w-64">
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 
                </div>
                <button className="absolute top-4 right-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2" onClick={handleAddUser}>Add User</button>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-1 border border-gray-300 w-16">Serial No</th>
                            <th className="py-2 px-1 border border-gray-300 w-32">Name</th>
                            <th className="py-2 px-1 border border-gray-300 w-32">Email</th>
                            <th className="py-2 px-1 border border-gray-300 w-32">Department</th>
                            <th className="py-2 px-1 border border-gray-300 w-32">Designation</th>
                            <th className="py-2 px-1 border border-gray-300 w-32">Role</th>
                            <th className="py-2 px-1 border border-gray-300 w-24">Status</th>
                            <th className="py-2 px-1 border border-gray-300 w-32">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user, index) => (
                            <tr key={user.id}>
                                <td className="py-2 px-1 border-b border-gray-300 text-center">{index + 1}</td> {/* Serial number */}
                                <td className="py-2 px-1 border-b border-gray-300 text-center">{user.name}</td>
                                <td className="py-2 px-1 border-b border-gray-300 text-center">{user.email}</td>
                                <td className="py-2 px-1 border-b border-gray-300 text-center">{user.department}</td>
                                <td className="py-2 px-1 border-b border-gray-300 text-center">{user.designation}</td>
                                <td className="py-2 px-1 border-b border-gray-300 text-center">{user.role}</td>
                                <td className={`py-2 px-1 border-b border-gray-300 text-center ${getStatusColor(user.status)}`}>{user.status}</td>
                                <td className="py-2 px-1 border-b border-gray-300 text-center">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2" onClick={() => handleEditClick(user)}>Edit</button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleDeleteUser(user)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {editUser && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
                            <h2 className="text-lg font-bold mb-4">Edit User</h2>
                            <form onSubmit={handleEditFormSubmit}>
                                <input type="text" name="name" value={editFormData.name} onChange={handleEditFormChange} className="block w-full border border-gray-300 rounded px-2 py-1 mb-2" />
                                <input type="text" name="email" value={editFormData.email} onChange={handleEditFormChange} className="block w-full border border-gray-300 rounded px-2 py-1 mb-2" />
                                <select name="department" value={editFormData.department} onChange={handleEditFormChange} className="block w-full border border-gray-300 rounded px-2 py-1 mb-2">
                                    <option value="Select Option">Select Option</option>
                                    <option value="CSE">CSE</option>
                                    <option value="ECE">ECE</option>
                                    <option value="EEE">EEE</option>
                                    <option value="IT">IT</option>
                                    <option value="MECH">MECH</option>
                                    <option value="CCE">CCE</option>
                                    <option value="AIML">AIML</option>
                                    <option value="AIDS">AIDS</option>
                                </select>
                                <select name="designation" value={editFormData.designation} onChange={handleEditFormChange} className="block w-full border border-gray-300 rounded px-2 py-1 mb-2">
                                    <option value="Select Option">Select Option</option>
                                    <option value="Assistant Professor">Assistant Professor</option>
                                    <option value="Associate Professor">Associate Professor</option>
                                    <option value="Professor">Professor</option>
                                </select>
                                <select name="role" value={editFormData.role} onChange={handleEditFormChange} className="block w-full border border-gray-300 rounded px-2 py-1 mb-2">
                                    <option value="Select Option">Select Option</option>
                                    <option value="Anonymous">Anonymous</option>
                                    <option value="Admin">Admin</option>
                                    <option value="HOD">HOD</option>
                                    <option value="Staff">Staff</option>
                                </select>
                                <select name="status" value={editFormData.status} onChange={handleEditFormChange} className="block w-full border border-gray-300 rounded px-2 py-1 mb-2">
                                    <option value="Active" style={{ color: 'green' }}>Active</option>
                                    <option value="Suspended" style={{ color: 'red' }}>Suspended</option>
                                </select>
                                <div className="flex justify-center">
                                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">Save</button>
                                    <button onClick={() => setEditUser(null)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};


export default AdminDashboard;