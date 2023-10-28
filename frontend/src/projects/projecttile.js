import React from "react";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Stack,
    Typography
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import parkImage from "./park.jpg";

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

export default function ProjectTile(props) {
    const hasVote = props.project_type === "Official"
    console.log("props:", props);

    return <Card variant={"outlined"}>
        <CardActionArea>
            <CardMedia
                sx={{height: "200px"}}
                image={parkImage}
                title="park"
            />
            <CardContent>
                <Typography variant={"h4"}>{props.project_name}</Typography>
                <Typography sx={{mb: 2}} color={"text.disabled"}
                            variant={"body2"}>{typeToDisplay(props.project_type)}</Typography>
                <Grid2 container spacing={1}>
                    <Grid2 item>
                        <Chip color={"primary"} label={"Data dodania: " + props.post_date}/>
                    </Grid2>
                    {hasVote ? (<Grid2 item><Chip color={"primary"}
                                                  label={"Data głosowania: " + props.vote_date}/></Grid2>) : ""}
                </Grid2>
                <Typography sx={{mb: 2, mt: 2}} variant={"body1"}>{shortenString(props.description, 120)}</Typography>
            </CardContent>
        </CardActionArea>
    </Card>
}
