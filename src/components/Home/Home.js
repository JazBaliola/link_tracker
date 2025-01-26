import React from 'react';


const Home = () => {
    return (
        <div className='Home'>

            <div className='Front'>
                <div>
                    <h1>Link Tracker</h1>
                    <p>Create and Track Links <br/>
                        <b>Link Tracker</b> is an advanced URL tracker offering analytics for link traffic and visitor insights on your site. Use Link Tracker to detect your IP, locate IPs geographically, and track device locations. It also checks URLs for hidden redirects to ensure safety.
                    </p>
                </div>
            </div>

            <div className='Instruction'>

                <div className='Instruction-text'>
                    <h1>Instruction</h1>
                    <p>
                        <b>Link Tracker</b> is a tool that enables you to effortlessly locate and monitor the IP address of any individual in three straightforward steps:
                        <br/><br/>
                        1. Input any URL into the Grabify platform to condense and initiate tracking.
                        2. Distribute the newly shortened link to another individual and prompt them to engage with it.
                        3.Collect the IP address along with a comprehensive set of analytical data through the dedicated tracking page linked to your Grabify URL.
                    </p>
                </div>

                <div className='Instruction-images'>
                    
                    <div className='card1'>
                        <i>Icon</i>
                        <h3>Header</h3>
                        <p>Text</p>
                    </div>

                    <div className='card2'>
                        <i>Icon</i>
                        <h3>Header</h3>
                        <p>Text</p>
                    </div>

                    <div className='card3'>
                        <i>Icon</i>
                        <h3>Header</h3>
                        <p>Text</p>
                    </div>

                </div>
            </div>

            <div className='Footer'>

            </div>

        </div>
    );
}

export default Home;