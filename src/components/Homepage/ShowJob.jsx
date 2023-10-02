import {
    Box,
    Button,
    Card,
    Container,
    Divider,
    Grid,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getalljobs } from "../../apicalls";

export default function ShowJob() {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await getalljobs();
            setJobs(result.data.items);
            console.log(result.data.items);
        })();
    }, []);
    const navigate = useNavigate();
    return (
        <Box>
            <Box sx={{ px: 3 }}>
                <Card sx={{ width: "100%", boxShadow: 1, p: 4 }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box>
                            <Typography variant="h5">
                                Opening Job Lists
                            </Typography>
                        </Box>
                    </Box>
                    <Divider sx={{ m: 3 }} />

                    {jobs?.map(job => {
                        return (
                            <Box key={job.guid}>
                                <Box>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={4}>
                                            <Box>
                                                <Typography variant="h4">
                                                    {job.name}
                                                </Typography>
                                                <Typography>
                                                    {job.position}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    gap: "10px",
                                                }}
                                            >
                                                {job.value
                                                    .split("/")
                                                    .map((tech, index) => (
                                                        <Typography
                                                            key={index}
                                                            sx={{
                                                                bgcolor:
                                                                    "black",
                                                                color: "white",
                                                                p: 1,
                                                                borderRadius:
                                                                    "10px",
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
                                                            {tech}
                                                        </Typography>
                                                    ))}
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Container>
                                                <Typography
                                                    sx={{ textAlign: "center" }}
                                                >
                                                    Full Time
                                                </Typography>
                                                <Button
                                                    sx={{
                                                        bgcolor: "grey",
                                                        color: "black",
                                                        borderRadius: "20px",
                                                        width: "100%",
                                                    }}
                                                    onClick={()=>{
                                                        localStorage.setItem("jobName", job.name);
                                                        localStorage.setItem("jobDescription", job.description);
                                                        navigate(`/jobform/${job.guid}`)
                                                    }}
                                                >
                                                    Apply
                                                </Button>
                                            </Container>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Divider sx={{ my: 3 }} />
                            </Box>
                        );
                    })}
                    <Divider sx={{ my: 3 }} />
                </Card>
            </Box>
        </Box>
    );
}
