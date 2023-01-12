import React, { useState } from 'react'

const Contact = () => {
    const [inputValue, setInputValue] = useState({
        fullname: '',
        email: '',
        message: '',
    });

    const [validation, setValidation] = useState({
        fullname: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValue({ ...inputValue, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let errors = validation

        //fullname Validation
        if (inputValue.fullname.length < 3) {
            errors.fullname = 'Enter Valid Name';
        } else {
            errors.fullname = "";
        }

        //email validation
        if (inputValue.email.trim()) {
            errors.email = 'enter valid email'
        }

        return setValidation(errors)
    }

    return (
        <div className=''>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-2 max-md:grid-cols-none gap-10'>
                    <form onSubmit={handleSubmit} className='text-white'>
                        {/* {JSON.stringify(inputValue)} */}
                        <input
                            className='w-[100%] text-white bg-transparent border-2 border-primary transition-all duration-300 px-4 py-2 rounded-full mb-4 focus:outline-secondary'
                            type="text"
                            name="fullname"
                            placeholder='Full Name'
                            onChange={handleChange}
                            value={inputValue.fullname}
                        />
                        {validation.fullname && <p>{validation.fullname}</p>}
                        <input
                            className='w-[100%] text-white bg-transparent border-2 
                            border-primary transition-all duration-300 px-4 py-2 rounded-full my-4 
                            focus:outline-secondary'
                            type="text"
                            name="email"
                            placeholder='Email'
                            onChange={handleChange}
                            value={inputValue.email}
                        />
                        <textarea
                            className='w-[100%] text-white bg-transparent border-2 
                            border-primary transition-all duration-300 px-4 py-2 rounded-lg my-4 
                            focus:outline-secondary'
                            type="text"
                            name="message"
                            rows="4"
                            placeholder='Message'
                            onChange={handleChange}
                            value={inputValue.message}
                        />
                        <div className='flex mb-5'>
                            <input
                                className='mr-2 accent-secondary'
                                type="checkbox"
                            />
                            <p className='text-white'>Accept Terms & Conditions</p>
                        </div>
                        <button
                            className='bg-primary text-white px-4 py-2 rounded-full
                            hover:bg-white hover:text-black'
                            type='submit'>Submit</button>
                    </form>
                    <div>
                        <div className='flex flex-cols items-center text-white mb-10' >
                            <i class="fa-solid fa-envelope flex justify-center items-center bg-primary h-10 w-10 rounded-full mr-4"></i>
                            <p>devakumar88610@gmail.com</p>
                        </div>
                        <div className='flex flex-cols items-center text-white mt-10' >
                            <i class="fa-solid fa-phone flex justify-center items-center bg-primary h-10 w-10 rounded-full mr-4"></i>
                            <p>+91 99007 60225</p>
                        </div>
                        <div className='flex flex-cols items-center text-white mt-10' >
                            <i class="fa-solid fa-phone flex justify-center items-center bg-primary h-10 w-10 rounded-full mr-4"></i>
                            <p>Bangalore, Karnataka</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact