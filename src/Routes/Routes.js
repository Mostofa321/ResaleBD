import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import NotFound from "../Pages/404/NotFound";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/dashboard/AddProduct";
import AllBuyer from "../Pages/dashboard/AllBuyer";
import AllSeller from "../Pages/dashboard/AllSeller";
import Dashboard from "../Pages/dashboard/Dashboard";
import DashboardHome from "../Pages/dashboard/DashboardHome";
import MyProducts from "../Pages/dashboard/MyProducts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import SignUp from "../Pages/SignUp/SignUp";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/category/:id',
                element: <Products/>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/category/${params.id}`);
                  }
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signUp',
                element: <SignUp/>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout/>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome/>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct/>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts/>
            },
            {
                path: '/dashboard/allSeller',
                element: <AllSeller/>
            },
            {
                path: '/dashboard/allBuyer',
                element: <AllBuyer/>
            },
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    }
])


export default router;