import React from 'react';
import './Home.css';


const Home = () => {
    return (
        <div className='Home'>

            <div className='Front'>

                <div className='front-header'>
                    <h1>Link Tracker</h1>
                    <p className='front-headline'>Created By Jaz</p>
                    <p>Simple, Fast, Reliable and Easy to use.<br/>
                        <b>Link Tracker</b> is an advanced URL tracker offering analytics for link traffic and visitor insights on your links. Use Link Tracker to detect IP, locate IPs geographically, and track device locations. It also checks URLs for hidden redirects to ensure safety.
                    </p>
                </div>

                <div className='front-buttons'>
                    <button className='login-btn'  onClick={() => window.open("./Login", "_self")}>Login</button>
                    <button className='register-btn' onClick={() => window.open("./Register", "_self")}>Register</button>
                </div>

            </div>

            <div className='Instruction'>

                <div className='instruction-text'>

                    <h1>Instructions</h1>

                    <p>
                        <b>Link Tracker</b> is a tool that enables you to effortlessly locate and monitor the IP address of any individual in three straightforward steps:

                        <ul>
                            <li>1. Input any URL into the platform to generate new sharable link and initiate tracking.</li>
                            <li>2. Distribute the newly generated link to another individual and prompt them to engage with it.</li>
                            <li>3. Collect the IP address along with a comprehensive set of analytical data through the dedicated tracking page linked to your newly generated link.</li>
                        </ul>
                        
                    </p>

                </div>

                <div className='instruction-images'>
                    
                    <div className='instruction-card'>
                        <i className="bi bi-link-45deg"></i>
                        <h3>Generate link</h3>
                        <p>Enter a URL that you want to track.</p>
                    </div>

                    <div className='instruction-card'>
                        <i className='bi bi-share-fill'></i>
                        <h3>Share link</h3>
                        <p>Share the newly generated shareable link <br/>
                            with another user.</p>
                    </div>

                    <div className='instruction-card'>
                        <i className='bi bi-graph-up-arrow'></i>
                        <h3>View analytics</h3>
                        <p>Grab IP address and other<br/>
                        analytic data after the user clicks<br/>
                        on your generated sharable link.</p>
                    </div>

                </div>
            </div>

            <div className='Footer'>
                <p>Copyright &copy; <span>2025</span> <a href='https://jazcodeit.ca' target='_blank' rel='noreferrer'>JazCodeIt.ca</a></p>
            </div>

        </div>
    );
}

export default Home;