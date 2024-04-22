"use client";
import axios from 'axios';
import { getCookie } from '@/services/cookie.service';
import toast, { Toaster, ToastBar } from 'react-hot-toast';
import Loading from '@/components/Loading';
import DeleteUser from './DeleteUser';
import React, { useState, useEffect } from 'react';
import SearchBar from '@/app/(main)/(signin)/user-management/SearchBar';
import DepartmentFilter from '@/app/(main)/(signin)/user-management/DepartmentFilter';
import DesignationFilter from '@/app/(main)/(signin)/user-management/DesignationFilter';
import RoleFilter from '@/app/(main)/(signin)/user-management/RoleFilter';


interface User {
    id: number;
    username: string;
    email: string;
    department: string;
    designation: string;
    status: string;
    role: string;
    avatar: string;
}

interface deleteUserInterface{
    show: boolean;
    username: string;
    email: string;
}

const AdminDashboard: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [editUser, setEditUser] = useState<User | null>(null);
    const [editFormData, setEditFormData] = useState<User>({
        id: 0,
        username: '',
        email: '',
        department: '',
        designation: '',
        status: '',
        role: '',
        avatar: ''
    });

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [departmentFilter, setDepartmentFilter] = useState<string>('');
    const [designationFilter, setDesignationFilter] = useState<string>('');
    const [roleFilter, setRoleFilter] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [tableDataLoading, setTableDataLoading] = useState<boolean>(true);
    const [deleteUserPopUP, setDeleteUserPopUP] = useState<deleteUserInterface>({
        show: false,
        username: '',
        email: '',
    });
    const [isAddUser, setIsAddUser] = useState(false);


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

    const handleAddFormSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try{
            const token = getCookie('usertoken')
            const response = await axios.post('/api/user/admin',editFormData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Custom-Header': 'Custom-Value'
                    },
                }
            )
            if(response.data.success){
                toast.success('user created successfully!', {
                    duration: 2000,
                    position: 'top-right',
                    icon: '✅',
                    iconTheme: {
                        primary: '#000',
                        secondary: '#fff',
                    },
                    ariaProps: {
                        role: 'status',
                        'aria-live': 'polite',
                    },
                });
                console.log(users);
                setUsers([...users, editFormData])
            }
            else{
                console.log(response);
                toast.error(response.data.message, {
                    duration: 2000,
                    position: 'top-right',
                    style: {
                        minWidth: '250px',
                        minHeight: '60px',
                    },
                });
            }
        }
        catch(err: any){
            console.log(err);
            toast.error(err.response.data.message, {
                duration: 2000,
                position: 'top-right',
                style: {
                    minWidth: '250px',
                    minHeight: '60px',
                },
            });
        }
        setEditUser(null);
        setIsAddUser(false);
        setLoading(false)
    }

    const handleEditFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try{
            const token = getCookie('usertoken')
            const response = await axios.patch('/api/user/admin', editFormData,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Custom-Header': 'Custom-Value'
                },
            })
            if(response.status === 201){
                toast.success('user updated successfully!', {
                    duration: 2000,
                    position: 'top-right',
                    icon: '✅',
                    iconTheme: {
                        primary: '#000',
                        secondary: '#fff',
                    },
                    ariaProps: {
                        role: 'status',
                        'aria-live': 'polite',
                    },
                });
                const updatedUsers = users.map(user => {
                    console.log("user : ",user);
                    console.log("editdata : ",editFormData);
                    if (user.email === editFormData.email) {
                        return editFormData;
                    }
                    return user;
                });
                setUsers(updatedUsers);
            }
            else{
                toast.error(response.data.message, {
                    duration: 2000,
                    position: 'top-right',
                    style: {
                        minWidth: '250px',
                        minHeight: '60px',
                    },
                });
            }
        }
        catch (err: any) {
            toast.error("invaid credentials", {
                duration: 2000,
                position: 'top-right',
                style: {
                    minWidth: '250px',
                    minHeight: '60px',
                },
            });
        }
        setEditUser(null);
        setLoading(false);
    };

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
        if(isAddUser){
            handleAddFormSubmit(e);
        }
        else{
            handleEditFormSubmit(e);
        }
    }

    const getStatusColor = (status: string) => {
        return status === 'ACTIVE' ? 'text-green-500' : 'text-red-500';
    };

    const handleDeleteUser = async (user: deleteUserInterface) => {
        setLoading(true);
        try{
            const token = getCookie('usertoken')
            const response = await axios.delete(`/api/user/admin?email=`+user.email,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Custom-Header': 'Custom-Value'
                },
            })
            if(response.status === 200){
                toast.success('user Deleted successfully!', {
                    duration: 2000,
                    position: 'top-right',
                    icon: '✅',
                    iconTheme: {
                        primary: '#000',
                        secondary: '#fff',
                    },
                    ariaProps: {
                        role: 'status',
                        'aria-live': 'polite',
                    },
                });
            }
            else{
                toast.error(response.data.message, {
                    duration: 2000,
                    position: 'top-right',
                    style: {
                        minWidth: '250px',
                        minHeight: '60px',
                    },
                });
            }
        }
        catch (err: any) {
            toast.error(err.message, {
                duration: 2000,
                position: 'top-right',
                style: {
                    minWidth: '250px',
                    minHeight: '60px',
                },
            });
        }
        setDeleteUserPopUP({
            show: false,
            username: '',
            email: '',
        })
        const updatedUsers = users.filter(u => u.email !== user.email);
        setUsers(updatedUsers);
        setLoading(false);
    };

    const handleAddUser = () => {
        const newUser: User = {
            id: users.length + 1,
            username: '',
            email: '',
            department: 'NONE',
            designation: 'NONE',
            status: 'ACTIVE',
            role: 'ANONYMOUS',
            avatar: ''
        };
        // setUsers(prevUsers => [...prevUsers, newUser]);   // This will add new user to the end of the list when i click on add user button // This is not required
        setEditUser(newUser);
        setEditFormData(newUser);
    };

    const filteredUsers = users.filter(user =>
        (user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.status.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (departmentFilter === '' || user.department === departmentFilter) &&
        (designationFilter === '' || user.designation === designationFilter) &&
        (roleFilter === '' || user.role === roleFilter)
    );

    const fetchUsers = async() =>{
        try{
            const token = getCookie('usertoken')
            const response = await axios.get('/api/user/admin', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Custom-Header': 'Custom-Value'
                }
            })
            setUsers(response.data.message)
        }
        catch(err : any){
            console.log(err.message);
        }
    }

    useEffect(()=>{
        fetchUsers();
        setTableDataLoading(false);
    },[])

    return (
        <div className="mx-auto p-4 relative h-full ">
            <Toaster reverseOrder={false} gutter={8} />
            <h1 className="text-2xl font-bold mb-4">Admin</h1>
            <div className="mb-4 flex flex-row justify-between">
                <div className="flex flex-row gap-x-[16px]">
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <DepartmentFilter departmentFilter={departmentFilter} setDepartmentFilter={setDepartmentFilter} />
                    <DesignationFilter designationFilter={designationFilter} setDesignationFilter={setDesignationFilter}/>
                    <RoleFilter roleFilter={roleFilter} setRoleFilter={setRoleFilter}/>
                </div>
                <div>

                </div>
            </div>
            <button className="absolute top-4 right-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-1" onClick={()=>{
                setIsAddUser(true)
                handleAddUser()
            }}>Add User</button>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2 px-1 border border-gray-300 ">Serial No</th>
                        <th className="py-2 px-1 border border-gray-300 ">Name</th>
                        <th className="py-2 px-1 border border-gray-300 ">Email</th>
                        <th className="py-2 px-1 border border-gray-300 ">
                            Department
                        </th>
                        <th className="py-2 px-1 border border-gray-300 ">
                            Designation
                            
                        </th>
                        <th className="py-2 px-1 border border-gray-300 ">
                            Role
                        </th>
                        <th className="py-2 px-1 border border-gray-300 ">Status</th>
                        <th className="py-2 px-1 border border-gray-300 ">Actions</th>
                    </tr>
                </thead>
                <tbody className='text-[14px]'>
                    {filteredUsers.map((user, index) => (
                        <tr key={index}>
                            <td className="py-2 px-1 border-b border-gray-300 text-center">{index + 1}</td>
                            <td className="py-2 px-1 border-b border-gray-300 text-center">{user.username}</td>
                            <td className="py-2 px-1 border-b border-gray-300 text-center">{user.email}</td>
                            <td className="py-2 px-1 border-b border-gray-300 text-center">{user.department}</td>
                            <td className="py-2 px-1 border-b border-gray-300 text-center">{user.designation}</td>
                            <td className="py-2 px-1 border-b border-gray-300 text-center">{user.role}</td>
                            <td className={`py-2 px-1 border-b border-gray-300 text-center ${getStatusColor(user.status)}`}>{user.status}</td>
                            <td className="py-2 px-1 border-b border-gray-300 text-center">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2" onClick={() => handleEditClick(user)}>Edit</button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => {
                                    setDeleteUserPopUP({
                                        show: true,
                                        username: user.username,
                                        email: user.email
                                    })
                                }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {
                (deleteUserPopUP.show && (
                    <DeleteUser 
                        userData = {deleteUserPopUP}
                        loading = {loading}
                        setDeleteUserPopUP = {setDeleteUserPopUP}
                        handleDeleteUser = {handleDeleteUser}
                    />
                ))
            }
            {editUser && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
                        <h2 className="text-lg font-bold mb-4">User Form</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-2">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                <input type="text" id="username" name="username" placeholder='Enter Username' value={editFormData.username} onChange={handleEditFormChange} className="block w-full border border-gray-300 rounded px-2 py-1 mb-2" />
                            </div>
                            <div className="mb-2">
                                {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label> */}
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                                <input type="email" id="email" name="email" placeholder='Enter mail id' value={editFormData.email} onChange={handleEditFormChange} className="block w-full border border-gray-300 rounded px-2 py-1 mb-2" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                                <select id="department" name="department" value={editFormData.department} onChange={handleEditFormChange} className="block w-full border border-gray-300 rounded px-2 py-1 mb-2">
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
                            </div>
                            <div className="mb-2">
                                <label htmlFor="designation" className="block text-sm font-medium text-gray-700">Designation</label>
                                <select id="designation" name="designation" value={editFormData.designation} onChange={handleEditFormChange} className="block w-full border border-gray-300 rounded px-2 py-1 mb-2">
                                    <option value="NONE">Select Option</option>
                                    <option value="ASSISTANT_PROFESSOR">Assistant Professor</option>
                                    <option value="ASSOCIATE_PROFESSOR">Associate Professor</option>
                                    <option value="PROFESSOR">Professor</option>
                                </select>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                                <select id="role" name="role" value={editFormData.role} onChange={handleEditFormChange} className="block w-full border border-gray-300 rounded px-2 py-1 mb-2">
                                    <option value="Select Option">Select Option</option>
                                    <option value="ANONYMOUS">Anonymous</option>
                                    <option value="ADMIN">Admin</option>
                                    <option value="HOD">HOD</option>
                                    <option value="MASTER">Master</option>
                                    <option value="STAFF">Staff</option>
                                </select>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                                <select id="status" name="status" value={editFormData.status} onChange={handleEditFormChange} className="block w-full border border-gray-300 rounded px-2 py-1 mb-2">
                                    <option value="ACTIVE" style={{ color: 'green' }}>ACTIVE</option>
                                    <option value="INACTIVE" style={{ color: 'yellow' }}>INACTIVE</option>
                                    <option value="BANNED" style={{ color: 'red' }}>BANNED</option>
                                </select>
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-md mr-2 w-24">
                                    {(loading === false) ? 'Update' : <i className="fa fa-circle-o-notch fa-spin"></i>}
                                </button>
                                <button onClick={() => setEditUser(null)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-md">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;