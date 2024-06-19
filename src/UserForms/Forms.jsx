import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DisplayFormData = () => {
    const [formData, setFormData] = useState([]);
    const [inputData, setInputData] = useState([]);
    const [headings, setHeadings] = useState([]);
    const [selectedHeading, setSelectedHeading] = useState('');
    const [formValues, setFormValues] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.5.34:8000/form-data');
                setFormData(response.data);
                const headings = response.data.map(workshop => workshop.heading);
                setHeadings(headings);
                if (response.data.length > 0) {
                    setSelectedHeading(response.data[0].heading);
                    const parsedFormData = JSON.parse(response.data[0].content);
                    setInputData(parsedFormData);
                }
            } catch (error) {
                console.error('Failed to fetch form data:', error);
                toast.error('Failed to fetch form data');
            }
        };

        fetchData();
    }, []);

    const handleHeadingChange = (event) => {
        const heading = event.target.value;
        setSelectedHeading(heading);
        const selectedForm = formData.find(workshop => workshop.heading === heading);
        if (selectedForm) {
            const parsedFormData = JSON.parse(selectedForm.content);
            setInputData(parsedFormData);
            setFormValues({}); // Reset form values when heading changes
        }
    };

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;

        if (type === 'checkbox') {
            setFormValues(prevValues => {
                const existingValues = prevValues[name] || [];
                const updatedValues = checked
                    ? [...existingValues, value]
                    : existingValues.filter(item => item !== value);

                return {
                    ...prevValues,
                    [name]: updatedValues
                };
            });
        } else {
            setFormValues(prevValues => ({
                ...prevValues,
                [name]: value
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Save form values to local storage
        sendfrom();
        localStorage.setItem('formValues', JSON.stringify(formValues));
        toast.success('Form submitted successfully');
        console.log('Form values:', formValues);
        
    };
    const sendfrom = async () => {
        try {
            const response = await axios.post('http://192.168.5.34:8000/api/insert',formValues);
            console.log(response.data);
            
        } catch (error) {
            console.error('Failed to fetch form data:', error);
            toast.error('Failed to fetch form data');
        }
    };

    const generateFormElement = (input) => {
        const name = input.label; // Use label as the name

        const renderLabel = (label, required) => (
            <label>
                {label} {required && <span style={{ color: 'red' }}>*</span>}
            </label>
        );

        if (input.type === 'text') {
            return (
                <div className='form-group shadow-sm mb-3' style={{ width: '500px' }}>
                    {renderLabel(input.label || 'Input', input.required)}
                    <input
                        type='text'
                        className='form-control'
                        placeholder={input.placeholder || 'Enter value'}
                        name={name} // Use label as name
                        onChange={handleInputChange}
                    />
                </div>
            );
        } else if (input.type === 'dropdown') {
            return (
                <div className='shadow-sm mb-3' style={{ width: '500px' }}>
                    {renderLabel(input.label || 'Dropdown', input.required)}
                    <select
                        className='form-select'
                        name={name} // Use label as name
                        onChange={handleInputChange}
                    >
                        {input.options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            );
        } else if (input.type === 'radio') {
            return (
                <div className='form-check mb-3 p-0' style={{ width: '500px' }}>
                    {renderLabel(input.label || 'Radio Options', input.required)}
                    {input.options.map((option, index) => (
                        <div className="form-check" key={index}>
                            <input
                                className="form-check-input"
                                type="radio"
                                name={name} // Use label as name
                                id={`${name}-${option}`}
                                value={option}
                                onChange={handleInputChange}
                            />
                            <label className="form-check-label" htmlFor={`${name}-${option}`}>{option}</label>
                        </div>
                    ))}
                </div>
            );
        } else if (input.type === 'checkbox') {
            return (
                <div className='form-check mb-3 p-0' style={{ width: '500px' }}>
                    {renderLabel(input.label || 'Checkbox Options', input.required)}
                    {input.options.map((option, index) => (
                        <div className="form-check" key={index}>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name={name} // Use label as name
                                id={`${name}-${option}`}
                                value={option}
                                onChange={handleInputChange}
                            />
                            <label className="form-check-label" htmlFor={`${name}-${option}`}>{option}</label>
                        </div>
                    ))}
                </div>
            );
        } else if (input.type === 'textarea') {
            return (
                <div className='form-group shadow-sm mb-3' style={{ width: '500px' }}>
                    {renderLabel(input.label || 'Textarea', input.required)}
                    <textarea
                        className='form-control'
                        placeholder={input.placeholder || 'Enter value'}
                        name={name} // Use label as name
                        onChange={handleInputChange}
                    ></textarea>
                </div>
            );
        } else if (input.type === 'number') {
            return (
                <div className='form-group shadow-sm mb-3' style={{ width: '500px' }}>
                    {renderLabel(input.label || 'Number', input.required)}
                    <input
                        type='number'
                        className='form-control'
                        placeholder={input.placeholder || 'Enter number'}
                        name={name} // Use label as name
                        onChange={handleInputChange}
                    />
                </div>
            );
        } else if (input.type === 'date') {
            return (
                <div className='form-group shadow-sm mb-3' style={{ width: '500px' }}>
                    {renderLabel(input.label || 'Date', input.required)}
                    <input
                        type='date'
                        className='form-control'
                        name={name} // Use label as name
                        onChange={handleInputChange}
                    />
                </div>
            );
        } else {
            return (
                <div className='form-group mb-3' style={{ width: '500px' }}>
                    {renderLabel('Unsupported Input Type', input.required)}
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Unsupported input type'
                        name={name} // Use label as name
                        onChange={handleInputChange}
                    />
                </div>
            );
        }
    };

    return (
        <div className='container py-5'>
            <ToastContainer />
            <select className="form-select mb-5" value={selectedHeading} onChange={handleHeadingChange} style={{ width: '500px' }}>
                {headings.map((heading, index) => (
                    <option key={index} value={heading}>{heading}</option>
                ))}
            </select>

            <div className='d-flex justify-content-center'>
                <div className='card' style={{ width: '540px' }}>
                    <div className='card-header'>
                        <h6>{selectedHeading}</h6>
                    </div>
                    <div className='card-body'>
                        <form onSubmit={handleSubmit}>
                            {inputData.map((item, index) => (
                                <div key={index}>
                                    {generateFormElement(item)}
                                </div>
                            ))}
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayFormData;
