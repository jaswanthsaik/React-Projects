import React from "react";

const Hero = ({handleLogout}) => {
    return(
        <section className="hero">
            <nav>
                <h2>Dashboard</h2>
                <button onClick={handleLogout}>Logout</button>
            
            </nav>
            <h1>Welcome to Dashboard</h1>
        </section>
    );
};

export default Hero;