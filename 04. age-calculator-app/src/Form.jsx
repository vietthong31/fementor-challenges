import { useState } from 'react';
import Field from './Field';
import arrowIcon from './assets/icon-arrow.svg';
import './Form.scss';

function Form({ fields, onSubmit }) {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      calculate();
    }
  };

  const validate = () => {
    const nextErrors = {};
    if (!inputs.year) nextErrors.year = 'This field is required';
    if (!inputs.month) nextErrors.month = 'This field is required';
    if (!inputs.day) nextErrors.day = 'This field is required';

    const today = new Date();
    const inputDate = new Date(inputs.year, inputs.month - 1, inputs.day);

    if (inputDate > today) nextErrors.year = 'Must be in the past';
    if (inputs.month < 1 || inputs.month > 12) nextErrors.month = 'Must be valid month';
    if (inputs.day < 1 || inputs.day > 31) nextErrors.day = 'Must be valid day';

    const unvalidDates = [
      inputs.month % 2 === 0 && inputs.day > 30,
      inputs.month === '2' && inputs.day > 28,
      !isLeapYear(inputs.year) && inputs.day > 29,
    ];

    for (const unvalidDate of unvalidDates) {
      if (unvalidDate) nextErrors.day = 'Must be valid date';
    }

    setErrors(nextErrors);
    if (isEmpty(nextErrors)) {
      return false;
    } else {
      return true;
    }
  };

  const calculate = () => {
    const date = new Date();
    let year = date.getFullYear() - inputs.year;
    let month = date.getMonth() + 1 - inputs.month;
    let day = date.getDate() - inputs.day;

    if (month < 0 || (month === 0 && day < 0)) {
      year -= 1;
      month += 12;
    }

    if (day < 0) {
      month -= 1;
      day += 30;
    }

    onSubmit({ year, month, day });
  };

  const changeInput = (key, value) => {
    setInputs({
      ...inputs,
      [key]: value,
    });
  };

  const fieldComponents = fields.map((field) => (
    <Field key={field} id={field} value={inputs.field} onChange={changeInput} errors={errors} />
  ));

  return (
    <form onSubmit={handleSubmit}>
      <div className="fields">{fieldComponents}</div>
      <div id="btnWrapper">
        <button type="submit" title="Calculate">
          <img src={arrowIcon} alt="" />
        </button>
      </div>
    </form>
  );
}

const isLeapYear = (year) => {
  let leap = false;
  if (year % 4 === 0) {
    leap = true;
    if (year % 100 === 0) {
      leap = false;
    }
    if (leap % 400 === 0) {
      leap = true;
    }
  }
  return leap;
};

function isEmpty(obj) {
  for (const x in obj) {
    return false;
  }
  return true;
}

export default Form;
