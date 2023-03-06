import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./components/config/particlesConfig-Stars";
import reportWebVitals from './reportWebVitals';
import Forms from './components/forms';
import {
  BrowserRouter,
  Routes,
  Route,
  Form,
} from "react-router-dom";
import SellNFT from './components/SellNFT';
import Marketplace from './components/Marketplace';
import Profile from './components/Profile';
import NFTPage from './components/NFTpage';
import Navbar from './components/Navbar';

const particlesInit = async (main) => {
  console.log(main);
  await loadFull(main);
};

if (typeof web3 !== 'undefined') {
  // web3 is available, proceed with MetaMask functionality
} else {
  // web3 is not available, provide fallback
  window.location.href = "fallback.html";
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Forms/>}/>
        <Route path="/nftPage" element={<Marketplace />}/>
        <Route path="/sellNFT" element={<SellNFT />}/> 
        <Route path="/nftPage/:tokenId" element={<NFTPage />}/>        
        <Route path="/profile" element={<Profile />}/> 
      </Routes>
    </BrowserRouter>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
      />
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();