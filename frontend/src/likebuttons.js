import {Button, ButtonGroup} from "@mui/material";
import {ThumbDown, ThumbUp} from "@mui/icons-material";
import React from "react";

export default function LikeButtons({approves, disapproves, sx, size = "normal", color="primary"}) {
    return <ButtonGroup color={color} size={size} variant={"contained"} sx={sx}>
        <Button onClick={(e) => {
            e.stopPropagation();
        }}><ThumbUp sx={{mr: 1}}/> {approves}</Button>
        <Button onClick={(e) => {
            e.stopPropagation();
        }}><ThumbDown sx={{mr: 1}}/> {disapproves}</Button>
    </ButtonGroup>
}