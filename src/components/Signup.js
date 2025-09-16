import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container d-flex justify-content-center">
      <div className="col-sm-4 bg-light p-5 rounded-4">
        <header className="fs-2 fw-bold text-center">Sign Up</header>
        <form className="d-flex flex-column m-3">
          <div className="col-sm p-3 d-flex flex-column justify-content-start">
            <input
              type="email"
              className="form-control rounded-3 p-3"
              placeholder="Enter the Email"
            />
          </div>

          <div className="col-sm p-3 d-flex flex-column justify-content-start">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control rounded-3 p-3"
              placeholder="Enter the Password"
            />
          </div>

          <div className="col-sm p-3 d-flex flex-column justify-content-start">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control rounded-3 p-3 "
              placeholder="Enter the Confirm-Password"
            />
          </div>

          <div className="col-sm p-3 d-flex flex-row justify-content-start align-items-center">
           
            <label htmlFor="showPassword"> <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="me-2"
            />Show Password</label>
          </div>

          <div className="col-sm p-3 d-flex flex-column justify-content-start">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>

          <div className='col-sm p-3 d-flex flex-row justify-content-start align-items-cente'>
             <p>Already have an account? <Link to="/signin" className=''> Sing In</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}
