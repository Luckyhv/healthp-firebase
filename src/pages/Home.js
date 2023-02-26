import React, { useContext } from 'react'
import Navbar from '../components/Navbar';
import profilecontext from '../context/Profilecontext'

function Home() {
    const context = useContext(profilecontext);
    const { user } = context;

    return (
        <div>
            <Navbar/>
        </div>
    )
}

export default Home