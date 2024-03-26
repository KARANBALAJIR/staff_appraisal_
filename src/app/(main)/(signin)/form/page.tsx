"use client"
import React, { useState } from 'react'

const UserDetailsforms = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        department: "",
        qualifications: "",
        currentDesignation: "",
        teachingExperience: "",
    });


    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    };


    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(formData);
    };
    
  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto bg-white shadow-md rounded-md px-8 pt-6 pb-8 m-4'>
        <div className='mb-4'>
            <label className='block mb-2 '>
                First Name:
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-300 focus:ring-opacity-50'/>
            </label>
        </div>
        
        <div className='mb-4'>
            <label className='block mb-2'> 
                Last Name:
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-300 focus:ring-opacity-50'/>
            </label>
        </div>

        <div className='mb-4'>
            <label className='block mb-2'>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-300 focus:ring-opacity-50'/>
            </label>
        </div>

        <div className='mb-4'>
            <label className='block mb-2'>
            Department:
            <select name="department" value={formData.department} onChange={handleChange} className= 'form-select mt-2 block w-full border-gray-300 rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-300 focus:ring-opacity-50'>
                <option value="">Select Department</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="MECH">MECH</option>
                <option value="IT">IT</option>
                <option value="AIML">AIML</option>
            </select>
            </label>
        </div>

        <div className='mb-4'>
            <label className='block mb-2'>
            Qualifications:
            <input type="text" name="qualifications" value={formData.qualifications} onChange={handleChange} className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-300 focus:ring-opacity-50' />
            </label>
        </div>
        
        <div className='mb-4'>
            <label className='block mt-4'>
                Current Designation:
            </label>
            <div>
                <label className='inline-flex items-center'>
                    <input type="radio" name="currentDesignation" value="Professor" onChange={handleChange} className ="form-radio mt-1 block w-full border-gray-300 rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-300 focus:ring-opacity-50" />  
                    <span className='ml-2'>Professor</span>
                </label>

                <label className='inline-flex items-center ml-20'>
                    <input type="radio" name="currentDesignation" value="Associate Professor" onChange={handleChange} className='form-radio mt-1 block-w-full border-gray-300 rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-300 focus:ring-opacity-50'/>
                    <span className='ml-2 flex-grow'>Associate Professor</span>
                </label>    

                <label className='inline-flex items-center '>
                    <input type="radio" name="currentDesignation" value="Assistant Professor" onChange={handleChange} className='form-radio mt-1 block-w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-300 focus:ring-opacity-50'/>
                    <span className='ml-2'>Assistant Professor</span>
                </label>
            </div>
        </div>

        <div className='mb-4'>
            <label className='block mb-2'>
                Teaching Experience:
                <input type="text" name="teachingExperience" value={formData.teachingExperience} onChange={handleChange} className='form-input mt-1 block w-full border-gray-300 rounded-md shadow-md focus:border-indigo-300 focus:ring-indigo-300 foucus:ring-opacity-50 pr-12'/>
            </label>
             {/* <button type="button" onClick={handleCountIncrease} className='btn bg-blue-500 hover:bg-bg-blue-70 text-white font-bold py-2 px-4 rounded'>+</button> */}
        </div> 

        <div className='ml-36'>
            <button type="submit" className='btn bg-blue-500 hover:bg-bg-blue-70 text-white font-bold py-2 px-4 rounded'>Submit</button>
        </div>
    </form>
  )
}

export default UserDetailsforms
    