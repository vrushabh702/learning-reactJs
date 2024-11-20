import { Link, Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import AppProps from './props/appProps';
import { Home } from './router/pages/Home';
import { NotFound } from './router/pages/NotFound'
import { BookRoutes } from './router/pages/bookRoutes';
import UseRouteHooks from './router/pages/useRoutesHooks'
import { AppRouter } from './router/pages/AppRouter';

function App() {
  return (

    <>
    <AppRouter />
     {/* <UseRouteHooks /> */}
    </>
  );
}

export default App;