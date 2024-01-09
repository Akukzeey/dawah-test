import { useState } from 'react';

const EmergencyContactInfo = ({onSubmit,onPrevious}) => {
    const [emergencyFormData, setEmergencyFormData] = useState({
        emergencyFullName: '',
        emergencyRelationship: '',
        emergencyAddress: '',
        emergencyCellPhone: '',
        emergencyAptUnit: '',
        emergencyCity: '',
        emergencyState: '',
        emergencyZipCode: '',
        emergencyEmailAddress: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEmergencyFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    console.log(emergencyFormData)

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', fontWeight: 'bold', margin: '30px 0', fontSize: '2rem' }}>Emergency Contact Information</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className='administration-input-div'>
                        <label className='administraion-form-label administration-form-flex'>
                            <div>
                                Emergency Contact Name
                            </div>
                            <input className="form-control" placeholder='Emergency Name' type="text" name="emergencyFullName" value={emergencyFormData.emergencyFullName} onChange={handleChange}/>
                        </label>
                        <label className='administraion-form-label administration-form-flex'>
                            <div>
                                Relationship
                            </div>
                            <input className="form-control" placeholder='Relationship with student' type="text" name="emergencyRelationship" value={emergencyFormData.emergencyRelationship} onChange={handleChange}/>
                        </label>
                    </div>
                    <div className='administration-input-div'>
                        <label className='administraion-form-label administration-form-flex'>
                            <div>
                                Email Address
                            </div>
                            <input className="form-control" placeholder='Email Address' type="email" name="emergencyEmailAddress" value={emergencyFormData.emergencyEmailAddress} onChange={handleChange} />
                        </label>
                        <label className='administraion-form-label administration-form-flex'>
                            <div>
                                Cell Phone
                            </div>
                            <input className="form-control" placeholder='Cell #' type="tel" name="emergencyCellPhone" value={emergencyFormData.emergencyCellPhone} onChange={handleChange} />
                        </label>
                    </div>
                    <div className='administration-input-div'>
                        <label className='administraion-form-label administration-form-flex'>
                            <div>
                                Street Address
                            </div>
                            <input className="form-control" placeholder='Address' type="text" name="emergencyAddress" value={emergencyFormData.emergencyAddress} onChange={handleChange}/>
                        </label>
                        <label className='administraion-form-label administration-form-margin-right'>
                            Apt/Unit
                            <input className="form-control" placeholder='Apt/Unit' type="text" name="emergencyAptUnit" value={emergencyFormData.emergencyAptUnit} onChange={handleChange} />
                        </label>
                    </div>
                    <div className='administration-input-div'>
                        <label className='administraion-form-label administration-form-flex'>
                            <div>
                                City
                            </div>
                            <input className="form-control" placeholder='City' type="text" name="emergencyCity" value={emergencyFormData.emergencyCity} onChange={handleChange} />
                        </label>
                        <label className='administraion-form-label administration-form-flex'>
                            <div>
                                State
                            </div>
                            <input className="form-control" placeholder='State' type="text" name="emergencyState" value={emergencyFormData.emergencyState} onChange={handleChange} />
                        </label>
                        <label className='administraion-form-label administration-form-margin-right'>
                            <div>
                                Zip Code
                            </div>
                            <input className="form-control" placeholder='Zip Code' type="text" name="emergencyZipCode" value={emergencyFormData.emergencyZipCode} onChange={handleChange} />
                        </label>
                    </div>
                </div>
                <div className='administration-form-btn-div'>
                    <button type="button" className="btn btn-primary me-2" onClick={onPrevious}>Previous</button>
                    <button type="submit" className="btn btn-success">Next</button>
                </div>
            </form>
        </div>
    );
};

export default EmergencyContactInfo;