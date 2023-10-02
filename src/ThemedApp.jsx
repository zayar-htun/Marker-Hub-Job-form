import { CssBaseline } from "@mui/material";

import { createContext, useState } from "react";
import App from "./App";
import { useEffect } from "react";
import { getalljobs } from "./apicalls";

export const themeContext = createContext();

export default function ThemedApp() {
    const [hello, setHello] = useState("hello");
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await getalljobs();
            setJobs(result.data.items);
            console.log(result.data.items);
        })();
    }, []);
    return (
        <themeContext.Provider value={{ hello , jobs, setJobs }}>
            <CssBaseline />
            <App />
        </themeContext.Provider>
    );
}
