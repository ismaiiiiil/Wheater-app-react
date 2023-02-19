import React, { Component } from 'react'

const Weather = (props) => {

    const {error,country,humidity,description,city,tempreature} = props;
    
    const res = ( country && humidity && description && city && tempreature) ? 
        (
            <div className="">
            {/* <div className="alert alert-danger">{props.error}</div> */}

            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-8 col-lg-6 col-xl-4">

                    <div className="card" style={{ color:" #4B515D", borderRadius: "35px" }}>
                    <div className="card-body p-4">

                        <div className="d-flex">
                            <h6 className="flex-grow-1">{country}</h6>
                            <h6>  {city} </h6>
                        </div>

                        <div className="d-flex flex-column text-center mt-5 mb-4">
                        <h6 className="display-4 mb-0 font-weight-bold" style={{ color: "#1C2331" }}>{ (tempreature * 0.1).toFixed(2)  }  °C </h6>
                        <span className="small" style={{ color: "#868B94" }}>{props.description}</span>
                        </div>

                        <div className="d-flex align-items-center">
                        <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                            <div><i className="fas fa-wind fa-fw" style={{ color: "#868B94" }}></i> <span className="ms-1"> {props.humidity}
                            </span></div>
                            <div><i className="fas fa-tint fa-fw" style={{ color: "#868B94" }}></i> <span className="ms-1"> 84% </span>
                            </div>
                            <div><i className="fas fa-sun fa-fw" style={{ color: "#868B94" }}></i> <span className="ms-1"> 0.2h </span>
                            </div>
                        </div>
                        <div>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp" width="60" />
                        </div>
                        </div>

                    </div>
                    </div>

                </div>
                </div>

            </div>
            </div>)
        
    : ( <div className='col-md-6 mx-auto mt-4'>   
            { 
                error && <div className='alert alert-danger'>{error}</div>
            }
        </div>
    )
    

    return (
    
        <div>
            {res}
        </div>
        )
    }
export default Weather;