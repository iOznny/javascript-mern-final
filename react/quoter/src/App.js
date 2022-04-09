import React, { Fragment, useState } from 'react';

// Components
import Form from './components/Form.js';
import Header from "./components/Header.js";
import Message from './components/Message.js';
import Result from './components/Result.js';
import Spinner from './components/Spinner.js';

function App() {
  // Define state
  const [amount, setAmount] = useState(0);
  const [limit, setLimit] = useState('');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  // Carga Condicional de Componentes
  let component;

  if (loading) {
    component = <Spinner />;
  } else if (total === 0) {
    component = <Message />;
  } else {
    component = <Result amount={ amount } limit={ limit } total={ total } />;
  }

  return (
    <Fragment>
      <Header title="Cotizador de Prestamos" />
      
      <div className='container'>
        <Form 
          amount={ amount } 
          setAmount={ setAmount }
          limit={ limit }
          setLimit={ setLimit }
          total={ total }
          setTotal={ setTotal }
          setLoading={ setLoading }
        />

        {/* Carga Condicional de Componentes */}
        <div className='mensajes'>
          { component }          
        </div>
      </div>
    </Fragment>
  );
}

export default App;
