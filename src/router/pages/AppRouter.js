import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./Home";
import { BookRoutes } from "./bookRoutes";
import { NotFound } from "./NotFound";
import AppReactContextApi from "../../StateMangement/ReactContextApi/AppReactContextApi";
import AppAddToCart from "../../StateMangement/ReactContextApi/AddToCart/Components/AppAddToCart";
import { CartProvider } from "../../StateMangement/ReactContextApi/AddToCart/Context/cart";
import AppZustand from "../../StateMangement/Zustand/AppZustand";

export function AppRouter() {
  const location = useLocation(); // locaion of object looks like
  // console.log(location)

  return (
    <>
      {/* <div>
        <AppProps></AppProps>
      </div> */}
      <nav>
        <ul>
          <li>
            {/* <Link to='/'>Home</Link> */}
            <Link to="/" replace>
              Home
            </Link>{" "}
            {/** it complete remove page from histry so u go 2 step back if backpage */}
          </li>
          <li>
            {/* <Link to='/books'>Books</Link> */}
            <Link to="/books" reloadDocument>
              Books
            </Link>
            {/* reload the entire page not just change */}
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red" } : {};
              }}
              to="/"
            >
              {({ isActive }) => {
                return isActive ? "Active Home" : "Home Navlink";
              }}
            </NavLink>
          </li>
          <li>
            <NavLink end to="/books" state="Hi">
              Books Navlink
            </NavLink>
          </li>


          {/* ********** implementing route in all upcomming example ******** */}
          <li>
            <NavLink to="/reactContextApi"> ReactContextApi </NavLink>
          </li>
          <li>
            <NavLink to="/addToCart"> AddToCart </NavLink>
          </li>
          <li>
            <NavLink to="/zustand"> Zustand </NavLink>
          </li>
          {/* ********** end implementing route in all upcomming example ******** */}


        </ul>
      </nav>
      {location.state}
      <br></br>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />}>
          {/* book routes mention gone to bookRoutes */}
        </Route>
        {/* above is nesting to route */}
        {/* <Route path='/books' element={<BookList />}/>
        <Route path='/books/:id' element={<Book />}/>
        <Route path='/books/new' element={<NewBook />}></Route> */}
        <Route path="*" element={<NotFound />}></Route>
        

        {/* ********** implementing route in all upcomming example ******** */}

        <Route path="/reactContextApi" element={<AppReactContextApi />}></Route>
        <Route path="/addToCart" element={
          <CartProvider>
            <AppAddToCart />
          </CartProvider>
          }></Route>
        <Route path="/zustand" element={<AppZustand />}></Route>


        {/* ********** end implementing route in all upcomming example ******** */}

      </Routes>
    </>
  );
}
