import React from 'react';

const Result = ({ amount, limit, total }) => (
    <div className='u-full-width resultado'>
        <h2>Resumen:</h2>
        <p>Pagar en: { limit } meses.</p>
        <p>Cantidad Solicitada: $ { amount }</p>
        <p>Pago Mensual: $ { (total / limit).toFixed(2) }</p>
        <p>Total: $ { (total).toFixed(2) } </p>
    </div>    
);
 
export default Result;