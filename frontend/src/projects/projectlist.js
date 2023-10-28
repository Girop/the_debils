import React, {useEffect, useState} from "react";
import ProjectTile from "./projecttile";
import {SERVER_ADDRESS} from "../common";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function ProjectList({projectsList}) {
    return <Grid2 container spacing={2}>
        {projectsList.map((project, index) => {
            return <Grid2 item sm={12} md={6} key={index}>
                <ProjectTile
                    project_name={project.title}
                    project_type={project.project_type}
                    post_date={project.post_date}
                    vote_date={project.vote_date}
                    description={project.content}
                    tags={project.tags}
                />
            </Grid2>
        })}
    </Grid2>;
}
