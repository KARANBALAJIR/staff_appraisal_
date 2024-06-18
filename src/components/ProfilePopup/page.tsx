import React, { useState } from 'react';

const ProfilePopup: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        designation: '',
        department: '',
        gender: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleClose = () => {
        console.log('Form closed');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit} style={{ backgroundColor: 'transparent', boxShadow: '0px 10px 30px rgba(0,0,0,0.2)', borderRadius: '16px', padding: '32px', maxWidth: '600px', width: '100%' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px', textAlign: 'center', position: 'relative' }}>Staff Details
                    {/* <button
                        onClick={handleClose} 
                        className="absolute bottom-6 m-2 ml-48 mt-0  text-gray-500 hover:text-gray-700 focus:outline-none rounded-full border border-gray-400 p-1 hover:border-gray-700 transition-colors duration-300"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button> */}
                </h2>
                <div style={{ marginBottom: '16px', position: 'relative' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                        <span style={{ padding: '0 8px', color: '#4a5568', fontSize: '0.875rem', fontWeight: '800', position: 'absolute', top: '-9px', left: '9px', backgroundColor: '#f7fafc', borderRadius: '8px 8px 0 0' }}>Name {formData.name === '' && <span style={{ color: 'red' }}>*</span>}</span>
                        <input 
                            type="text" 
                            id="name"
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                            style={{ padding: '12px 16px', fontSize: '1.125rem', color: '#4a5568', borderRadius: '16px', border: '2px solid #cbd5e0', paddingLeft:'36px' }}
                            placeholder="Enter name"
                        />
                    </div>
                </div>
                <div style={{ marginBottom: '16px', position: 'relative' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                        <span style={{ padding: '0 8px', color: '#4a5568', fontSize: '0.875rem', fontWeight: '800', position: 'absolute', top: '-9px', left: '9px', backgroundColor: '#f7fafc', borderRadius: '8px 8px 0 0' }}>Phone {formData.phone === '' && <span style={{ color: 'red' }}>*</span>}</span>
                        <input 
                            type="tel" 
                            id="phone"
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            onKeyPress={(e) => {
                                const charCode = e.which ? e.which : e.keyCode;
                                if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                                    e.preventDefault();
                                }
                            }}
                            required 
                            style={{ padding: '12px 16px', fontSize: '1.125rem', color: '#4a5568', borderRadius: '16px', border: '2px solid #cbd5e0' }}
                            placeholder="Enter phone"
                        />
                    </div>
                </div>
                <div style={{ marginBottom: '16px', position: 'relative' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                        <span style={{ padding: '0 8px', color: '#4a5568', fontSize: '0.875rem', fontWeight: '800', position: 'absolute', top: '-9px', left: '9px', backgroundColor: '#f7fafc', borderRadius: '8px 8px 0 0' }}>Designation {formData.designation === '' && <span style={{ color: 'red' }}>*</span>}</span>
                        <select 
                            id="designation"
                            name="designation" 
                            value={formData.designation} 
                            onChange={handleChange} 
                            required 
                            style={{ padding: '12px 16px', fontSize: '1.125rem', color: '#4a5568', borderRadius: '16px', border: '2px solid #cbd5e0' }}
                        >
                            <option value="">Select Designation</option>
                            <option value="ASSISTANT PROFESSOR">ASSISTANT PROFESSOR</option>
                            <option value="ASSOCIATE PROFESSOR">ASSOCIATE PROFESSOR</option>
                            <option value="PROFESSOR">PROFESSOR</option>
                        </select>
                    </div>
                </div>
                <div style={{ marginBottom: '16px', position: 'relative' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                        <span style={{ padding: '0 8px', color: '#4a5568', fontSize: '0.875rem', fontWeight: '800', position: 'absolute', top: '-9px', left: '9px', backgroundColor: '#f7fafc', borderRadius: '8px 8px 0 0' }}>Department {formData.department === '' && <span style={{ color: 'red' }}>*</span>}</span>
                        <select 
                            id="department"
                            name="department" 
                            value={formData.department} 
                            onChange={handleChange} 
                            required 
                            style={{ padding: '12px 16px', fontSize: '1.125rem', color: '#4a5568', borderRadius: '16px', border: '2px solid #cbd5e0' }}
                        >
                            <option value="">Select Department</option>
                            <option value="CSE">CSE</option>
                            <option value="IT">IT</option>
                            <option value="CCE">CCE</option>
                            <option value="ECE">ECE</option>
                            <option value="EEE">EEE</option>
                            <option value="AIDS">AIDS</option>
                            <option value="AIML">AIML</option>
                            <option value="MECH">MECH</option>
                        </select>
                    </div>
                </div>
                <div style={{ marginBottom: '16px', position: 'relative' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                        <span style={{ padding: '0 8px', color: '#4a5568', fontSize: '0.875rem', fontWeight: '800', position: 'absolute', top: '-9px', left: '9px', backgroundColor: '#f7fafc', borderRadius: '8px 8px 0 0' }}>Gender {formData.gender === '' && <span style={{ color: 'red' }}>*</span>}</span>
                        <select 
                            id="gender"
                            name="gender" 
                            value={formData.gender} 
                            onChange={handleChange} 
                            required 
                            style={{ padding: '12px 16px', fontSize: '1.125rem', color: '#4a5568', borderRadius: '16px', border: '2px solid #cbd5e0' }}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfilePopup;


