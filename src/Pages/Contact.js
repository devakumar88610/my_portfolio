
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
        if (formData.fullname < 1) {
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
        } else if (formData.message.length < 6) {
            newErrors.message = 'must be more than 6';
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
        <section id="contact" className="bg-white/50 dark:bg-primary-500  backdrop:blur-md py-10">
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
                                <span className="text-primary px-4">
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
                                <span className="text-primary px-4">
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
                                <span className="text-primary px-4">
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
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">


                            <div className="dark:text-white">
                                <h4 className="text-lg font-bold">Contact</h4>
                                <p>+91 9900760225</p>
                            </div>

                        </div>
                        <div className="flex  items-center gap-4">

                            <div className="dark:text-white">
                                <h4 className="text-lg font-bold">Email</h4>
                                <p>devakumar88610@gmail.com</p>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
