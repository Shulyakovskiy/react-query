import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {ToastContainer} from "react-toastify";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {initializeMockAdapter} from "./utils/mockApi";
import {BrowserRouter, Router} from "react-router-dom";

initializeMockAdapter();

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
          <QueryClientProvider client={queryClient}>
              <App />
              <ToastContainer />
              <ReactQueryDevtools initialIsOpen={true} />
          </QueryClientProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
