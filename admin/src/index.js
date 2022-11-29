import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Wallet } from './Wallet';
import { useWallet } from "@solana/wallet-adapter-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Wallet />
  </React.StrictMode>
);


