import { Box } from "@mui/material";
import Header from "../components/Homepage/Header";
import ShowJob from "../components/Homepage/ShowJob";

export default function Homepage() {
    return (
        <div>
            <Box>
                <Header />
            </Box>
            <Box sx={{mt:"-30px"}}>
                <ShowJob />
            </Box>
        </div>
    );
}
