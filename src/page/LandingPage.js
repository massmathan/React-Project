
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import  Signin  from '../components/Signin';
import  Signup  from '../components/Signup';
import { Outlet } from 'react-router-dom';


 function Nav(){
    return ( 
        <>
            <div className='container '>
            <nav className="d-flex justify-content-between align-items-center p-3 bg-light">
                    <h3>Nav</h3>
                    <div>
                        <Link to="/signin" className='btn btn-outline-primary me-2'>Sign in</Link>
                        <Link to="/signup" className='btn btn-primary m-2'>Sign up</Link>
                    </div>
                </nav>
            </div>
        </>

    );
}

export default function LoadingPage()   
{
   return (<>
      <header>
         <Nav/>
      </header>
       
       <main className='container text-center vh-100 my-5'>
            {/* <h3>Main Contents</h3> */}
                  <Outlet />


       </main>

       <footer className='container text-center my-5'>
                <h3>Footer</h3>
       </footer>
   </>);
}


