import React, { createContext, useState } from 'react';

export const multiStepContext = createContext();

export const StepContextProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);

    function submitData() {
        setFinalData(finalData => [...finalData, userData]);
        setUserData('');
        setCurrentStep(1);
    }

    return (
        <multiStepContext.Provider value={{ currentStep, setCurrentStep, userData, setUserData, finalData, setFinalData, submitData }}>
            {children}
        </multiStepContext.Provider>
    );
};