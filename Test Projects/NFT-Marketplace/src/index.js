import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs'
import Explore from './components/Explore';
import { Nav } from 'react-bootstrap';
import Footer from './components/Footer/Footer';
import Background from './components/background/Background';
import UploadNft from './components/UploadNft';
import MyNfts from './components/MyNfts';


if (typeof web3 !== 'undefined') {
  // web3 is available, proceed with MetaMask functionality
} else {
  // web3 is not available, provide fallback
  window.location.href = "fallback.html";
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  
  <Background></Background>
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
        <Route path="/nftPage" element={<Marketplace />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/sellNFT" element={<UploadNft/>}/> 
        <Route path="/Explore" element={<Explore />}/> 
        <Route path="/nftPage/:tokenId" element={<NFTPage />}/>        
        <Route path="/profile" element={<MyNfts />}/> 
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();