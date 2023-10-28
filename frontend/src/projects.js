import * as React from 'react';
import SearchBar from "./projects/searchbar";
import ProjectList from "./projects/projectlist";
import {Container} from "@mui/material";

export default function Projects() {
    return <Container maxWidth={"lg"}>
        <SearchBar />
        <ProjectList />
    </Container>
}
