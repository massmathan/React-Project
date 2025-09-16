import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './page/LandingPage';
import DashboardPage from './page/DashboardPage';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Contact from './page/Contact';
import About from './page/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Landing Page Layout */}
        <Route path="/" element={<LandingPage />}>
          <Route index element={<h1>Browse</h1>} />
          <Route path="product-list" element={<h1>Product List</h1>} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<h1>Dashboard</h1>} />
          <Route path="product-add" element={<h1>Product Add</h1>} />
          <Route path="checkout" element={<h1>Checkout</h1>} />
          <Route path="thank-you" element={<h1>Thank You</h1>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
