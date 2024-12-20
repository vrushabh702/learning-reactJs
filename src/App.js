import { Link, Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import AppProps from './props/appProps';
import { Home } from './router/pages/Home';
import { NotFound } from './router/pages/NotFound'
import { BookRoutes } from './router/pages/bookRoutes';
import UseRouteHooks from './router/pages/useRoutesHooks'
import { AppRouter } from './router/pages/AppRouter';
import AppReactContextApi from './StateMangement/ReactContextApi/AppReactContextApi';
import AppAddToCart from './StateMangement/ReactContextApi/AddToCart/Components/AppAddToCart';
import { AppScalableModx } from './StateMangement/modx/AppScalableModx';
import AppZustand from './StateMangement/Zustand/AppZustand';

function App() {
  return (

    <>
    <AppRouter />
     {/* <UseRouteHooks /> */}
     {/* <AppReactContextApi></AppReactContextApi> */}
     {/* <AppAddToCart /> */}
     {/* <AppScalableModx /> */}
     {/* <AppZustand></AppZustand> */}
    </>
  );
}

export default App;