'use client'
import { useState } from 'react';
import StudentInfo from "@/components/administration-info/Student-info";
import ParentInfo from "@/components/administration-info/Parent-info";
import EmergencyInfo from "@/components/administration-info/Emergency-info";

export default function AdministrationForm() {
    const [currentStep, setCurrentStep] = useState(1);

    const handleFormSubmit = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePrevious = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    return (
        <div id='Administration-form' className='container'>
            <div className='administation-note-container'>
                <p className='administration-form-p-tag'>The following form must be completed before your application will be considered. Please complete each item carefully.</p>
            </div>
            <div className="step-indicator">
                Step {currentStep} of 2
            </div>
            <div>
                {currentStep === 1 ? (
                    <StudentInfo onSubmit={handleFormSubmit} />
                ) : currentStep === 2 ? (
                    <ParentInfo onPrevious={handlePrevious} onSubmit={handleFormSubmit} />
                ) : (
                    <EmergencyInfo onPrevious={handlePrevious} onSubmit={handleFormSubmit} />
                )}
            </div>
        </div>
    );
}