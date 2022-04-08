import React, { Fragment, useState } from 'react';

// Helper
import { calculateTotal } from '../Helpers/Helper';

const Form = (props) => {
    const { 
        amount, 
        setAmount, 
        limit, 
        setLimit,
        setTotal,
        setLoading
    } = props;

    // State
    const [error, setError] = useState(false);

    // Submit
    const calculateQuoter = e => {
        e.preventDefault();        

        // Validate form
        if (amount === 0 || limit === '') {            
            setError(true);
            return;
        }

        // Delete previous error
        setError(false);

        setLoading(true);
        setTimeout(() => {
            // Make a quote
            const total = calculateTotal(amount, limit);
            setTotal(total);            
            setLoading(false);
        }, 3000);
    }

    return (
        <Fragment>
            <form onSubmit={ calculateQuoter }>
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input 
                            className="u-full-width" 
                            type="number" 
                            placeholder="Ejemplo: 3000"
                            onChange={ e => setAmount(parseInt(e.target.value)) }
                        />
                    </div>

                    <div>
                        <label>Plazo para Pagar</label>
                        <select 
                            className="u-full-width"
                            onChange={ e => setLimit(parseInt(e.target.value)) }
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    
                    <br></br>

                    <div>
                        <input 
                            type="submit" 
                            value="Calcular" 
                            className="button-primary u-full-width" 
                        />
                    </div>
                </div>
            </form>

            { (error) ? <p className='error'>Todos los campos son obligatorios.</p> : null }
            
        </Fragment>
    );
}
 
export default Form;