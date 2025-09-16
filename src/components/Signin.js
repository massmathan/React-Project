import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Signin() {

    const navigate = useNavigate();

  const handleLogin = () => {
    
    navigate('/dashboard');
  };
  return (
    <div className="container d-flex justify-content-center">
      <div className="col-sm-4 bg-light p-5 rounded-4">
        <header className="fs-2 fw-bold text-center">Sign In</header>
        <form className="d-flex flex-column m-3">
          <div className="col-sm p-3 d-flex flex-column justify-content-start">
            <input
              type="email"
              className="form-control rounded-3 p-3"
              placeholder="Enter the Email"
            />
          </div>

          <div className="col-sm p-3 d-flex flex-column justify-content-start pb-0">
            <input
              type="password"
              className="form-control rounded-3 p-3 "
              placeholder="Enter the Password"
            />
          </div>

          <div className="col-sm p-3 d-flex justify-content-end ">
            <Link to="/forget-password">Forget-Password</Link>
          </div>

          <div className="col-sm p-3 d-flex flex-column justify-content-start">
            <button className="btn btn-primary" onClick={handleLogin}>Sign In</button>
          </div>  

          <div className='col-sm p-3 d-flex flex-column justify-content-star'>
             <p>Don't have account? <Link to="/signup" className=''>Sign up</Link> </p>
          </div>
        </form>
      </div>
    </div>
  );
}
