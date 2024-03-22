import React, { useState } from 'react';

function InputField({ fields, onGenerateMarkdown }) {
  const [inputValues, setInputValues] = useState(
    Object.fromEntries(fields.map(field => [field.name, '']))
  );

  const [customFields, setCustomFields] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const addCustomField = () => {
    setCustomFields([...customFields, { name: '', label: '', type: 'text' }]);
  };

  const handleCustomInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedCustomFields = [...customFields];
    updatedCustomFields[index][name] = value;
    setCustomFields(updatedCustomFields);
  };

  const deleteCustomField = (index) => {
    const updatedCustomFields = [...customFields];
    updatedCustomFields.splice(index, 1);
    setCustomFields(updatedCustomFields);
  };

  const generateMarkdown = () => {
    let markdownContent = '';

    // Append predefined fields
    markdownContent += `# ${inputValues.projectTitle}\n\n`;
    markdownContent += `${inputValues.description}\n\n`;
    markdownContent += `## Installation\n${inputValues.installation}\n\n`;
    markdownContent += `## Usage\n${inputValues.usage}\n\n`;
    markdownContent += `## Contributing\n${inputValues.contributing}\n\n`;
    markdownContent += `## License\n${inputValues.license}\n\n`;

    // Append custom fields
    customFields.forEach(field => {
      markdownContent += `## ${field.label}\n${field.name}\n\n`;
    });

    return markdownContent;
  };

  return (
    <div>
      {fields.map(field => (
        <div key={field.name}>
          <label>{field.label}</label>
          <input className='goga'
            type={field.type || 'text'}
            name={field.name}
            value={inputValues[field.name]}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <hr />
      {customFields.map((field, index) => (
        <div key={index}>
          <label>Custom Field Label</label>
          <input
            type="text"
            value={field.label}
            onChange={(e) => handleCustomInputChange(e, index)}
            name="label"
          />
          <label>Custom Field Value</label>
          <input
            type="text"
            value={field.name}
            onChange={(e) => handleCustomInputChange(e, index)}
            name="name"
          />
          <button className='btn' onClick={() => deleteCustomField(index)}>Delete</button>
        </div>
      ))}
      <button className='btn' onClick={addCustomField}>Add Custom Field</button>
      <button className='btn' onClick={() => onGenerateMarkdown(generateMarkdown())}>Generate Markdown</button>
    </div>
  );
}

export default InputField;
