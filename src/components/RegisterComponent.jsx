import React from 'react';
import { Link } from 'react-router-dom';
function RegisterComponent() {
    return ( 
        <form className="w-25 mx-auto mt-5 border p-5">
            <h1 className="text-center mb-3">Register</h1>
            <div className="mb-3">
                <label className="form-label">
                    full Name 
                </label>
                <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                ></input>
            </div>
            <div className="mb-3">
                <label className="form-label">
                    Mobile number
                </label>
                <input
                type="number"
                className="form-control"
                id="mobileNumber"
                name='Mobile number'
                ></input>
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-lg btn-primary">
                Register
            </button>
            </div>
            <div className="mt-3 text-center">
            <p className="d-inline form-text">Existing user </p><Link className="form-text" to={'/'}>Login</Link>
            </div>
        </form>
     );
}

export default RegisterComponent;