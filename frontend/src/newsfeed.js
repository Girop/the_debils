import * as React from 'react';
import {useEffect} from 'react';
import {Card, CardContent, Typography, Box, Container, Stack, Chip} from '@mui/material';
import {SERVER_ADDRESS} from './common';

function NewsPost({title, content, date, author}) {
    return (<Card elevation={16}>
        <CardContent>
            <Stack spacing={1} alignItems={"center"} sx={{mb: 2}}>
                <Typography variant="h4" align="center">{title}</Typography>
                <Chip size={"small"} color={"primary"} label={"Data dodania: " + date}/>
            </Stack>

            <Typography variant={"body1"}>{content}</Typography>
            <Typography varian={"body2"} color={"text.disabled"} align='right'>{author}</Typography>
        </CardContent>
    </Card>)
}

export default function Newsfeed({setSnackbarOpen, setSnackbarText}) {
    const [posts, setPosts] = React.useState([]);

    useEffect(() => {
        fetch(`${SERVER_ADDRESS}/getAnnouncements`)
            .then(res => res.json()).catch(() => {
            setPosts([]);
        }).then(json => {
            setPosts(json);
        })
            .catch(err => {
                console.error(`Fetch error occured /getAnnouncements endpoint: ${err}`);
                setPosts([]);
            });
    }, []);

    return (<Container maxWidth={"lg"}>
        <Stack sx={{mt: "2em", mb: "2em"}} spacing={2}>
            {posts.map((item, index) => (<NewsPost
                key={index}
                {...item}
            />))}
        </Stack>
    </Container>)
}
