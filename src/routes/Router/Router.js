import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddService from "../../pages/AddSevice/AddService";
import Blog from "../../pages/Blog/Blog";
import AllServices from "../../pages/Home/AllServices/AllServices";
import Home from "../../pages/Home/Home/Home";
import ServicesDetails from "../../pages/Home/ServicesDetails/ServicesDetails";
import Login from "../../pages/Login/Login";
import Review from "../../pages/Review/Review";
import SignUp from "../../pages/Signup/SignUp";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/all_services',
            element: <AllServices></AllServices>
        },
        {
            path: '/services/:id',
            element: <ServicesDetails></ServicesDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path: '/reviews',
            element: <PrivetRoute><Review></Review></PrivetRoute>
        },
        {
            path: '/add_service',
            element: <PrivetRoute><AddService></AddService></PrivetRoute>
        }
    ]
}]);

export default router;