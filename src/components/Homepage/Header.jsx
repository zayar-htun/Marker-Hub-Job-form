import { Box, Typography } from "@mui/material";

export default function Header() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "400px",
                bgcolor: "black",
            }}
        >
            <img
                src="/src/assets/image/Logo (1).png"
                style={{
                    width: "150px",
                    height: "150px",
                }}
                alt=""
            />
            <Typography sx={{ color: "white" , fontSize:"50px", fontWeight:500 }}>
                Market-Hub Business Center
            </Typography>
        </Box>
    );
}
