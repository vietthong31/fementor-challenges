import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Chakra from './components/Chakra.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Chakra>
      <App />
    </Chakra>
  </React.StrictMode>
);
