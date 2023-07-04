import Form from './Form';
import './App.scss';
import { useState } from 'react';

function App() {
  const fields = ['day', 'month', 'year'];
  const [result, setResult] = useState({});

  return (
    <>
      <Form fields={fields} onSubmit={setResult} />

      <div id="result">
        <span>{result.year ?? '--'}</span> years <br />
        <span>{result.month ?? '--'}</span> months <br />
        <span>{result.day ?? '--'}</span> days
      </div>
    </>
  );
}

export default App;
