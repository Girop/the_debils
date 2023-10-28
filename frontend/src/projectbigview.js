import { Typography, Chip } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react"
import { ProjectContext } from "./projectcontext";
import Grid2 from "@mui/material/Unstable_Grid2";

const typeToDisplay = (type) => {
    switch (type) {
        case "Ustawa":
        case "Official":
            return "Projekt samorządowy";
        case "Proposition":
            return "Propozycja obywatelska";
    }
}

export default function BigView() {
    const {bigPage, setPage} = useContext(ProjectContext);
    const hasVote = bigPage.project_type === "Official"
    return (
        <Box>
            <Typography variant={"h4"}>{bigPage.project_name}</Typography>  
                <Typography 
                    sx={{mb: 2}} color={"text.disabled"}
                    variant={"body2"}>{typeToDisplay(bigPage.project_type)}</Typography>
                <Grid2 container spacing={1}>
                    <Grid2 item>
                        <Chip color={"primary"} label={"Data dodania: " + bigPage.post_date}/>
                    </Grid2>
                    {hasVote ? (<Grid2 item><Chip color={"primary"}
                                                  label={"Data głosowania: " + bigPage.vote_date}/></Grid2>) : ""}
                </Grid2>
                <Typography sx={{mb: 2, mt: 2}} variant={"body1"}>{bigPage.description}</Typography>
        </Box>
    )
}
