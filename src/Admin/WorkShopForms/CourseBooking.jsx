import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyComponent = () => {
    const [showModal, setShowModal] = useState(false);
    const [inputType, setInputType] = useState('text');
    const [label, setLabel] = useState('');
    const [placeholder, setPlaceholder] = useState('');
    const [options, setOptions] = useState('');
    const [required, setRequired] = useState(false); // Added state for required
    const [heading, setHeading] = useState('');
    const [inputs, setInputs] = useState([]);

    const handleShowModal = (type) => {
        setInputType(type);
        setLabel('');
        setPlaceholder('');
        setOptions('');
        setRequired(false); // Reset required state when modal is shown
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    const generateHTMLString = (input, index) => {
        let html = `<div class='form-group-wrapper'>`;

        if (input.type === 'text') {
            html += `  <div class='form-group shadow-sm' >`;
            html += `    <label>${input.label || 'Input'}</label>`;
            html += `    <input type='text' class='form-control w-100' placeholder='${input.placeholder || 'Enter value'}' />`;
            html += `  </div>`;
        } else if (input.type === 'dropdown') {
            html += `  <div class='shadow-sm' >`;
            html += `    <label>${input.label || 'Dropdown'}</label>`;
            html += `    <select class='form-select w-100'  >`;
            input.options.forEach((option) => {
                html += `      <option>${option}</option>`;
            });
            html += `    </select>`;
            html += `  </div>`;
        } else if (input.type === 'radio') {
            html += `  <div class='form-check' >`;
            html += `    <label>${input.label || 'Radio Options'}</label>`;
            input.options.forEach((option) => {
                html += `    <div class="form-check w-100">`;
                html += `      <input class="form-check-input" type="radio" name="${input.name || input.label}" id="${option}" value="${option}">`;
                html += `      <label class="form-check-label" for="${option}">${option}</label>`;
                html += `    </div>`;
            });
            html += `  </div>`;
        } else if (input.type === 'checkbox') {
            html += `  <div class='form-check' >`;
            html += `    <label>${input.label || 'Checkbox Options'}</label>`;
            input.options.forEach((option) => {
                html += `    <div class="form-check w-100">`;
                html += `      <input class="form-check-input" type="checkbox" name="${input.label}-${option}" id="${option}" value="${option}">`;
                html += `      <label class="form-check-label" for="${option}">${option}</label>`;
                html += `    </div>`;
            });
            html += `  </div>`;
        } else if (input.type === 'textarea') {
            html += `  <div class='form-group shadow-sm ' >`;
            html += `    <label>${input.label || 'Textarea'}</label>`;
            html += `    <textarea class='form-control w-100' placeholder='${input.placeholder || 'Enter value'}'></textarea>`;
            html += `  </div>`;
        } else if (input.type === 'number') {
            html += `  <div class='form-group shadow-sm' >`;
            html += `    <label>${input.label || 'Number'}</label>`;
            html += `    <input type='number' class='form-control w-100' placeholder='${input.placeholder || 'Enter number'}' />`;
            html += `  </div>`;
        } else if (input.type === 'date') {
            html += `  <div class='form-group shadow-sm' style= width:"400px" >`;
            html += `    <label>${input.label || 'Date'}</label>`;
            html += `    <input type='date' class='form-control w-100' />`;
            html += `  </div>`;
        } else {
            html += `  <div class='form-group' >`;
            html += `    <label>Unsupported Input Type</label>`;
            html += `    <input type='text' class='form-control w-100' placeholder='Unsupported input type' />`;
            html += `  </div>`;
        }

        html += `</div>`;

        return html;
    };

    const deleteField = (index) => {
        const updatedInputs = inputs.filter((_, i) => i !== index);
        setInputs(updatedInputs);
    };

    const handleSave = () => {
        let newInput;
        if (inputType === 'text' || inputType === 'textarea' || inputType === 'number' || inputType === 'date') {
            newInput = {
                type: inputType,
                label,
                placeholder,
                required
            };
        } else if (inputType === 'radio' || inputType === 'checkbox' || inputType === 'dropdown') {
            newInput = {
                type: inputType,
                label,
                options: options.split(',').map(option => option.trim()),
                required
            };
        }

        const updatedInputs = [...inputs, newInput];
        setInputs(updatedInputs);

        handleClose();
    };

    const handleSubmit = async () => {
        if (!heading || inputs.length === 0) {
            toast.warning('Please fill required fields');
            return;
        }

        const inputHTMLStrings = {
            heading,
            content: inputs,
        };
        const inputHTMLStringsStr = JSON.stringify(inputHTMLStrings);

        // Store the string in localStorage under the key "inputforms"
        localStorage.setItem("inputforms", inputHTMLStringsStr);

        try {
            const response = await axios.post('http://192.168.5.34:8000/form-post', inputHTMLStrings, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            toast.success('Data successfully stored in the database');
            // Optionally reset form fields after successful submission
            setHeading('');
            setInputs([]);
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to store data in the database');
        }
    };

    return (
        <div className="container py-5">
            <Form.Group className="justify-content-center" controlId="formInputHeading" style={{ width: '500px' }}>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter heading"
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                />
            </Form.Group>
            <div className="d-flex justify-content-between py-4">
                <Button variant="primary" onClick={() => handleShowModal('text')}>
                    Add New Input Fields
                </Button>
            </div>

            {/* Displaying dynamically generated forms */}
            <div className="generated-forms container  gap-4" style={{width:"500px"}}>
                <div className="d-flex flex-column gap-3">
                    {inputs.map((input, index) => (
                        <div key={index} className="row">
                            <div className='col-10' dangerouslySetInnerHTML={{ __html: generateHTMLString(input, index) }} />
                            <div className='col-2 my-auto' > <button type='button' className='btn btn-danger px-2 py-0 btn-sm m-0' style={{borderRadius:"50%"}}  onClick={() => deleteField(index)}>-</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Field</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3' controlId="formInputType">
                            <Form.Label>Type</Form.Label>
                            <Form.Control
                                as="select"
                                value={inputType}
                                onChange={(e) => setInputType(e.target.value)}
                            >
                                <option value="text">Text</option>
                                <option value="radio">Radio</option>
                                <option value="dropdown">Dropdown</option>
                                <option value="checkbox">Checkbox</option>
                                <option value="textarea">Textarea</option>
                                <option value="number">Number</option>
                                <option value="date">Date</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group  className='mb-3'controlId="formInputLabel">
                            <Form.Label>Label</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter label"
                                value={label}
                                onChange={(e) => setLabel(e.target.value)}
                            />
                        </Form.Group>
                        {(inputType === 'text' || inputType === 'textarea' || inputType === 'number') && (
                            <Form.Group className='mb-3' controlId="formInputPlaceholder">
                                <Form.Label>Placeholder</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter placeholder"
                                    value={placeholder}
                                    onChange={(e) => setPlaceholder(e.target.value)}
                                />
                            </Form.Group>
                        )}
                        {(inputType === 'radio' || inputType === 'dropdown' || inputType === 'checkbox') && (
                            <Form.Group className='mb-3' controlId="formOptions">
                                <Form.Label>Options (comma-separated)</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter options"
                                    value={options}
                                    onChange={(e) => setOptions(e.target.value)}
                                />
                            </Form.Group>
                        )}
                        <Form.Group className='mb-3' controlId="formRequired">
                            <Form.Check
                                type="checkbox"
                                label="Required"
                                checked={required}
                                onChange={(e) => setRequired(e.target.checked)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="mt-4">
                <Button variant="success" onClick={handleSubmit}>
                    Submit
                </Button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyComponent;
