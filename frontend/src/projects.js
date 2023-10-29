import * as React from 'react';
import SearchBar from "./projects/searchbar";
import ProjectList from "./projects/projectlist";
import {Container} from "@mui/material";
import {useEffect, useState} from "react";
import {SERVER_ADDRESS} from "./common";


export default function Projects({tagsList, projectsList}) {

    const [nameFilter, setNameFilter] = useState("");

    const [selectedProjectTypes, setSelectedProjectTypes] = useState(["Official", "Proposition"]);
    const [selectedTags, setSelectedTags] = useState([]);

    const typeFilteredProjectsList = projectsList.filter((project) => {
        return selectedProjectTypes.includes(project.project_type);
    });

    const nameFilteredProjectsList = (nameFilter.trim().length > 0) ? typeFilteredProjectsList.filter((project) => {
        return project.title.toLowerCase().includes(nameFilter.toLowerCase());
    }) : typeFilteredProjectsList;

    const tagFiltered = (selectedTags.length === 0) ? nameFilteredProjectsList : nameFilteredProjectsList.filter((project) => {
        let shouldBeIncluded = false;
        selectedTags.forEach((tag) => {
           if(project.tags.includes(tag)) {
               shouldBeIncluded = true;
           }
        });

        return shouldBeIncluded;
    });

    return <Container maxWidth={"lg"}>
        <SearchBar tags={tagsList} selectedProjectTypes={selectedProjectTypes}
                   setSelectedProjectTypes={setSelectedProjectTypes}
                   selectedTags={selectedTags} setSelectedTags={setSelectedTags}
                   nameFilter={nameFilter} setNameFilter={setNameFilter}
        />
        <ProjectList projectsList={tagFiltered}/>
    </Container>
}
