import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/input/PasswordInput';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    return (
        <div className='flex justify-center items-center min-h-[100vh] bg-light'>
            <div className='w-96 border rounded bg-white px-7 py-10'>
                <form >
                    <h4 className='text-2xl mb-7'>SignUp</h4>
                    <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3 shadow-sm'>
                        <input
                            type="text"
                            placeholder='Username'
                            className='w-full text-sm bg-transparent py-3 mr-3 rounded-lg outline-none'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3 shadow-sm'>
                        <input
                            type="text"
                            placeholder='Email'
                            className='w-full text-sm bg-transparent py-3 mr-3 rounded-lg outline-none'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <PasswordInput
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}
                    <button type='submit' className='primary-btn'>Create Account</button>

                    <p className='text-sm text-center mt-4'>
                        Already have an account? {" "}
                        <Link to="/sign-in" className='font-medium text-primary underline'>
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SignUp