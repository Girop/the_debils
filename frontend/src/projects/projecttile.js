import React from "react";
import {Card, Typography} from "@mui/material";

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
    if(string.length <= maxLength)
        return string;

    const shortened = string.substring(0, maxLength - 3 - 1);
    return shortened + "...";
};

const typeToDisplay = (type) => {
    switch(type) {
        case "Ustawa":
        case "Official": return "Projekt samorządowy";
        case "Proposition": return "Propozycja obywatelska";
    }
}

export default function ProjectTile(props) {
    const hasVote = props.project_type === "Official"
    console.log("props:", props);

    return <Card>
        <Typography variant={"h3"}>{props.project_name}</Typography>
        <Typography variant={"h4"}>{typeToDisplay(props.project_type)}</Typography>
        <p>Data dodania: {props.post_date}
            { hasVote ? ", Data głosowania: " : "" }
            { hasVote ? props.vote_date : "" }
        </p>
        <p>{shortenString(props.description, 120)}</p>
        <button>Szczegóły</button>
    </Card>
}
