import React, {useEffect, useState} from "react";
import ProjectTile from "./projecttile";
import {SERVER_ADDRESS} from "../common";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Typography} from "@mui/material";

export default function ProjectList({projectsList, setSnackbarOpen, setSnackbarText}) {
    return <Grid2 container spacing={2}>
        {(projectsList.length > 0) ? projectsList.map((project, index) => {
            return <Grid2 item sm={12} md={6} key={index}>
                <ProjectTile
                    setSnackbarText={setSnackbarText}
                    setSnackbarOpen={setSnackbarOpen}
                    project_id={project.project_id}
                    project_name={project.title}
                    project_type={project.project_type}
                    post_date={project.post_date}
                    vote_date={project.vote_date}
                    description={project.content}
                    tags={project.tags}
                    approves={project.approves}
                    disapproves={project.disapproves}
                    amendments={project.amendments}
                />
            </Grid2>
        }) : (<Typography sx={{ml: 2}} color={"text.disabled"} variant={"h3"}>Brak wyników</Typography>) }
    </Grid2>;
}
