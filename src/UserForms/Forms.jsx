import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLinks from '../Social Media/SocialMedia';

const DisplayFormData = () => {
    const [formData, setFormData] = useState([]);
    const [inputData, setInputData] = useState([]);
    const [headings, setHeadings] = useState([]);
    const [selectedHeading, setSelectedHeading] = useState('');
    const [formValues, setFormValues] = useState({});
    const location = useLocation();
    const [heading, setHeading] = useState('');
    const [noData, setNoData] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const headingParam = params.get('heading');
        setHeading(headingParam);
    }, [location]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.5.34:8000/form-data', {
                    params: { heading }
                });
                setFormData(response.data);
                const headings = response.data.map(workshop => workshop.heading);
                setHeadings(headings[0]);
                console.log(headings[0])

                if (response.data.length === 0) {
                    setNoData(true);
                    setInputData([]);
                } else {
                    setNoData(false);
                    const selectedForm = response.data.find(workshop => workshop.heading === heading);
                    if (selectedForm) {
                        const parsedFormData = JSON.parse(selectedForm.content);
                        setInputData(parsedFormData);
                    }
                }
            } catch (error) {
                console.error('Failed to fetch form data:', error);
                toast.error('Failed to fetch form data');
            }
        };

        if (heading) {
            fetchData();
        }
    }, [heading]);

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://192.168.5.34:8000/api/insert', formValues);
            console.log(response.data);
            toast.success('Form submitted successfully');
        } catch (error) {
            console.error('Failed to send form data:', error);
            toast.error('Failed to send form data');
        }
        localStorage.setItem('formValues', JSON.stringify(formValues));
        console.log('Form values:', formValues);
        setFormValues({});  // Reset form values to empty object to clear the form fields
    };
    

    const generateFormElement = (input) => {
        const name = input.label; // Use label as the name
        const value = formValues[name] || ''; // Get the value from formValues state
    
        const renderLabel = (label, required) => (
            <label>
                {label} {required && <span style={{ color: 'red' }}>*</span>}
            </label>
        );
    
        switch (input.type) {
            case 'text':
                return (
                    <div className='form-group shadow-sm mb-3' style={{ width: '700px' }}>
                        {renderLabel(input.label || 'Input', input.required)}
                        <input
                            type='text'
                            className='form-control'
                            placeholder={input.placeholder || 'Enter value'}
                            name={name}
                            value={value} // Set the value from state
                            onChange={handleInputChange}
                            required={input.required} // Conditionally add required attribute
                        />
                    </div>
                );
            case 'dropdown':
                return (
                    <div className='shadow-sm mb-3' style={{ width: '700px' }}>
                        {renderLabel(input.label || 'Dropdown', input.required)}
                        <select
                            className='form-select'
                            name={name}
                            value={value} // Set the value from state
                            onChange={handleInputChange}
                            required={input.required} // Conditionally add required attribute
                        >
                            {input.options.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                );
            case 'radio':
                return (
                    <div className='form-check mb-3 p-0' style={{ width: '700px' }}>
                        {renderLabel(input.label || 'Radio Options', input.required)}
                        {input.options.map((option, index) => (
                            <div className="form-check" key={index}>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={name}
                                    id={`${name}-${option}`}
                                    value={option}
                                    checked={value === option} // Set the checked status based on state
                                    onChange={handleInputChange}
                                    required={input.required} // Conditionally add required attribute
                                />
                                <label className="form-check-label" htmlFor={`${name}-${option}`}>{option}</label>
                            </div>
                        ))}
                    </div>
                );
            case 'checkbox':
                return (
                    <div className='form-check mb-3 p-0' style={{ width: '700px' }}>
                        {renderLabel(input.label || 'Checkbox Options', input.required)}
                        {input.options.map((option, index) => (
                            <div className="form-check" key={index}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name={name}
                                    id={`${name}-${option}`}
                                    value={option}
                                    checked={(formValues[name] || []).includes(option)} // Set the checked status based on state
                                    onChange={handleInputChange}
                                />
                                <label className="form-check-label" htmlFor={`${name}-${option}`}>{option}</label>
                            </div>
                        ))}
                    </div>
                );
            case 'textarea':
                return (
                    <div className='form-group shadow-sm mb-3' style={{ width: '700px' }}>
                        {renderLabel(input.label || 'Textarea', input.required)}
                        <textarea
                            className='form-control'
                            placeholder={input.placeholder || 'Enter value'}
                            name={name}
                            value={value} // Set the value from state
                            onChange={handleInputChange}
                            required={input.required} // Conditionally add required attribute
                        ></textarea>
                    </div>
                );
            case 'number':
                return (
                    <div className='form-group shadow-sm mb-3' style={{ width: '700px' }}>
                        {renderLabel(input.label || 'Number', input.required)}
                        <input
                            type='number'
                            className='form-control'
                            placeholder={input.placeholder || 'Enter number'}
                            name={name}
                            value={value} // Set the value from state
                            onChange={handleInputChange}
                            required={input.required} // Conditionally add required attribute
                        />
                    </div>
                );
            case 'date':
                return (
                    <div className='form-group shadow-sm mb-3' style={{ width: '700px' }}>
                        {renderLabel(input.label || 'Date', input.required)}
                        <input
                            type='date'
                            className='form-control'
                            name={name}
                            value={value} // Set the value from state
                            onChange={handleInputChange}
                            required={input.required} // Conditionally add required attribute
                        />
                    </div>
                );
            case 'image':
                return (
                    <div className='form-group shadow-sm mb-3' style={{ width: '700px' }}>
                        <img
                            className='img-fluid w-100'
                            src={input.image} // Use the image property as src
                            alt={input.label || 'image'}
                            onChange={handleInputChange}
                        />
                    </div>
                );
    
            default:
                return (
                    <div className='form-group mb-3' style={{ width: '700px' }}>
                        {renderLabel('Unsupported Input Type', input.required)}
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Unsupported input type'
                            name={name}
                            value={value} // Set the value from state
                            onChange={handleInputChange}
                        />
                    </div>
                );
        }
    };
    
    
    return (
        <div className='container py-5'>
            <ToastContainer />
            <div className='d-flex justify-content-center'>
                <div className='card' style={{ width: '740px' }}>
                    <div className='card-header'>
                        <h6 className='text-capitalize text-center m-0'>{heading}</h6>
                    </div>
                    <div className='card-body'>
                        {noData ? (
                            <p>No data is available</p>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                {inputData.map((item, index) => (
                                    <div key={index}>
                                        {generateFormElement(item)}
                                    </div>
                                ))}
                                <button type='submit' className='btn btn-primary w-100 my-3'>Submit</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
            <SocialLinks />
        </div>
    );
};

export default DisplayFormData;
