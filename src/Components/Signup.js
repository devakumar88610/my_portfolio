import React from 'react'
import Image from '../assets/Images/my-avatar.jpeg'

const Signup = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex max-w-4xl py-10 md:py-0 bg-slate-100 rounded-2xl overflow-hidden border boder-slate-200 shadow-2xl'>
                <div className='w-[550px] h-full hidden md:block'>
                    <img className='rounded-r-2xl' src={Image} alt="image" />
                </div>
                {/* Left Section End */}

                {/* Right Section Start */}
                <form className='w-full flex flex-col gap-5 px-10 '>
                    <h1 className='font-medium text-2xl text-slate-600 '>Create your account</h1>
                    <div className='grid grid-cols-2 gap-5'>
                        <div>
                            <input className='w-full bg-transparent border-2 py-2 px-3 rounded-md border-slate-300 focus:outline-slate-400'
                                type="text"
                                placeholder='First name' />
                        </div>
                        <div>
                            <input className='w-full bg-transparent border-2 py-2 px-3 rounded-md border-slate-300 focus:outline-slate-400'
                                type="text"
                                placeholder='Last name' />
                        </div>
                    </div>
                    <div>
                        <input className='w-full bg-transparent border-2 py-2 px-3 rounded-md border-slate-300 focus:outline-slate-400'
                            type="text"
                            placeholder='Email or phone'
                            required />
                    </div>
                    <div>
                        <input className='w-full bg-transparent border-2 py-2 px-3 rounded-md border-slate-300 focus:outline-slate-400'
                            type="password"
                            placeholder='Password' />
                    </div>
                    <div>
                        <input className='w-full bg-transparent border-2 py-2 px-3 rounded-md border-slate-300 focus:outline-slate-400'
                            type="password"
                            placeholder='Confirm Password' />
                    </div>
                    <div className='flex items-center gap-2 select-none'>
                        <input type="checkbox" id='checkbox-link' />
                        <label className='text-sm text-slate-600' for="checkbox-link">I accept the
                            <a className='text-blue-600' href="#"> Terms of Use</a> &
                            <a className='text-blue-600' href="#"> Privacy Policy</a>
                        </label>
                    </div>

                    <button className='w-full rounded-md bg-blue-600 hover:bg-blue-500 outline-1 hover:outline-offset-2 text-white py-2 px-3'>Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Signup