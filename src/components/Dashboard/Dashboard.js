import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return(
        <div className='Dashboard'>
            
            <div className='sidebar'>
                <h1>sidebar</h1>
            </div>

            <div className='main'>

                <div className='chart'>
                    <h1>chart</h1>
                </div>

                <div className='accountInfo'>

                    <div className='limit'>
                        <h1>limit</h1>
                    </div>

                    <div className='total'>
                        <h1>total</h1>
                    </div>

                </div>
                
            </div>

        </div>
    );
}

export default Dashboard;