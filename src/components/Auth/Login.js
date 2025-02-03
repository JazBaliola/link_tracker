import React from 'react';
import './Auth.css';

const Login = () => {

    let d = new Date();
    let year = d.getFullYear();
    
    return(
        <div className='Login'>

            <a href='./' rel='noreferrer'><img src='logo.png' alt='LOGO Link Tracker by Jaz' title='Link Tracker by Jaz' /></a>

            <div className='backdrop'>

                <form>

                    <h1>Account Login</h1>

                    <div className='inputs'>
                        <input type='text' placeholder='Email' list='emails' required />
                        <datalist id='emails'>
                            <option value='@gmail.com'></option>
                            <option value='@yahoo.com'></option>
                            <option value='@outlook.com'></option>
                            <option value='@icloud.com'></option>
                        </datalist>

                        <input type='password' placeholder='Password' required />
                        <button type='submit'>Login</button>
                    </div>

                    <p>No Account? <a href='/Register' rel='noreferrer'>Register</a> for free</p>
                </form>

            </div>

            <p className='footer'>Copyright &copy; <span>{year}</span> <a href='https://jazcodeit.ca' target='_blank' rel="noreferrer">JazCodeIt.ca</a></p>

        </div>
    );
}

export default Login;