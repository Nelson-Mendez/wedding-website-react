import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home'
import Header from  './components/header'
import Details from './routes/details'
import RSVP from './routes/rsvp'
import TravelAccomodation from './routes/travelAccomodation'
import WeddingParty from './routes/weddingParty'
import Faq from './routes/faq';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/details",
        element: <Details />
    },
    {
        path: "/rsvp",
        element: <RSVP />
    },
    {
        path: "/travelAccomodation",
        element: <TravelAccomodation />
    },
    {
        path: "/weddingParty",
        element: <WeddingParty />
    },    
    {
        path: "/faq",
        element: <Faq />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
