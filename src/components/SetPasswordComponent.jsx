import React from 'react';
function SetPasswordComponent() {
    return ( 
        <form className="w-25 mx-auto mt-5 border p-5">
      <h1 className="text-center mb-3">Set Password</h1>
      <div className="mb-3">
        <label className="form-label">
          Password
        </label>
        <input
          type="new-password"
          className="form-control"
          id="exampleInputPassword1"
        ></input>
      </div>
      <div className="mb-3">
        <label className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        ></input>
      </div>
      <div className="text-center">
      <button type="submit" className="btn btn-lg btn-primary">
       Submit
      </button>
      </div>
    </form>
     );
}

export default SetPasswordComponent;