import { useState } from 'react';

const ParentInfo = ({onSubmit,onPrevious}) => {
    const [parentFormData, setParentFormData] = useState({
        parent1FullName: '',
        parent1Relationship: '',
        parent1LevelOfEducation: '',
        parent1Info: '',
        parent1WorkingStatus: 'working',
        parent1WorkingHours: '',
        parent1Address: '',
        parent1CellPhone: '',
        parent1AptUnit: '',
        parent1City: '',
        parent1State: '',
        parent1ZipCode: '',
        parent1EmailAddress: '',

        parent2FullName: '',
        parent2Relationship: '',
        parent2LevelOfEducation: '',
        parent2Info: '',
        parent2WorkingStatus: 'working',
        parent2WorkingHours: '',
        parent2Address: '',
        parent2CellPhone: '',
        parent2AptUnit: '',
        parent2City: '',
        parent2State: '',
        parent2ZipCode: '',
        parent2EmailAddress: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setParentFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    console.log(parentFormData);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', fontWeight: 'bold', margin: '30px 0', fontSize: '2rem' }}>Parent Information</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2 className='info-header'>Parent/Guardian 1</h2>
                <div className='administration-input-div'>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            Parent/Guardian Name <span className='administration-required'>*</span>
                        </div>
                        <input className="form-control" placeholder='Parent/Guardian Name' type="text" name="parent1FullName" value={parentFormData.parent1FullName} onChange={handleChange} required />
                    </label>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            Relationship <span className='administration-required'>*</span>
                        </div>
                        <input className="form-control" placeholder='Relationship with student' type="text" name="parent1Relationship" value={parentFormData.parent1Relationship} onChange={handleChange} required />
                    </label>
                </div>
                <div className='administration-input-div'>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            Parent/Guardian Level of Education <span className='administration-required'>*</span>
                        </div>
                        <input className="form-control" placeholder='Education Level' type="text" name="parent1LevelOfEducation" value={parentFormData.parent1LevelOfEducation} onChange={handleChange} required />
                    </label>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            No of working hours per week <span className='administration-required'>*</span>
                        </div>
                        <input className="form-control" placeholder='Working Hours' type="text" name="parent1WorkingHours" value={parentFormData.parent1WorkingHours} onChange={handleChange} required />
                    </label>
                    <label className='administraion-form-label administration-form-working'>
                        <div>
                            Working Status <span className='administration-required'>*</span>
                        </div>
                        <select className="form-control" name="parent1WorkingStatus" value={parentFormData.parent1WorkingStatus} onChange={handleChange} required>
                            <option value="">Working</option>
                            <option value="Not Working">Not Working</option>
                        </select>
                    </label>
                </div>
                <div className='administration-input-div'>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            Email Address <span className='administration-required'>*</span>
                        </div>
                        <input className="form-control" placeholder='Email Address' type="email" name="parent1EmailAddress" value={parentFormData.parent1EmailAddress} onChange={handleChange} required />
                    </label>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            Cell Phone <span className='administration-required'>*</span>
                        </div>
                        <input className="form-control" placeholder='Cell #' type="tel" name="parent1CellPhone" value={parentFormData.parent1CellPhone} onChange={handleChange} />
                    </label>
                </div>
                <div className='administration-input-div'>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            Street Address <span className='administration-required'>*</span>
                        </div>
                        <input className="form-control" placeholder='Address' type="text" name="parent1Address" value={parentFormData.parent1Address} onChange={handleChange} required />
                    </label>
                    <label className='administraion-form-label administration-form-margin-right'>
                        Apt/Unit
                        <input className="form-control" placeholder='Apt/Unit' type="text" name="parent1AptUnit" value={parentFormData.parent1AptUnit} onChange={handleChange} />
                    </label>
                </div>
                <div className='administration-input-div'>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            City <span className='administration-required'>*</span>
                        </div>
                        <input className="form-control" placeholder='City' type="text" name="parent1City" value={parentFormData.parent1City} onChange={handleChange} />
                    </label>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            State <span className='administration-required'>*</span>
                        </div>
                        <input className="form-control" placeholder='State' type="text" name="parent1State" value={parentFormData.parent1State} onChange={handleChange} required />
                    </label>
                    <label className='administraion-form-label administration-form-margin-right'>
                        <div>
                            Zip Code <span className='administration-required'>*</span>
                        </div>
                        <input className="form-control" placeholder='Zip Code' type="text" name="parent1ZipCode" value={parentFormData.parent1ZipCode} onChange={handleChange} />
                    </label>
                </div>
                </div>
                <div style={{marginTop:'50px'}}>
                    <h2 className='info-header'>Parent/Guardian 2</h2>
                <div className='administration-input-div'>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            Parent/Guardian Name
                        </div>
                        <input className="form-control" placeholder='Parent/Guardian Name' type="text" name="parent1FullName" value={parentFormData.parent2FullName} onChange={handleChange}/>
                    </label>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            Relationship
                        </div>
                        <input className="form-control" placeholder='Relationship with student' type="text" name="parent1Relationship" value={parentFormData.parent2Relationship} onChange={handleChange}/>
                    </label>
                </div>
                <div className='administration-input-div'>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            Parent/Guardian Level of Education
                        </div>
                        <input className="form-control" placeholder='Education Level' type="text" name="parent1LevelOfEducation" value={parentFormData.parent2LevelOfEducation} onChange={handleChange} />
                    </label>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            No of working hours per week
                        </div>
                        <input className="form-control" placeholder='Working Hours' type="text" name="parent1WorkingHours" value={parentFormData.parent2WorkingHours} onChange={handleChange} />
                    </label>
                    <label className='administraion-form-label administration-form-working'>
                        <div>
                            Working Status
                        </div>
                        <select className="form-control" name="parent1WorkingStatus" value={parentFormData.parent2WorkingStatus} onChange={handleChange}>
                            <option value="">Working</option>
                            <option value="Not Working">Not Working</option>
                        </select>
                    </label>
                </div>
                <div className='administration-input-div'>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            Email Address
                        </div>
                        <input className="form-control" placeholder='Email Address' type="email" name="parent1EmailAddress" value={parentFormData.parent2EmailAddress} onChange={handleChange}/>
                    </label>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            Cell Phone
                        </div>
                        <input className="form-control" placeholder='Cell #' type="tel" name="parent1CellPhone" value={parentFormData.parent2CellPhone} onChange={handleChange} />
                    </label>
                </div>
                <div className='administration-input-div'>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            Street Address
                        </div>
                        <input className="form-control" placeholder='Address' type="text" name="parent1Address" value={parentFormData.parent2Address} onChange={handleChange}/>
                    </label>
                    <label className='administraion-form-label administration-form-margin-right'>
                        Apt/Unit
                        <input className="form-control" placeholder='Apt/Unit' type="text" name="parent1AptUnit" value={parentFormData.parent2AptUnit} onChange={handleChange} />
                    </label>
                </div>
                <div className='administration-input-div'>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            City
                        </div>
                        <input className="form-control" placeholder='City' type="text" name="parent1City" value={parentFormData.parent2City} onChange={handleChange} />
                    </label>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            State
                        </div>
                        <input className="form-control" placeholder='State' type="text" name="parent1State" value={parentFormData.parent2State} onChange={handleChange}/>
                    </label>
                    <label className='administraion-form-label administration-form-margin-right'>
                        <div>
                            Zip Code
                        </div>
                        <input className="form-control" placeholder='Zip Code' type="text" name="parent1ZipCode" value={parentFormData.parent2ZipCode} onChange={handleChange} />
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

export default ParentInfo;