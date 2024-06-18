import React, { useState } from 'react';

interface DialogBoxProps {
    onNext: () => void;
}

const DialogBox: React.FC<DialogBoxProps> = ({ onNext }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    };

    const handleNextClick = () => {
        if (isChecked) {
            onNext();
        } else {
            alert('Please check the box to proceed.');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ backgroundColor: 'transaparent', boxShadow: '0px 10px 30px rgba(0,0,0,0.2)', borderRadius: '16px', padding: '32px', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
                <h2 className="text-xl font-semibold mb-4">Welcome</h2>
                <p className="mb-4">Please check the box and click Next to proceed.</p>
                <div className="mb-4">
                    <label className="inline-flex items-center">
                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} className="form-checkbox h-5 w-5 text-blue-600" />
                        <span className="ml-2">I agree to the terms and conditions</span>
                    </label>
                </div>
                <button 
                    onClick={handleNextClick} 
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default DialogBox;
