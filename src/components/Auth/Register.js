import React from 'react';
import './Auth.css';

const Register = () => {
    return(
        <div className='Register'>

            <div className='backdrop'>

                <form>

                    <h1>Account Register</h1>

                    <div className='inputs'>
                        <input type='text' placeholder='Email' />
                        <input type='password' placeholder='Password' />
                        <button>Register</button>
                    </div>

                    <p>&copy; <span>2025</span> <a href='https://jazcodeit.ca' target='_blank' rel="noreferrer">JazCodeIt.ca</a> ✅</p>
                
                </form>

            </div>

        </div>
    );
}

export default Register;