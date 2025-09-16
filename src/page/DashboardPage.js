import { Routes, Route, Link } from 'react-router-dom';
import Contact from '../page/Contact';
import About from '../page/About';
import DashboardPage from '../page/DashboardPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Nav() {
     const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate('/signin');
  };

  return (
    <div className="container-fluid">
      <nav className="d-flex justify-content-between align-items-center p-2 bg-light">
        <h3>Dashboard</h3>
        <div>
          <div className="dropdown">
            <button
              className="btn btn-primary me-3 dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Profile
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button className="dropdown-item" type="button" onClick={handleLogout}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default function LoadingPage() {
  return (
    <>
      <header>
        <Nav />
      </header>

       <main className="container-fluid d-flex vh-100 my-3">
        {/* Sidebar */}
        <nav className="col-lg-2 d-flex flex-column bg-light p-3">
          <Link to="/dashboard" className="mb-2 text-decoration-none">Dashboard</Link>
          <Link to="/dashboard/about" className="mb-2 text-decoration-none">About</Link>
          <Link to="/dashboard/contact" className="mb-2 text-decoration-none">Contact</Link>
        </nav>

        {/* Content Area */}
        <section className="col-lg-10 bg-white p-3">
          <Outlet />
        </section>
      </main>

      <footer className="container text-center my-5">
        <h3>Footer</h3>
      </footer>
    </>
  );
}
