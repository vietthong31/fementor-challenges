import './Field.scss';

function Field({ id, value, onChange, errors }) {
  const handleChange = (e) => {
    onChange(id, e.target.value);
  };

  // console.log(id);
  // console.log(errors[id]);

  let placeholder = '';
  switch (id) {
    case 'day':
      placeholder = 'DD';
      break;
    case 'month':
      placeholder = 'MM';
      break;
    case 'year':
      placeholder = 'YYYY';
      break;
  }

  return (
    <div>
      <label>
        <div className={errors[id] && 'error'}>{id.toUpperCase()}</div>
        <input
          className={errors[id] && 'error'}
          type="number"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </label>
      <span className="error">{errors[id]}</span>
    </div>
  );
}

export default Field;
