import React from 'react';
import { Link } from 'react-router-dom';
function ViewProductComponent() {
    return (
        <>
            <div className="container mt-5">
                     <div className="row border rounded-3 p-2">
                        <div className="col-1 overflow-hidden img-thumbnail p-0" style={{height: 100}}>
                            <img className="w-100 h-100" src={ require('../images/image-1.jpg') } alt="Product"></img>
                        </div>
                        <div className="col">
                            
                        </div>
                        <div className="col-3 d-flex align-self-center justify-content-center">
                            <div className="form-check form-switch align-self-center">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked></input> 
                            </div>
                            <div className="px-3">
                                <Link className="btn btn-lg btn-primary" to={''}>Edit</Link>                        
                            </div>
                            <div className="px-3">
                                <button className="btn btn-lg btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <Link className="btn btn-lg btn-success" to={'/add'}>Add</Link>
                    </div>
            </div>
        </>
    );
}

export default ViewProductComponent;