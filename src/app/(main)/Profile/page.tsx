"use client"
import React, { useState } from 'react';
import ProfilePopup from '@/components/ProfilePopup/page';
import DialogBox from '@/components/ProfilePopup/dialogbox';

const MainComponent: React.FC = () => {
    const [showForm, setShowForm] = useState(false);

    const handleNext = () => {
        setShowForm(true);
    };

    return (
        <div>
            {showForm ? <ProfilePopup /> : <DialogBox onNext={handleNext} />}
        </div>
    );
};

export default MainComponent;
