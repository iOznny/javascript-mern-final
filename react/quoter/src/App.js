import React, { Fragment, useState } from 'react';

// Components
import Form from './components/Form.js';
import Header from "./components/Header.js";

function App() {

  // Define state
  const [amount, setAmount] = useState(0);
  const [limit, setLimit] = useState(0);

  return (
    <Fragment>
      <Header title="Cotizador de Prestamos" />
      
      <div className='container'>
        <Form 
          amount={ amount } 
          setAmount={ setAmount }
          limit={ limit }
          setLimit={ setLimit }
        />

      </div>
    </Fragment>
  );
}

export default App;
