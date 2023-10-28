import * as React from 'react';
import SearchBar from "./projects/searchbar";
import ProjectList from "./projects/projectlist";
import {Container} from "@mui/material";
import {useEffect, useState} from "react";
import {SERVER_ADDRESS} from "./common";

export default function Projects() {
    const [tagsList, setTagsList] = useState([]);

    useEffect(() => {
        fetch(SERVER_ADDRESS + "/getTags", {method: "GET"}).then((response) => {
            response.json().then((json) => {
                setTagsList(json);
                console.log(json);
            });
        });
    }, []);

    return <Container maxWidth={"lg"}>
        <SearchBar tags={tagsList} />
        <ProjectList />
    </Container>
}
