import React, {useState} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Box, Chip, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import {FaX, FaXmark} from "react-icons/fa6";
import TagSelector from "../tagselector";

export default function SearchBar({
                                      tags,
                                      selectedProjectTypes,
                                      setSelectedProjectTypes,
                                      selectedTags,
                                      setSelectedTags,
                                      nameFilter, setNameFilter
                                  }) {
    const handleProjectTypes = (event, newProjectTypes) => {
        setSelectedProjectTypes(newProjectTypes);
    };

    return <Grid2 sx={{mt: 2, mb: 2}} container spacing={2}>
        <Grid2 item sm={12} lg={6}>
            <TextField sx={{"width": "100%"}} label={"Nazwa projektu..."} variant={"filled"}
                       value={nameFilter} onChange={(event) => {
                setNameFilter(event.target.value);
            }}
            />
        </Grid2>
        <Grid2 sx={{alignSelf: "flex-end"}} item sm={12} lg={6}>
            <ToggleButtonGroup sx={{width: "100%"}} value={selectedProjectTypes} onChange={handleProjectTypes}
                               color={"primary"}>
                <ToggleButton value={"Official"} sx={{flexGrow: "1"}}>
                    <Typography variant={"body1"}>Projekty Samorządowe</Typography>
                </ToggleButton>
                <ToggleButton value={"Proposition"} sx={{flexGrow: "1"}}>
                    <Typography variant={"body1"}>Propozycje Obywatelskie</Typography>
                </ToggleButton>
            </ToggleButtonGroup>
        </Grid2>
        <Grid2 item sm={12}>
            <TagSelector tags={tags} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        </Grid2>
    </Grid2>;
}
