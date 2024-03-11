import Home from "./pages/home/Home";
import Products from './pages/products/Products'
import Users from './pages/users/Users'
import Navbar from './components/navbar/Navbar'
import Login from './pages/login/Login'
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './styles/global.scss'
import SingleProduct from "./pages/singleproduct/SingleProduct";
import SingleUser from "./pages/singleUser/SingleUser";

function App() {

  const Layout = () => {
    return (
      <div className='main'>
        <Navbar />
        <div className="container">
          <div className="menuContainer">
          <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "users", element: <Users /> },
        { path: "products/:id", element: <SingleProduct /> },
        { path: "users/:id", element: <SingleUser /> },
      ]
    },
    { path: "login", element: <Login /> },

  ]);

  return (
    <RouterProvider router={router} />

  )
}

export default App
