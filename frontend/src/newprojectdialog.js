import {Box, Button, Container, Grid, Modal, Paper, Stack, TextField, Typography} from "@mui/material";
import TagSelector from "./tagselector";
import {useState} from "react";
import {SERVER_ADDRESS} from "./common";

export default function NewProjectDialog({isOpen, onClose, tagsList, projectsList}) {
    const [selectedTags, setSelectedTags] = useState([]);
    const [projectName, setProjectName] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [projectContent, setProjectContent] = useState("");

    const [nameError, setNameError] = useState("");
    const [authorError, setAuthorError] = useState("");
    const [contentError, setContentError] = useState("");

    const handleProjectName = (value) => {
        if (value.trim()) {
            setNameError("");
        } else {
            setNameError("Pole nie może być puste")
        }

        setProjectName(value);
    };

    const handleAuthorName = (value) => {
        if (value.trim()) {
            setAuthorError("");
        } else {
            setAuthorError("Pole nie może być puste")
        }

        setAuthorName(value);
    };

    const handleProjectContent = (value) => {
        if (value.trim()) {
            setContentError("");
        } else {
            setContentError("Pole nie może być puste")
        }

        setProjectContent(value);
    };

    const verify = () => {
        let result = true;
        if (!projectName.trim()) {
            setNameError("Pole nie może być puste");
            result = false;
        }

        if (!authorName.trim()) {
            setAuthorError("Pole nie może być puste");
            result = false;
        }

        if (!projectContent.trim()) {
            setContentError("Pole nie może być puste");
            result = false;
        }

        return result;
    };

    const handleSend = () => {
        if (!verify())
            return;

        const date = new Date();
        const dateString = date.toISOString().split('T')[0];

        let maxId = -1;
        for(let i = 0; i < projectsList.length; i++)
            if(projectsList[i].project_id > maxId)
                maxId = projectsList[i].project_id

        fetch(SERVER_ADDRESS + "/addProject", {
            method: "POST", body: JSON.stringify({
                project_id: maxId + 1,
                amendments: [],
                approves: 0,
                author: authorName,
                content: projectContent,
                disapproves: 0,
                post_date: dateString,
                project_type: "Proposition",
                tags: selectedTags,
                title: projectName,
                vote_date: ""
            }), headers: {"Content-Type": "application/json"}
        }).then((response) => {
            window.location.reload(false);
            onClose();
        }).catch((x) => {
            onClose();
        });
    };

    return <Modal open={isOpen} onClose={() => onClose()}>
        <Container maxWidth={"lg"}>
            <Paper sx={{mt: "5em", padding: "1.5em"}}>
                <Typography sx={{mb: 2}} variant={"h3"}>Zaproponuj nowy projekt</Typography>
                <Grid container columnSpacing={2}>
                    <Grid item sm={12} lg={6}>
                        <TextField size={"small"} sx={{width: "100%", mt: 1}} label={"Nazwa projektu"}
                                   value={projectName} onChange={(event) => {
                            handleProjectName(event.target.value)
                        }} error={nameError ? true : undefined} helperText={nameError}/>
                    </Grid>
                    <Grid item sm={12} lg={6}>
                        <TextField size={"small"} sx={{width: "100%", mt: 1}} label={"Imię i nazwisko autora"}
                                   value={authorName} onChange={(event) => handleAuthorName(event.target.value)}
                                   error={authorError ? true : undefined} helperText={authorError}/>
                    </Grid>
                    <Grid item sm={12}>
                        <TextField size={"small"} sx={{width: "100%", mt: 3}} multiline rows={8}
                                   label={"Treść projektu"} value={projectContent}
                                   onChange={(event) => handleProjectContent(event.target.value)}
                                   error={contentError ? true : undefined} helperText={contentError}/>
                    </Grid>
                    <Grid item sm={12} sx={{mt: 2}}>
                        <TagSelector tags={tagsList} selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>
                    </Grid>
                    <Grid item sm={12} sx={{mt: 1, justifyContent: "flex-end"}}>
                        <Stack
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                            spacing={2}
                        >
                            <Button color={"primary"} variant={"contained"} onClick={() => handleSend()}>Wyślij</Button>
                            <Button color={"secondary"} variant={"contained"} onClick={() => onClose()}>Anuluj</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    </Modal>
};