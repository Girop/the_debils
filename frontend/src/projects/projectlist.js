import React, {useEffect, useState} from "react";
import ProjectTile from "./projecttile";
import {SERVER_ADDRESS} from "../common";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function ProjectList() {
    const [projectsList, setProjectsList] = useState([]);

    useEffect(() => {
        fetch(SERVER_ADDRESS + "/getProjects", {method: "GET"}).then((response) => {
            response.json().then((json) => {
                setProjectsList(json);
                console.log(json);
            });
        });
    }, []);

    return <Grid2 container spacing={2}>
        {projectsList.map((project, index) => {
            return <Grid2 item sm={12} md={6} lg={4} key={index}>
                <ProjectTile
                    project_name={"Placeholder"}
                    project_type={project.project_type}
                    post_date={project.post_date}
                    vote_date={project.vote_date}
                    description={project.content}
                />
            </Grid2>
        })}
    </Grid2>;

}