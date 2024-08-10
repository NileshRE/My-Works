import React from "react";
import {Routes, Route} from "react-router-dom";
import { Navbar, Homepage, Exchanges, CryptoDetails, News, Footer, CryptoCurrency } from "./Components"
import './App.css'

const App = () => {
  return (
    <div className="app-container">
          <Navbar />
            <div>
              <Routes>
                <Route exact path="/" Component={Homepage} />
                <Route exact path="/exchanges" Component={Exchanges} />
                <Route exact path="/cryptocurrency" Component={CryptoCurrency} />
                <Route exact path="/cryptoDetails/:coinId" Component={CryptoDetails} /> 
                <Route exact path="/news" Component={News} /> 
              </Routes>
          </div>
          <Footer />
    </div>
  );
}

export default App;
