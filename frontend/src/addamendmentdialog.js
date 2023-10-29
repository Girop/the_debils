import {Box, Button, Container, Grid, Modal, Paper, Stack, TextField, Typography} from "@mui/material";
import TagSelector from "./tagselector";
import {useState} from "react";
import {SERVER_ADDRESS} from "./common";
import {useNavigate} from "react-router-dom";

export default function AddAmendmentDialog({project, isOpen, onClose, setSnackbarOpen, setSnackbarText}) {
    const [authorName, setAuthorName] = useState("");
    const [amendmentContent, setAmendmentContent] = useState("");

    const [authorError, setAuthorError] = useState("");
    const [amendmentError, setAmendmentError] = useState("");

    const navigate = useNavigate();

    const clear = () => {
        setAuthorName("");
        setAmendmentContent("");
        setAuthorError("");
        setAmendmentContent("");
    };

    const handleAuthorName = (value) => {
        if (value.trim()) {
            setAuthorError("");
        } else {
            setAuthorError("Pole nie może być puste")
        }

        setAuthorName(value);
    };

    const handleAmendmentContent = (value) => {
        if (value.trim()) {
            setAmendmentError("");
        } else {
            setAmendmentError("Pole nie może być puste")
        }

        setAmendmentContent(value);
    };

    const verify = () => {
        let result = true;
        if (!authorName.trim()) {
            setAuthorError("Pole nie może być puste");
            result = false;
        }

        if (!amendmentContent.trim()) {
            setAmendmentError("Pole nie może być puste");
            result = false;
        }

        return result;
    };

    const handleSend = () => {
        if (!verify())
            return;

        const date = new Date();
        const dateString = date.toISOString().split('T')[0];

        fetch(SERVER_ADDRESS + "/addAmendment", {
            method: "POST", body: JSON.stringify({
                project_id: project.project_id,
                author: authorName,
                date: dateString,
                position: 0,
                lenght: 0,
                approves: 0,
                disapproves: 0,
                content: amendmentContent,
            }), headers: {"Content-Type": "application/json"}
        }).then((response) => {
            clear();
            navigate("/");
            window.location.reload(false);
            onClose();
        }).catch((x) => {
            setSnackbarOpen(true);
            setSnackbarText("Wystąpił błąd podczas przesyłania sugestii!");
            onClose();
        });
    };

    const handleCancel = () => {
        clear();
        onClose();
    };

    return <Modal open={isOpen} onClose={() => onClose()}>
        <Container maxWidth={"lg"}>
            <Paper sx={{mt: "5em", padding: "1.5em"}}>
                <Typography sx={{mb: 2}} variant={"h3"}>Zaproponuj zmianę</Typography>
                <Grid container columnSpacing={2}>
                    <Grid item sm={12} lg={6}>
                        <TextField size={"small"} sx={{width: "100%", mt: 1}} label={"Imię i nazwisko autora"}
                                   value={authorName} onChange={(event) => handleAuthorName(event.target.value)}
                                   error={authorError ? true : undefined} helperText={authorError}/>
                    </Grid>
                    <Grid item sm={12}>
                        <TextField size={"small"} sx={{width: "100%", mt: 3}} multiline rows={8}
                                   label={"Treść komenatarza"} value={amendmentContent}
                                   onChange={(event) => handleAmendmentContent(event.target.value)}
                                   error={amendmentError ? true : undefined} helperText={amendmentError}/>
                    </Grid>
                    <Grid item sm={12} sx={{mt: 1, justifyContent: "flex-end"}}>
                        <Stack
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                            spacing={2}
                        >
                            <Button color={"primary"} variant={"contained"} onClick={() => handleSend()}>Wyślij</Button>
                            <Button color={"secondary"} variant={"contained"}
                                    onClick={() => handleCancel()}>Anuluj</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    </Modal>
};