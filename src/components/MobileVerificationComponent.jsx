import React from 'react';

function MobileVerificationComponent() {
    return ( 
        <form className="w-25 mx-auto mt-5 border p-5">
            <h1 className="text-center mb-3">Mobile OTP</h1>
            <div className="mb-3">
                <label className="form-label">
                    OTP 
                </label>
                <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                ></input>
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-lg btn-primary">
                Verify
            </button>
            </div>
        </form>
     );
}

export default MobileVerificationComponent;