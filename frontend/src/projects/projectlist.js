import React from "react";
import ProjectTile from "./projecttile";

const projects = [
    {
        project_name: "Test",
        project_type: "Official",
        post_date: "19.10.2023",
        vote_date: "30.10.2023",
        description: "lorem ipsum dolor sit amet",
    },
    {
        project_name: "Test 2",
        project_type: "Official",
        post_date: "19.10.2023",
        vote_date: "30.10.2023",
        description: "lorem ipsum dolor sit amet razy dwa i chuj",
    },
    {
        project_name: "Test 3",
        project_type: "Proposition",
        post_date: "19.10.2023",
        vote_date: "30.10.2023",
        description: "lorem ipsum dolor sit amet razy dwa i chuj aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    }
]

export default function ProjectList() {
    return <div>
        {projects.map((project) => {
            return <ProjectTile
                project_name={project.project_name}
                project_type={project.project_type}
                post_date={project.post_date}
                vote_date={project.vote_date}
                description={project.description}
            />
        })}
    </div>
}