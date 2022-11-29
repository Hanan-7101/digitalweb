import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import Appbar from "./components/AppBar";
import { useWallet } from "@solana/wallet-adapter-react";
import { ExportToExcel } from "./ExportTOExcel";
import axios from 'axios';
import { NufiWalletAdapter } from "@solana/wallet-adapter-wallets";




const App = () => {
  const { wallet, connect, sendTransaction, connecting, publicKey } =
    useWallet();
  const fileName = "myfile";
  const [isAdmin, setIsAdmin] = useState(false)
  const [data, setData] = useState()
  const [balance, setBalance] = useState("")

  useEffect(() => {
    const fetchData = () => {
      axios.get('http://localhost:5000/contract/balance').then(postData => {

        setData([postData.data])

        setBalance(postData.data)

      })
    }
    fetchData()

    console.log(balance)
    if (publicKey?.toString() === "3qqrpHKni5uBbgnbpLhGT8eTLNk5GH62TPKLzU1Vc6w1") {
      setIsAdmin(true)
    } else {
      setIsAdmin(false)
    }
  }, [publicKey])






  return (
    <>
      <Appbar />
      {isAdmin ? (<Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}> Your are the Admin!  </Typography>

        <Typography variant="h5" sx={{ textAlign: "center", marginTop: "4rem" }}> Your Current Balance is:{balance.balance}

        </Typography>
        <ExportToExcel apiData={data} fileName={fileName} />

      </Box>) : (<Box sx={{ textAlign: "cenetr" }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}> You are  Not the  Admin!  </Typography>


      </Box>)}






    </>
  );
};

export default App;
