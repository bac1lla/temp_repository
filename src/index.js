import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Matrix from "./store/Matrix";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const Context = createContext({
    matrix: new Matrix()
})

root.render(
  <React.StrictMode>
      <Context.Provider value={{matrix: new Matrix()}}/>
      <App />
  </React.StrictMode>
);
