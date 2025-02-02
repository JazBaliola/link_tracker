import React from 'react';
import './Auth.css';

const Register = () => {

    let d = new Date();
    let year = d.getFullYear();
    
    return(
        <div className='Register'>

            <a href='./' rel='noreferrer'><img src='logo_sample.png' alt='LOGO Link Tracker by Jaz' title='Link Tracker by Jaz' /></a>

            <div className='backdrop'>

                <form>

                    <h1>Account Register</h1>

                    <div className='inputs'>
                        <input type='text' placeholder='Email' list='emails' required />
                        <datalist id='emails'>
                            <option value='@gmail.com'></option>
                            <option value='@yahoo.com'></option>
                            <option value='@outlook.com'></option>
                            <option value='@icloud.com'></option>
                        </datalist>
                        
                        <input type='password' placeholder='Password' required />
                        <button>Register</button>
                    </div>

                    <p>Have an Account? <a href='/Login' rel='noreferrer'>Login</a> now</p>
                </form>

            </div>

            <p className='footer'>Copyright &copy; <span>{year}</span> <a href='https://jazcodeit.ca' target='_blank' rel="noreferrer">JazCodeIt.ca</a></p>

        </div>
    );
}

export default Register;