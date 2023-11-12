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
        {path: "contact", element: <Contact />},
        {path: "participer", element: <ProtectedRoute> <Participer /> </ProtectedRoute>}
      ],
    },

    {
      path: "/home",
      
      element: <Home />,
    },
    {
      path: "/contact",
      
      element: <Contact />,
    },
    {
      path: "/blog",
      
      element: <Blog />,
    },
    {
      path: "/signup", // Chemin vers la page d'inscription
      element: <Auth />,
    },
    {
      path: "/participer", // Chemin vers la page de connexion
      element: <Participer />,
    },
  ]);
  return (
    <>
      <div className="App">
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
