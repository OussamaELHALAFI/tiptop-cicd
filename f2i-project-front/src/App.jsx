import "./App.css";
import { Outlet, createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import Home from "./Pages/home/Home";
import Blog from "./Pages/blog/Blog";
import Participer from "./Pages/participer/participer";
import HeroSection from './components/hero';
import Contact from "./Pages/contact/contact";
import { AuthProvider } from './services/authContex';
import Auth from "./Pages/authPage/auth";
import ProtectedRoute from './ProtectedRoute';
import CookieConsentPopup from './components/CookieConsentPopup';
import UserProfile from './components/userProfil'
import Gain from './components/gain'
import About from "./Pages/aboutPage/aboutPage";
import MontionLégales from "./Pages/MontionLégales/mentionsLégales";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './fonts.css'

function App() {
  const Layout = () => {
    return (
      <>
      <HeroSection />
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to="/home" replace /> },
        { path: "home", element: <Home /> },
        { path: "signup", element: <Auth /> },
        {path: "blog", element: <Blog />},
        {path: "about", element: <About />},
        {path: "contact", element: <Contact />},
        {path: "montionLégales", element: <MontionLégales />},
        {path: "participer", element: <ProtectedRoute> <Participer /> </ProtectedRoute>},
        {path: "user", element:<ProtectedRoute>  <UserProfile /> </ProtectedRoute>},
        {path: "gain", element:<ProtectedRoute> <Gain /> </ProtectedRoute>}
      ],
    },
  ]);
  return (
    <>
      <div className="App">
        <AuthProvider>
          <CookieConsentPopup />
          <RouterProvider router={router} />
          <ToastContainer position="bottom-right" />
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
