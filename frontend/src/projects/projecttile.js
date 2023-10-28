import React from "react";

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
        case "Official": return "Projekt samorządowy";
        case "Proposition": return "Propozycja obywatelska";
    }
}

export default function ProjectTile(props) {
    const hasVote = props.project_type === "Official"

    return <div style={{backgroundColor: "red"}}>
        <h1>{props.project_name}</h1>
        <h4>{typeToDisplay(props.project_type)}</h4>
        <p>Data dodania: {props.post_date}
            { hasVote ? ", Data głosowania: " : "" }
            { hasVote ? props.vote_date : "" }
        </p>
        <p>{shortenString(props.description, 120)}</p>
        <button>Szczegóły</button>
    </div>
}