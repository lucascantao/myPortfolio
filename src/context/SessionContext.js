import React, { createContext, useState } from 'react'


export const SessionContext = createContext('Home');

function SessionProvider({ children }) {

    const [selectedSession, setSelectedSession] = useState('Home');

    return (
        <SessionContext.Provider value={{ selectedSession, setSelectedSession }}>
            {children}
        </SessionContext.Provider>
    )
}

export default SessionProvider;
