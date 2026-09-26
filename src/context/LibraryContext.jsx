"use client";

import React, { createContext, useState } from 'react';

export const LibraryContext = createContext({});

const LibraryProvider = ({ children }) => {
    const [workoutPlan, setWorkoutPlan] = useState([]);
    const [workoutSaved, setWorkoutSaved] = useState([]);

    const shareData = {
        workoutPlan,
        setWorkoutPlan,
        workoutSaved,
        setWorkoutSaved,
    };
    return (<LibraryContext.Provider value={shareData}>{children}</LibraryContext.Provider>);
};

export default LibraryProvider;