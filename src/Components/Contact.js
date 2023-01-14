import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        fullname: "",
        email: "",
        message: "",
    });

    const validateForm = () => {
        let newErrors = {};

        // fullname validation
        if (!formData.fullname) {
            newErrors.fullname = 'Please enter your fullname';
        } else if (formData.fullname.length < 4) {
            newErrors.fullname = 'Name must be above 4 letters'
        }

        // email validation
        if (!formData.email) {
            newErrors.email = 'Please enter your email';
        } else if (formData.email) {
            newErrors.email = 'Email is invalid';
        }

        // message validation
        if (formData.message.length < 8) {
            newErrors.message = 'Write Message';
        }
        setErrors(newErrors);
        return Object.values(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            [e.target.input]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (validateForm()) {
        }
    };
    return (
        <section id="contact">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 max-md:grid-cols-none gap-10">
                    <form onSubmit={handleSubmit} className="text-white">
                        {/* {JSON.stringify(formData)} */}
                        <div className="mb-6">
                            <input
                                className="w-full text-white bg-transparent border-2 border-primary transition-all 
                            duration-300 px-4 py-2 rounded-full  focus:outline-secondary"
                                type="text"
                                name="fullname"
                                placeholder="Full Name"
                                onChange={handleChange}
                                value={formData.fullname}
                            />
                            {errors.fullname && <span className="text-secondary px-4">{errors.fullname}</span>}
                        </div>
                        <div className="mb-6">
                            <input
                                className="w-full text-white bg-transparent border-2 
                            border-primary transition-all duration-300 px-4 py-2 rounded-full 
                            focus:outline-secondary"
                                type="text"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                value={formData.email}
                            />
                            {errors.email && <span className="text-secondary px-4">{errors.email}</span>}
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="w-full text-white bg-transparent border-2 
                            border-primary transition-all duration-300 px-4 py-2 rounded-2xl 
                            focus:outline-secondary"
                                type="text"
                                name="message"
                                rows="4"
                                placeholder="Message"
                                onChange={handleChange}
                                value={formData.message}
                            />
                            {errors.message && <span className="text-secondary px-4">{errors.message}</span>}
                        </div>
                        <div className="flex mb-6">
                            <label className="cursor-pointer">
                                <input className="mr-2 accent-secondary" type="checkbox" />
                                Accept Terms & Conditions
                            </label>

                            <p className="text-white"></p>
                        </div>
                        <button
                            className="bg-primary text-white px-4 py-2 rounded-full w-full
                            hover:bg-white hover:text-black"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                    <div className="bg-purple-900 p-6 rounded-2xl ">
                        <div className="flex flex-cols items-center text-white mb-6">
                            <i class="fa-solid fa-envelope flex justify-center items-center bg-primary h-10 w-10 rounded-full mr-4"></i>
                            <p>devakumar88610@gmail.com</p>
                        </div>
                        <div className="flex flex-cols items-center text-white mb-6">
                            <i class="fa-solid fa-phone flex justify-center items-center bg-primary h-10 w-10 rounded-full mr-4"></i>
                            <p>+91 99007 60225</p>
                        </div>
                        <div className="flex flex-cols items-center text-white">
                            <i class="fa-solid fa-location-pin flex justify-center items-center bg-primary h-10 w-10 rounded-full mr-4"></i>
                            <p>Bangalore, Karnataka</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
