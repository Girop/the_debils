import {Box, Chip} from "@mui/material";
import React from "react";

export default function TagSelector({tags, selectedTags, setSelectedTags}) {
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

    return <Box sx={{width: "100%"}} direction={"row"} gap={1}>
        {tags.map((tagName) => {
            const isSelected = selectedTags.includes(tagName);
            return <Chip sx={{mb: 1, mr: 1}} variant={isSelected ? "filled" : "outlined"}
                         color={"primary"} label={"#" + tagName}
                         key={tagName}
                         onClick={isSelected ? undefined : () => handleTagClick(tagName)}
                         onDelete={isSelected ? () => handleTagDelete(tagName) : undefined}/>
        })}
    </Box>;
}