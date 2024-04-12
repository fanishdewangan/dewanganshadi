import React, { useState } from 'react';

function NavBar() {
    const [showModal, setShowModal] = useState(false);

    const handleBeginClick = () => {
        setShowModal(true);
    };

    return (
        <div id="homepage" className="container-main">
            <div className="row">
                <h1 className="common_headline__3GyDZ" data-testid="homepage_headline" style={{ color: '#ffffff', textAlign: 'center', fontSize: '30px', fontFamily: 'Arial, sans-serif' }}>Trusted Matrimony & Matchmaking Service</h1>
                <div className="container">
                    <div className="dropdown-container">
                        <div className="dropdown-label">
                            <label htmlFor="dropdown" style={{ fontFamily: 'Arial, sans-serif' }}>Gender</label>
                            <select id="dropdown1">
                                <option value="Woman">Woman</option>
                                <option value="Man">Man</option>
                            </select>
                        </div>
                        <div className="dropdown-label">
                            <label htmlFor="dropdown" style={{ fontFamily: 'Arial, sans-serif' }}>Age</label>
                            <select id="dropdown2">
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                            </select>
                        </div>
                        <span className="word" style={{ fontFamily: 'Arial, sans-serif' }}>to</span>
                        <div className="dropdown-label">
                            <label htmlFor="dropdown" style={{ fontFamily: 'Arial, sans-serif' }}>From</label>
                            <select id="dropdown3">
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                            </select>
                        </div>
                        <div className="dropdown-label">
                            <label htmlFor="dropdown" style={{ fontFamily: 'Arial, sans-serif' }}>Religion</label>
                            <select id="dropdown4">
                                <option value="Hindu">Hindu</option>
                                <option value="Muslim">Muslim</option>
                                <option value="Sikh">Sikh</option>
                            </select>
                        </div>
                        <div className="dropdown-label">
                            <label htmlFor="dropdown" style={{ fontFamily: 'Arial, sans-serif' }}>Mother Tongue</label>
                            <select id="dropdown5">
                                <option value="Hindi">Hindi</option>
                                <option value="English">English</option>
                                <option value="Marathi">Marathi</option>
                            </select>
                        </div>
                        <div className="dropdown-label">
                            <button className="begin-button" onClick={handleBeginClick}>Let's Begin</button>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="modal show" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">User Registration</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                            </div>
                            <div className="modal-body row">
                                <div className="col-md-6">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="firstNameInput" className="form-label">First Name:</label>
                                            <input type="text" className="form-control" id="firstNameInput" placeholder="Enter your first name" />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="lastNameInput" className="form-label">Last Name:</label>
                                            <input type="text" className="form-control" id="lastNameInput" placeholder="Enter your last name" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="communitySelect">Gender:</label>
                                            <select className="form-control" id="communitySelect">
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Others</option>
                                                {/* Add more options as needed */}
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="dobInput" className="form-label">Date of Birth:</label>
                                            <input type="date" className="form-control" id="dobInput" />
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-6">
                                    {/* Right column content */}
                                    {/* You can add additional content or fields here */}
                                    <div className="mb-3">
                                        <label htmlFor="middleNameInput" className="form-label">Middle Name:</label>
                                        <input type="text" className="form-control" id="middleNameInput" placeholder="Enter your middle name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="mobileInput" className="form-label">Mobile Number:</label>
                                        <input type="tel" className="form-control" id="mobileInput" placeholder="Enter your mobile number" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="communitySelect">Community:</label>
                                        <select className="form-control" id="communitySelect">
                                            <option>General</option>
                                            <option>SC</option>
                                            <option>ST</option>
                                            <option>OBC</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="livingInInput">Living In:</label>
                                        <input type="text" className="form-control" id="livingInInput" placeholder="Enter your current location" />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                                <button type="button" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavBar;
