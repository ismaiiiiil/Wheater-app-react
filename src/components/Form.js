import React from 'react'

const Form = (props) => {
    
    return (
        <div className="col-md-6 mx-auto">
            <form onSubmit={props.getWeather}>
                <input className='form-control mb-3'
                    name='city'
                    type="text" placeholder='City...' />

                <input className='form-control mb-3'
                    name='country'
                    type="text" placeholder='Country...' />

                <button className='btn btn-primary'>
                    <i className="fa-solid fa-temperature-high"></i> Get Weather
                </button>
            </form>
        </div>
        
    )
}
export default Form;