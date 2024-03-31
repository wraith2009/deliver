import React,{Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import Restaurantmenu from "./Components/Restaurantmenu";
import {Provider} from  "react-redux";
import Store from "./Components/Store";
import Cart from "./Components/Cart";
import Crowsel from "./Components/Crowsel";
import Footer from "./Components/Footer";
// import Auth from "./Components/Authentication";
import Authentication from "./Components/Authentication";

const Contact = lazy(() => import("./Components/Contact"));
const Instamart = lazy(() => import("./Components/Instamart"));




const MainComponent = () => {
    return (
        <Provider store={Store}>
        <Header/>
        {/* <Crowsel/> */}
        {/* <About/> */}
        <Outlet />
        {/* <Body/> */}
        <Footer/>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainComponent/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "restaurant/:id",
                element: <Restaurantmenu/>
            },
            {
                path: "/Instamart",
                element: (<Suspense>
                    <Instamart/>
                </Suspense>),
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/Contact",
                element: (<Suspense>
                    <Contact/>
                </Suspense>),
            },{
                path: "/Authentication",
                element: <Authentication />
            }
        ],     
    },
    
    
]);

// there can only be one parent in jsx element.
// react.fragment -> component (it is like a empty tag). <> </> <--- it is also react.fragment (shorthand)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);