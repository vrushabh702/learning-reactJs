import { Link, useRoutes } from "react-router-dom";
import { Home } from "./Home";
import { BookRoutes } from "./bookRoutes";
import { NotFound } from "./NotFound";


function UseRouteHooks(){
    let element = useRoutes([
        // {
        //     path: '/',
        //     element: <NavLayout />,
        //     children: [
        //         {
        //             index: true,
        //             element: <Home />
        //         },
        //         {
        //             path: 'index',
        //             element: <About />
        //         },
        //         {
        //             path: 'contact',
        //             element : <Contact />
        //         },
        //     ]
        // }
        {
            path: "/",
            element: <Home />
        },
        {
            path: "*",
            element: <NotFound />
        }

    ]);

    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>    
                </li>    
                <li>
                    <Link to='/books'>Books</Link>
                </li>
            </ul>    
        </nav> 
        {element}   
        {/* <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/books/*" element={<BookRoutes/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes> */}
        </>
    )
}
export default UseRouteHooks;