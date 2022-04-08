import React from "react";
import { Link } from "react-router-dom";


function LoginComponent() {
  return (
    <form className="w-25 mx-auto mt-5 border p-5">
      <h1 className="text-center mb-3">Login</h1>
      <div className="mb-3">
        <label className="form-label">
          Mobile number 
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        ></input>
      </div>
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
      <div className="text-center">
      <button type="submit" className="btn btn-lg btn-primary">
        Login
      </button>
      </div>
      <div className="mt-3 text-center">
      <Link className="d-block form-text" to={'/'}>Forgot password?</Link>
      <p className="d-inline form-text">New user Register </p><Link className="form-text" to={'/register'}>here</Link>
      </div>
    </form>
  );
}

export default LoginComponent;
