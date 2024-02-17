import {
    Avatar,
    Box,
    Button,
    Card,
    Container,
    IconButton,
    OutlinedInput,
    Grid,
    Typography,
    Divider,
    CardActionArea,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import { useContext } from "react";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { themeContext } from "../ThemedApp";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { getApplyJob } from "../apicalls";
import { useNavigate } from "react-router-dom";

export default function FormJob() {
    const navigate = useNavigate();
    const jobName = localStorage.getItem("jobName");
    const jobDescription = localStorage.getItem("jobDescription");
    const [photo, setPhoto] = useState("");
    const [nrcfront, setnrcfront] = useState("");
    const [nrcback, setnrcback] = useState("");
    const [policeCer, setPoliceCer] = useState("");
    const [photoBase, setPhotoBase] = useState("");
    const [nrcfrontBase, setnrcfrontBase] = useState("");
    const [nrcbackBase, setnrcbackBase] = useState("");
    const [policeCerBase, setPoliceCerBase] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    
    const nameInput = useRef();
    const ageInput = useRef();
    const emailInput = useRef();
    const phoneInput = useRef();
    const genderInput = useRef();
    const religionInput = useRef();
    const nationInput = useRef();
    const maritalInput = useRef();
    const addressInput = useRef();
    const skillsInput = useRef();
    const eduInput = useRef();
    const motivationInput = useRef();

    function convertToBase64(e) {
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.file[0]);
        reader.onload = () => {
            console.log(reader.result); // base64 string
        };
        reader.onerror = error => {
            console.log("error", error);
        };
    }

    const getFile = async () => {
        const [fileHandle] = await window.showOpenFilePicker({
            types: [
                {
                    description: "Images",
                    accept: {
                        "image/*": [".png", ".jpeg", ".jpg"],
                    },
                },
            ],
            excludeAcceptAllOption: true,
            multiple: false,
        });

        return await fileHandle.getFile();
    };

    const changePhoto = async e => {
        const file = await getFile();
        setPhoto(URL.createObjectURL(file));

        const fileName =
            file.type === "image/png" ? `photo-photo.png` : `photo-photo.jpg`;

        // Convert the file to a base64 string
        const reader = new FileReader();
        reader.onload = () => {
            const base64String = reader.result.split(",")[1]; // Extract base64 part
            console.log(base64String); // Base64 string
            setPhotoBase(base64String);
        };
        reader.readAsDataURL(file);
    };

    const changeNrcFront = async e => {
        const file = await getFile();
        setnrcfront(URL.createObjectURL(file));

        const fileName =
            file.type === "image/png" ? `photo-photo.png` : `photo-photo.jpg`;

        const reader = new FileReader();
        reader.onload = () => {
            const base64String = reader.result.split(",")[1]; // Extract base64 part
            console.log(base64String); // Base64 string
            setnrcfrontBase(base64String);
        };
        reader.readAsDataURL(file);
    };

    const changeNrcBack = async e => {
        const file = await getFile();
        setnrcback(URL.createObjectURL(file));

        const fileName =
            file.type === "image/png" ? `photo-photo.png` : `photo-photo.jpg`;

        const reader = new FileReader();
        reader.onload = () => {
            const base64String = reader.result.split(",")[1]; // Extract base64 part
            console.log(base64String); // Base64 string
            setnrcbackBase(base64String);
        };
        reader.readAsDataURL(file);
    };

    const changePolice = async e => {
        const file = await getFile();
        setPoliceCer(URL.createObjectURL(file));

        const fileName =
            file.type === "image/png" ? `photo-photo.png` : `photo-photo.jpg`;

        const reader = new FileReader();
        reader.onload = () => {
            const base64String = reader.result.split(",")[1]; // Extract base64 part
            console.log(base64String); // Base64 string
            setPoliceCerBase(base64String);
        };
        reader.readAsDataURL(file);
    };

    return (
        <Box sx={{ bgcolor: "black" }}>
            <Container sx={{ p: 3 }}>
                <Card>
                    <form
                        onSubmit={e => {
                            e.preventDefault();

                            const nameBackend = nameInput.current.value.trim();
                            const ageBackend = ageInput.current.value.trim();
                            const emailBackend =
                                emailInput.current.value.trim();
                            const phoneBackend =
                                phoneInput.current.value.trim();
                            const genderBackend =
                                genderInput.current.value.trim();
                            const religionBackend =
                                religionInput.current.value.trim();
                            const nationBackend =
                                nationInput.current.value.trim();
                            const maritalBackend =
                                maritalInput.current.value.trim();
                            const addressBackend =
                                addressInput.current.value.trim();
                            const skillsBackend =
                                skillsInput.current.value.trim();
                            const eduBackend = eduInput.current.value.trim();
                            const motivationBackend =
                                motivationInput.current.value.trim();

                            if (
                                !nameBackend ||
                                !ageBackend ||
                                !emailBackend ||
                                !phoneBackend ||
                                !genderBackend ||
                                !religionBackend ||
                                !nationBackend ||
                                !maritalBackend ||
                                !addressBackend ||
                                !skillsBackend ||
                                !eduBackend ||
                                !motivationBackend ||
                                !photoBase ||
                                !nrcfrontBase ||
                                !nrcbackBase ||
                                !policeCerBase
                            ) {
                                // Set error message in state
                                setErrorMessage("Please fill out all fields");
                                return;
                            }

                            (async () => {
                                const result = await getApplyJob(
                                    jobName,
                                    jobDescription,
                                    nameBackend,
                                    ageBackend,
                                    emailBackend,
                                    phoneBackend,
                                    genderBackend,
                                    religionBackend,
                                    nationBackend,
                                    maritalBackend,
                                    skillsBackend,
                                    eduBackend,
                                    guid,
                                    motivationBackend,
                                    policeCerBase,
                                    photoBase,
                                    addressBackend,
                                    nrcfrontBase,
                                    nrcbackBase
                                );

                                if (result === 409) {
                                    setErrorMessage("User already exists.");
                                } else if (result) {
                                    navigate("/success");
                                } else {
                                    setErrorMessage(
                                        "Job Apply failed. Please try again later."
                                    );
                                }
                            })();
                        }}
                        style={{
                            display: "flex",
                            padding: "50px",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography sx={{ m: 2 }} variant="h5">
                            <span style={{ fontWeight: 700 }}>Title :</span>{" "}
                            {jobName}
                        </Typography>
                        <Typography sx={{ mx: 2, mb: 3 }} variant="h6">
                            <span style={{ fontWeight: 650 }}>
                                Description :
                            </span>{" "}
                            {jobDescription}
                        </Typography>
                        <Divider sx={{ mx: 4, my: 1 }} />
                        <IconButton
                            onClick={changePhoto}
                            onChange={convertToBase64}
                            sx={{ mb: "20px" }}
                        >
                            <Avatar
                                src={photo}
                                sx={{
                                    background: "#216082",
                                    width: 128,
                                    height: 128,
                                    mb: 1,
                                }}
                            >
                                p
                            </Avatar>
                        </IconButton>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <OutlinedInput
                                    required
                                    inputRef={nameInput}
                                    placeholder="Name"
                                    fullWidth={true}
                                    sx={{ mb: 2 }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <OutlinedInput
                                    required
                                    inputRef={ageInput}
                                    placeholder="Date of Birth"
                                    fullWidth={true}
                                    inputProps={{ type: "date" }} // Set the type to "date" for date input
                                    sx={{ mb: 3 }}
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <OutlinedInput
                                    required
                                    inputRef={emailInput}
                                    placeholder="Email"
                                    fullWidth={true}
                                    sx={{ mb: 2 }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <OutlinedInput
                                    required
                                    inputRef={phoneInput}
                                    placeholder="Phone Number"
                                    fullWidth={true}
                                    inputProps={{ type: "number" }}
                                    sx={{ mb: 3 }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <OutlinedInput
                                    required
                                    inputRef={genderInput}
                                    placeholder="Gender"
                                    fullWidth={true}
                                    sx={{ mb: 2 }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <OutlinedInput
                                    required
                                    inputRef={religionInput}
                                    placeholder="Religion"
                                    fullWidth={true}
                                    sx={{ mb: 3 }}
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <OutlinedInput
                                    required
                                    inputRef={nationInput}
                                    placeholder="Nation"
                                    fullWidth={true}
                                    sx={{ mb: 2 }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <OutlinedInput
                                    required
                                    inputRef={maritalInput}
                                    placeholder="Marital Status"
                                    fullWidth={true}
                                    sx={{ mb: 3 }}
                                />
                            </Grid>
                        </Grid>
                        <OutlinedInput
                            required
                            inputRef={addressInput}
                            placeholder="Address"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                        <OutlinedInput
                            required
                            inputRef={skillsInput}
                            placeholder="Skills"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />

                        <OutlinedInput
                            required
                            inputRef={eduInput}
                            placeholder="Educations"
                            fullWidth={true}
                            sx={{ mb: 3 }}
                        />

                        <OutlinedInput
                            required
                            inputRef={motivationInput}
                            placeholder="Motivation"
                            fullWidth={true}
                            multiline={true}
                            sx={{ mb: 3 }}
                        />

                        <Grid container spacing={4}>
                            <Grid item xs={12} md={4}>
                                {nrcfront ? (
                                    <Box onClick={changeNrcFront}>
                                        <img
                                            src={nrcfront}
                                            alt=""
                                            style={{
                                                width: "330px",
                                                height: "200px",
                                            }}
                                        />
                                    </Box>
                                ) : (
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            bgcolor: "#fffff2",
                                            height: "200px",
                                            width: "330px",
                                        }}
                                        onClick={changeNrcFront}
                                    >
                                        <Typography>
                                            Upload Nrc Front
                                        </Typography>
                                        <IconButton>
                                            <FileUploadIcon />
                                        </IconButton>
                                    </Box>
                                )}
                            </Grid>
                            <Grid item xs={12} md={4}>
                                {nrcback ? (
                                    <Box onClick={changeNrcBack}>
                                        <img
                                            src={nrcback}
                                            alt=""
                                            style={{
                                                width: "330px",
                                                height: "200px",
                                            }}
                                        />
                                    </Box>
                                ) : (
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            bgcolor: "#fffff2",
                                            height: "200px",
                                            width: "330px",
                                        }}
                                        onClick={changeNrcBack}
                                    >
                                        <Typography>Upload Nrc Back</Typography>
                                        <IconButton>
                                            <FileUploadIcon />
                                        </IconButton>
                                    </Box>
                                )}
                            </Grid>
                            <Grid item xs={12} md={4}>
                                {policeCer ? (
                                    <Box onClick={changePolice}>
                                        <img
                                            src={policeCer}
                                            alt=""
                                            style={{
                                                width: "330px",
                                                height: "200px",
                                            }}
                                        />
                                    </Box>
                                ) : (
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            bgcolor: "#fffff2",
                                            height: "200px",
                                            width: "330px",
                                        }}
                                        onClick={changePolice}
                                    >
                                        <Typography>
                                            Upload Police Certification
                                        </Typography>
                                        <IconButton>
                                            <FileUploadIcon />
                                        </IconButton>
                                    </Box>
                                )}
                            </Grid>
                        </Grid>

                        {errorMessage && (
                            <div style={{ color: "red" }}>{errorMessage}</div>
                        )}

                        <Button
                            type="submit"
                            variant="contained"
                            color="info"
                            sx={{
                                mt: 3,
                                width: "300px",
                                fontSize: "28px",
                                fontWeight: 500,
                                borderRadius: "50px",
                                bgcolor: "#216082",
                            }}
                        >
                            Apply
                        </Button>
                    </form>
                </Card>
            </Container>
        </Box>
    );
}
