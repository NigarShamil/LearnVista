import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PasswordInput from '../../components/input/PasswordInput'
import Navbar from '../../components/navbar/Navbar'



const SignIn = () => {
    const [error, setError] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div className='flex justify-center items-center min-h-[82.5vh] bg-light'>
                <div className='w-96 border rounded bg-white px-10 py-12'>
                    <form >
                        <h4 className='text-2xl mb-7'>Sign In</h4>
                        <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3 shadow-sm'>
                            <input type="text" placeholder='Email'
                                value={email}
                                className='w-full text-sm bg-transparent py-3 mr-3 rounded-lg outline-none'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <PasswordInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}
                        <button type='submit' className='primary-btn'>Sign In</button>

                        <p className='text-sm text-center mt-4'>
                            Not registered yet? {" "}
                            <Link to="/sign-up" className='font-medium text-primary underline'>
                                Create an Account
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn