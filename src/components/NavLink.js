import React, { useContext } from 'react'
import { SessionContext } from '../context/SessionContext'

function NavLink({ title }) {

    const { selectedSession, setSelectedSession } = useContext(SessionContext);

    return (
        <div className={selectedSession === title ? 'selected' : ''} onClick={() => setSelectedSession(title)}>
            <p>{title}</p>
        </div>
    )
}

export default NavLink
