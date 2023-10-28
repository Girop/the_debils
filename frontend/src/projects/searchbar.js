import React, {useState} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Chip, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import {FaX, FaXmark} from "react-icons/fa6";

const tags = [
    "parki",
    "imprezy",
    "chodniki"
]

export default function SearchBar() {
    const [selectedProjectTypes, setSelectedProjectTypes] = useState(["Official", "Proposition"]);
    const [seletedTags, setSelectedTags] = useState([]);

    const handleProjectTypes = (event, newProjectTypes) => {
        setSelectedProjectTypes(newProjectTypes);
    };

    const handleTagClick = (clickedTag) => {
        setSelectedTags((previous) => {
            const arr = [...previous];
            if (!previous.includes(clickedTag))
                arr.push(clickedTag);
            return arr;
        })
    };

    const handleTagDelete = (deletedTag) => {
        setSelectedTags((previous) => {
            return previous.filter((elem) => elem !== deletedTag);
        });
    };

    return <Grid2 sx={{mt: 2, mb: 2}} container spacing={2}>
        <Grid2 item sm={12} lg={6}>
            <TextField sx={{"width": "100%"}} label={"Nazwa projektu..."} variant={"filled"}/>
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
            <Stack direction={"row"} gap={1}>
                {tags.map((tagName) => {
                    const isSelected = seletedTags.includes(tagName);
                    return <Chip variant={isSelected ? "filled" : "outlined"}
                                 color={"primary"} label={"#" + tagName}
                                 key={tagName}
                                 onClick={isSelected ? undefined : () => handleTagClick(tagName)}
                                 onDelete={isSelected ? () => handleTagDelete(tagName) : undefined } />
                })}
            </Stack>
        </Grid2>
    </Grid2>;
}
