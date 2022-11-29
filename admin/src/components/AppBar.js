import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    Box,

} from "@mui/material";
import React from "react";
import "./style.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";





const Appbar = () => {



    return (<>
        <AppBar position="sticky" elevation={0} sx={{ background: "#1B194B" }}>
            {/* <Toolbar disableGutters={true}> */}
            <Container maxWidth="xl" sx={{ width: "100%" }}>
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <Box className="main-l" sx={{ width: "100%" }}>
                            <Typography variant="h4"> Admin Panel  </Typography>
                        </Box>

                        <Box className="main-b">


                            <WalletMultiButton />
                        </Box>
                    </Box>
                </Toolbar>
            </Container>



        </AppBar>


    </>
    );
};

export default Appbar;
