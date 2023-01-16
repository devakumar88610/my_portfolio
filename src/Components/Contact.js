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
            <div className="container">
                <div className="grid grid-cols-2 max-md:grid-cols-none gap-8">
                    <form onSubmit={handleSubmit} className="text-white">
                        {/* {JSON.stringify(formData)} */}
                        <div className="mb-6">
                            <input
                                className="form-control"
                                type="text"
                                name="fullname"
                                placeholder="Full Name"
                                onChange={handleChange}
                                value={formData.fullname}
                            />
                            {errors.fullname &&
                                <span className="text-secondary px-4">
                                    {errors.fullname}</span>}
                        </div>
                        <div className="mb-6">
                            <input
                                className="form-control"
                                type="text"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                value={formData.email}
                            />
                            {errors.email &&
                                <span className="text-secondary px-4">
                                    {errors.email}</span>}
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="form-control rounded-2xl"
                                type="text"
                                name="message"
                                rows="4"
                                placeholder="Message"
                                onChange={handleChange}
                                value={formData.message}
                            />
                            {errors.message &&
                                <span className="text-secondary px-4">
                                    {errors.message}</span>}
                        </div>
                        <div className="flex mb-6">
                            <label className="cursor-pointer">
                                <input className="mr-2 accent-secondary" type="checkbox" />
                                Accept Terms & Conditions
                            </label>

                            <p className="text-white"></p>
                        </div>
                        <button
                            className="button-primary w-full"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>

                    <div className="bg-dark900 p-4 rounded-2xl shadow-2xl border border-purple-900 h-full">
                        <iFrame
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.7618137500453!2d77.65094110412194!3d13.032662789634372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17348fe7416b%3A0x1a6c4867314e02db!2sSt.Vincent%20Pallotti%20School!5e0!3m2!1sen!2sin!4v1666607925529!5m2!1sen!2sin'
                            width='100%'
                            height='80%'
                            Style='border:0;'
                            className='rounded-md'
                            allowfullscreen=''
                            loading='lazy'
                            referrerpolicy='no-referrer-when-downgrade'
                        ></iFrame>
                        <div className="flex justify-center items-center my-auto">
                            <a href="/" className="flex items-center text-white mx-4">
                                <i class="fa-solid fa-envelope flex justify-center items-center bg-primary h-10 w-10 rounded-full"></i>
                                <p className="hidden hover:visible">devakumar88610</p>
                            </a>
                            <a href="/" className="flex items-center text-white mx-4">
                                <i class="fa-solid fa-phone flex justify-center items-center bg-primary h-10 w-10 rounded-full"></i>
                                <p className="hidden">+91 99007 60225</p>
                            </a>
                            <a href="/" className="flex items-center text-white mx-4">
                                <i class="fa-solid fa-location-pin flex justify-center items-center bg-primary h-10 w-10 rounded-full "></i>
                                <p className="hidden">Bangalore, Karnataka</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
