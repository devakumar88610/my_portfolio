
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
        if (formData.fullname == 0) {
            newErrors.fullname = 'Please enter your fullname';
        } else if (!formData.fullname.match(/^[A-Z a-z]*$/)) {
            newErrors.fullname = 'Name must be alphabets'
        }

        // email validation
        if (formData.email == 0) {
            newErrors.email = 'Please enter your email';
        } else if (!formData.email.match(/^[A-Za-z._\-[0-9]*[@][A-Za-z]*[.][a-z]{2,4}$/)) {
            newErrors.email = 'Enter valid email';
        }

        // message validation
        if (formData.message.length == 0) {
            newErrors.message = 'Write message';
        }

        setErrors(newErrors);
        return Object.values(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (validateForm()) {
        }
    };
    return (
        <section id="contact" className="bg-primary-100/20 dark:bg-primary-500 py-10">
            <div className="container">

                {/* <div className="flex flex-col items-center mb-10">
                    <h1 className="font-medium text-4xl tracking-widest uppercase text-slate-800 dark:text-white mb-2">Contact me</h1>
                    <div className="w-40 h-[2px] bg-secondary rounded-full" />
                </div> */}

                {/* Submit Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <form onSubmit={handleSubmit}>
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
                        <div className="mb-4">
                            <textarea
                                className="form-control rounded-xl"
                                type="text"
                                name="message"
                                rows="5"
                                placeholder="Message"
                                onChange={handleChange}
                                value={formData.message}
                            />
                            {errors.message &&
                                <span className="text-secondary px-4">
                                    {errors.message}</span>}
                        </div>
                        <button
                            className="button-primary w-full"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>

                    {/* Map Location */}
                    <div className="shadow-lg">
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.7618137500453!2d77.65094110412194!3d13.032662789634372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17348fe7416b%3A0x1a6c4867314e02db!2sSt.Vincent%20Pallotti%20School!5e0!3m2!1sen!2sin!4v1666607925529!5m2!1sen!2sin'
                            className='rounded-xl h-[300px] lg:h-full w-full border-none'
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
