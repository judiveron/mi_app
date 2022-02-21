import React from 'react'
import { Navbar } from "./components/Navbar";
import 'boxicons';
import Home from './components/Home';
import Carrito from './components/Carrito';
import ProductoLista from './components/ProductoLista';
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from './context/DataProvider';
import Footer from './components/Footer';


function App() {

  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Home />
          <Carrito />
          <ProductoLista />
          <Footer />
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
