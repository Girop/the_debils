import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    Button, ButtonGroup,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Typography
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import parkImage from "./park.jpg";
import {ProjectContext} from "../projectcontext";
import {ThumbDown, ThumbUp} from "@mui/icons-material";


/*

project_type => enum {
    Official,
    Proposition
}

project => {
    "name": string,
    "project_type": Project,
    "content": string,
    "post_date": date,
    "vote_date": date,
    "approves" int,
    "disapproves": int,
    "amendments": list[Amendment]
}

 */

const shortenString = (string, maxLength) => {
    if (string.length <= maxLength)
        return string;

    const shortened = string.substring(0, maxLength - 3 - 1);
    return shortened + "...";
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

export default function ProjectTile({
                                        project_name,
                                        project_type,
                                        description,
                                        post_date,
                                        vote_date,
                                        tags,
                                        approves,
                                        disapproves
                                    }) {
    const hasVote = project_type === "Official"
    const navigate = useNavigate();
    const {bigPage, setPage} = useContext(ProjectContext);

    function handleClick() {
        const props = {project_name, project_type, description, post_date, vote_date, tags};
        setPage(props);
        navigate("bigProjectView");
    }

    return <Card variant={"outlined"}>
        <CardActionArea onClick={() => handleClick()}>
            <CardMedia
                sx={{height: "200px"}}
                image={parkImage}
                title="park"
            >
                <ButtonGroup color={"secondary"} variant={"contained"}
                             sx={{position: "absolute", top: "4px", right: "4px"}}
                >
                    <Button><ThumbUp sx={{mr: 1}}/> {approves}</Button>
                    <Button><ThumbDown sx={{mr: 1}}/> {disapproves}</Button>
                </ButtonGroup>
            </CardMedia>
            <CardContent>
                <Typography variant={"h4"}>{project_name}</Typography>
                <Typography sx={{mb: 2}} color={"text.disabled"}
                            variant={"body2"}>{typeToDisplay(project_type)}</Typography>
                <Typography sx={{mb: 2, mt: 2}} variant={"body1"}>{shortenString(description, 120)}</Typography>
                <Grid2 container spacing={1}>
                    <Grid2 item>
                        <Chip size={"small"} color={"primary"} label={"Data dodania: " + post_date}/>
                    </Grid2>
                    {hasVote ? (<Grid2 item><Chip color={"primary"} size={"small"}
                                                  label={"Data głosowania: " + vote_date}/></Grid2>) : ""}
                </Grid2>
                <Grid2 sx={{mt: 1}} container spacing={1}>
                    {tags.map((tag, index) => {
                        return <Grid2 item key={index}><Chip size={"small"} color={"primary"} variant={"outlined"} label={"#" + tag}
                                                 /></Grid2>
                    })}
                </Grid2>
            </CardContent>
        </CardActionArea>
    </Card>
}
