import React, { useState } from 'react';
import './App.css';

const Contact = () => {
    const [data, setData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });
    const inputEvent = (event) => {
        const { name, value } = event.target;
        setData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `name: ${data.name}. Mobile: ${data.phone}. Email: ${data.email}. Message: ${data.message}`
        );
    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput" className="form-label">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput1"
                                    name="name"
                                    value={data.name}
                                    onChange={inputEvent}
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput" className="form-label">
                                    Phone
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    name="phone"
                                    value={data.phone}
                                    onChange={inputEvent}
                                    placeholder="Enter mobile number"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    name="email"
                                    value={data.email}
                                    onChange={inputEvent}
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput2" className="form-label">
                                    Message
                                </label>
                                <textarea
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    rows="3"
                                    name="message"
                                    value={data.message}
                                    onChange={inputEvent}
                                ></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">
                                    Submit Form
                                </button>
                            </div>
                    </form>
					</div>
                </div>
            </div>
        </>
    );
};

export default Contact;