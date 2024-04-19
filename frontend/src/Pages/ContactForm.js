import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const validationErrors = {}
        if (!formData.name.trim()) {
            validationErrors.name = 'Name is required'
        }

        if (!formData.email.trim()) {
            validationErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email format is invalid"
        }

        setErrors(validationErrors)

        try {
            await axios.post('http://localhost:5000/api/contact', formData);
            alert('Message Sent Successfully!');
            setFormData({ name: '', email: '', phoneNumber: '', message: '' });
        } catch (err) {
            console.error(err);
            alert('Submission Error!');
        }
    };

    return (
        <>
            <section className="contact-us">
                <div className="container">
                    <center>
                        <h1 className="hover-underline-animation">Contact Us</h1>
                    </center>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h5><b>Here You are to Contact Us</b> Come to choice good having Humble to All .</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row form-part">
                        <div className="col-lg-6 form-side part1">
                            <form onSubmit={handleSubmit} className="mb-4 mb-lg-0">
                                <div className="form-row">
                                    <div className="col-md-6 form-group contact-form">
                                        <label htmlFor="name">Full Name*</label>
                                        <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" />
                                        {errors.name && <span>{errors.name}</span>}
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="email"> Email*</label>

                                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange}
                                            placeholder="Enter Your Email Address" />
                                        {errors.email && <span>{errors.email}</span>}

                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phoneNumber">Phone Number*</label>
                                    <input type="number" className="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Enter Your Phone Number" required />


                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message*</label>
                                    <textarea className="form-control " name="message" value={formData.message} onChange={handleChange} placeholder="Type Your Message" required ></textarea>


                                </div>
                                <center>
                                    <button type="submit" className="submit-btn btn btn-light">Send Message</button>
                                </center>

                            </form>
                        </div>
                        {/* <br />
                        <br /> */}
                        <div className="col-lg-5 part2">
                            <div className="img-part">

                                <img className='side-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXkXdnOrnncz3mQNbdgIiD3dQuJK2zfIH6ww&s" alt="img here" />
                            </div>
                            <div className="contact-details">
                                <center>
                                    <u>
                                        <h3>Get In Touch  </h3>
                                    </u>
                                    <div className="card">
                                        <div className="card-body">
                                            <p className="card-title">Call us :
                                                +<u>
                                                    91 98765 43210
                                                </u>
                                            </p>
                                            <p className="card-title">Email us : <u>dummyweb@gmail.com</u></p>
                                        </div>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </div >
            </section >

            <center>
                <h1 className="hover-underline-animation locate">
                    Locate Us
                </h1>
            </center>

            <div className="map-part">

                <iframe title='contact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8730521274147!2d77.33259960946769!3d28.60358497557915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce51dad100197%3A0xd970d860d175f2!2sC5%2F83%2C%20New%20Kondli%20Rd%2C%20Pocket%20C%203%2C%20New%20Kondli%2C%20Kondli%2C%20New%20Delhi%2C%20Delhi%2C%20110096!5e0!3m2!1sen!2sin!4v1712393058991!5m2!1sen!2sin" width="1100" height="400" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </>
    );
};

export default ContactForm;
