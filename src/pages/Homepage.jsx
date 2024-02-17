import { Box, Container, Typography } from "@mui/material";
import Header from "../components/Homepage/Header";
import ShowJob from "../components/Homepage/ShowJob";

export default function Homepage() {
    return (
        <div>
            <Box>
                <Header />
            </Box>
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: "-80px",
                    }}
                >
                    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <img
                            src="/src/assets/image/Logo (1).png"
                            style={{
                                width: "150px",
                                height: "150px",
                            }}
                            alt=""
                        />
                        <Typography variant="h5">Quick Q Innovation</Typography>
                    </Box>
                    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <img
                            src="/src/assets/image/Logo (1).png"
                            style={{
                                width: "150px",
                                height: "150px",
                            }}
                            alt=""
                        />
                        <Typography variant="h5">Market-Hub</Typography>
                    </Box>
                    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <img
                            src="/src/assets/image/Logo (1).png"
                            style={{
                                width: "150px",
                                height: "150px",
                            }}
                            alt=""
                        />
                        <Typography variant="h5">Gelivery Myanmar</Typography>
                    </Box>
                </Box>
            </Container>

            <Box sx={{ mt: "2px" }}>
                <ShowJob />
            </Box>
        </div>
    );
}
