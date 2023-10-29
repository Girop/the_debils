import {Typography, Chip, Container, Stack, Fab} from "@mui/material";
import {Box} from "@mui/system";
import React, {useContext, useState} from "react"
import {ProjectContext} from "./projectcontext";
import Grid2 from "@mui/material/Unstable_Grid2";
import LikeButtons from "./likebuttons";
import {Add, ArrowBack} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import AddAmendmentDialog from "./addamendmentdialog";

const AddAmendment = ({setAddAmendmentModalOpen}) => {
    return <Fab variant={"extended"} color='secondary' size='medium'
                sx={{position: "fixed", bottom: 24, right: 24}}
                onClick={() => setAddAmendmentModalOpen(true)}>
        Zaproponuj zmianę... <Add sx={{ml: 1}}/>
    </Fab>
};

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
    const [isAddAmendmentDialogOpen, setIsAddAmendmentDialogOpen] = useState(false);

    const {bigPage, setPage} = useContext(ProjectContext);
    const hasVote = bigPage.project_type === "Official"
    const navigate = useNavigate();

    const {setSnackbarText, setSnackbarOpen, project_id, project_name, project_type, post_date, vote_date, description, amendments, tags} = bigPage;

    const handleBack = () => {
        navigate("/");
    };

    return (
        <>
            <Container sx={{mt: 2}}>
                <Box sx={{display: "flex", alignItems: "center", mb: 2}}>
                    <Fab sx={{mr: 2}} color={"secondary"} onClick={() => handleBack()}><ArrowBack/></Fab>
                    <Stack>
                        <Typography variant={"h4"}>{bigPage.project_name}</Typography>
                        <Typography
                            color={"text.disabled"}
                            variant={"body2"}>{typeToDisplay(bigPage.project_type)}</Typography>
                    </Stack>
                </Box>
                <Grid2 container spacing={1}>
                    <Grid2 item>
                        <Chip color={"primary"} label={"Data dodania: " + bigPage.post_date}/>
                    </Grid2>
                    {hasVote ? (<Grid2 item><Chip color={"primary"}
                                                  label={"Data głosowania: " + bigPage.vote_date}/></Grid2>) : ""}
                </Grid2>
                <Grid2 sx={{mt: 1}} container spacing={1}>
                    {tags.map((tag, index) => {
                        return <Grid2 item key={index}><Chip color={"primary"} variant={"outlined"}
                                                             label={"#" + tag}/></Grid2>
                    })}
                </Grid2>
                <Typography sx={{mb: 2, mt: 2}} variant={"body1"}>{bigPage.description}</Typography>
                <Typography sx={{mb: 1}} variant={"h4"}>Komentarze i sugestie</Typography>
                {amendments.length > 0 ? amendments.map((amendment, index) => {
                    return <Stack sx={{mb: 3}} key={index}>
                        <Typography variant={"h5"}>{amendment.author} - {amendment.date}</Typography>
                        <Typography variant={"body2"}>{amendment.content}</Typography>
                        <LikeButtons sx={{mt: 1, alignSelf: "flex-start"}} size={"small"} approves={amendment.approves}
                                     disapproves={amendment.disapproves} color={"secondary"}/>
                    </Stack>;
                }) : (<Typography variant={"h5"}>Brak komentarzy...</Typography>)}
            </Container>
            <AddAmendment setAddAmendmentModalOpen={setIsAddAmendmentDialogOpen}/>
            <AddAmendmentDialog setSnackbarText={setSnackbarText} setSnackbarOpen={setSnackbarOpen}
                                onClose={() => setIsAddAmendmentDialogOpen(false)} isOpen={isAddAmendmentDialogOpen}
                                project={bigPage}/>
        </>
    )
}
