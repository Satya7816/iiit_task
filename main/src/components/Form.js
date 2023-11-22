import React, { useState } from 'react';
import '../styles/form.css'

const MyForm = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [checkboxValues, setCheckboxValues] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });
  const [selectedRadio, setSelectedRadio] = useState('');
  const [textValue1, setTextValue1] = useState('');
  const [textValue2, setTextValue2] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const checkboxName = e.target.name;
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [checkboxName]: !prevValues[checkboxName],
    }));
  };

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
  };

  const handleText1Change = (e) => {
    setTextValue1(e.target.value);
  };

  const handleText2Change = (e) => {
    setTextValue2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    console.log('Form submitted:', {
      selectedDate,
      selectedOption,
      checkboxValues,
      selectedRadio,
      textValue1,
      textValue2,
    });
  };

  return (
  <div className='form-section' id='form'>  
    <form onSubmit={handleSubmit} className='form'>
      <label>
        Date:
        <input type="date" value={selectedDate} onChange={handleDateChange} />
      </label>
      <label>
        Level:
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="option1">Beginner</option>
          <option value="option2">Intermediate</option>
          <option value="option3">Advanced</option>
        </select>
      </label>
      <label>
        Goal :
        <label>
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxValues.checkbox1}
            onChange={handleCheckboxChange}
          />
          Weight loss
        </label>
        <label>
          <input
            type="checkbox"
            name="checkbox2"
            checked={checkboxValues.checkbox2}
            onChange={handleCheckboxChange}
          />
          Muscle Gain
        </label>
        <label>
          <input
            type="checkbox"
            name="checkbox3"
            checked={checkboxValues.checkbox3}
            onChange={handleCheckboxChange}
          />
          Six Pack
        </label>
      </label>
      <label>
        Slot :
        <label>
          <input
            type="radio"
            name="radioGroup"
            value="radio1"
            checked={selectedRadio === 'radio1'}
            onChange={handleRadioChange}
          />
          Morning slot
        </label>
        <label>
          <input
            type="radio"
            name="radioGroup"
            value="radio2"
            checked={selectedRadio === 'radio2'}
            onChange={handleRadioChange}
          />
          Evening slot
        </label>
      </label>

      <label>
       Name :
        <input type="text" value={textValue1} onChange={handleText1Change} />
      </label>

      <label>
        Age    : 
        <input type="text" value={textValue2} onChange={handleText2Change} />
      </label>

      <label>
        Height and Weight :
        <input type="text" value={textValue2} onChange={handleText2Change} />
      </label>
      <button type="submit">Submit</button>
    </form>
</div>
  );
};

export default MyForm;
