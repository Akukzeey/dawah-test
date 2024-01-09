import { useState } from 'react';

const StudentForm = ({onSubmit}) => {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        emailAddress: '',
        age: '',
        dateOfBirth: '',
        homePhone: '',
        gender: '',
        address: '',
        aptUnit: '',
        city: '',
        state: '',
        zipCode: '',
        enrollmentType: '',
        currentlyEnrolled:'',
        gradeEntering:''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    console.log(formData)

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <div>
            <h1 style={{textAlign:'center',fontWeight:'bold',margin:'30px 0',fontSize:'2rem'}}>Student Information</h1>
            <form onSubmit={handleSubmit}>
                <div className='administration-input-div'>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            First Name <span className='administration-required'>*</span>
                        </div>
                        <input  className="form-control"  placeholder='First Name' type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </label>
                    <label className='administraion-form-label administration-form-flex'>
                        <div className='mb-0'>
                            Middle Name <span className='administration-required'></span>
                        </div>
                        <input className="form-control"  placeholder='Middle Name'  type="text" name="middleName" value={formData.middleName} onChange={handleChange}/>
                    </label>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            Last Name <span className='administration-required'>*</span>
                        </div>
                        <input className="form-control"  placeholder='Last Name'  type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </label>
                </div>
                <div className='administration-input-div'>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            Email Address <span className='administration-required'>*</span>
                        </div>
                        <input className="form-control"  placeholder='Email Address'  type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required />
                    </label>
                    <label className='administraion-form-label administration-form-working'>
                        <div>
                            Age <span className='administration-required'>*</span>
                        </div>
                        <input className="form-control"  placeholder='Age'  type="number" name="age" value={formData.age} onChange={handleChange} required/>
                    </label>
                </div>
                <div className='administration-input-div'>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            Date of Birth <span className='administration-required'>*</span>
                        </div>
                        <input className="form-control"  placeholder='Date of Birth'  type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required/>
                    </label>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            Home Phone <span className='administration-required'>*</span>
                        </div>
                        <input className="form-control"  placeholder='Home Phone'  type="tel" name="homePhone" value={formData.homePhone} onChange={handleChange} />
                    </label>
                    <div className='d-flex align-items-center administration-form-margin-right administration-md-top'>
                        <div>
                            Gender <span className='administration-required'>*</span>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="maleRadio"
                                value="Male"
                                checked={formData.gender === 'Male'}
                                onChange={handleChange}
                                required
                            />
                            <label className="form-check-label" htmlFor="maleRadio">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="femaleRadio"
                                value="Female"
                                checked={formData.gender === 'Female'}
                                onChange={handleChange}
                                required
                            />
                            <label className="form-check-label" htmlFor="femaleRadio">
                                Female
                            </label>
                        </div>
                    </div>
                </div>
                <div className='administration-input-div'>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            Address <span className='administration-required'>*</span>
                        </div>
                        <input  className="form-control" placeholder='Address' type="text" name="address" value={formData.address} onChange={handleChange} required/>
                    </label>
                    <label className='administraion-form-label administration-form-margin-right'>
                        Apt/Unit
                        <input className="form-control"  placeholder='Apt/Unit'  type="text" name="aptUnit" value={formData.aptUnit} onChange={handleChange} />
                    </label>
                </div>
                <div className='administration-input-div'>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            City <span className='administration-required'>*</span>
                        </div>
                        <input className="form-control"  placeholder='City'  type="text" name="city" value={formData.city} onChange={handleChange} />
                    </label>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            State <span className='administration-required'>*</span>
                        </div>
                        <input className="form-control"  placeholder='State'  type="text" name="state" value={formData.state} onChange={handleChange} required/>
                    </label>
                    <label className='administraion-form-label administration-form-margin-right'>
                        <div>
                            Zip Code <span className='administration-required'>*</span>
                        </div>
                        <input className="form-control"  placeholder='Zip Code'  type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} />
                    </label>
                </div>
                <div className='administration-input-div'>
                    <label className='d-flex me-3 administration-md-top'>
                        <div>
                            Enrollment Type <span className='administration-required'>*</span>
                        </div>
                        <select name="enrollmentType" value={formData.enrollmentType} onChange={handleChange} required>
                            <option value="">Select Enrollment Type</option>
                            <option value="Regular Education">Regular Education</option>
                        </select>
                    </label>
                    <div className='d-flex align-items-baseline administration-md-top'>
                        <div>
                            Currently Enrolled at DarulArqam? <span className='administration-required'>*</span>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="currentlyEnrolled"
                                id="enrolledYes"
                                value="Yes"
                                checked={formData.currentlyEnrolled === 'Yes'}
                                onChange={handleChange}
                                required
                            />
                            <label className="form-check-label" htmlFor="enrolledYes">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="currentlyEnrolled"
                                id="enrolledNo"
                                value="No"
                                checked={formData.currentlyEnrolled === 'No'}
                                onChange={handleChange}
                                required
                            />
                            <label className="form-check-label" htmlFor="enrolledNo">
                                No
                            </label>
                        </div>
                    </div>
                </div>
                <ul className='administration-form-ul'>
                    <li className='administration-form-li'>Please note that the child will be tested by Hifz teacher before enrolling in the program.</li>
                    <li className='administration-form-li'>The parents will be responsible to make sure that the child is getting adequate secular education while the child memorizes the quran.</li>
                </ul>
                <label className='administraion-form-label administration-form-flex my-2'>
                    <div className='d-flex'>
                        Grade Entering <span className='administration-required'>*</span>
                    </div>
                    <input className="form-control" placeholder='Grade Entering' type="text" name="gradeEntering" value={formData.gradeEntering} onChange={handleChange} required/>
                </label>
                <div className='administration-form-btn-div'>
                    <button type="submit" className="btn btn-success">Next</button>
                </div>
            </form>
        </div>
    );
};

export default StudentForm;