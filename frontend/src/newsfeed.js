import * as React from 'react';
import { useEffect } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { SERVER_ADDRESS } from './common';

function NewsPost({title, content, date, author}) {
    return (
        <Card 
            sx={{
                width: '80vw',
                margin: '25px auto',
                borderTopRightRadius: '50px',
                borderTopLeftRadius: '50px',
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
              }}
        >
            <CardContent>
                <Box sx={{
                    'margin': '20px 0',
                }}>
                    <Typography variant="h4" align="center">{title}</Typography>
                    <Typography align="center" color="grey">{date}</Typography>
                </Box>

                <Typography sx={{padding: "0 20px", fontSize: "1.3rem"}}>{content}</Typography>
                <Typography sx={{fontSize: "1.2rem"}} align='right'>{author}</Typography>
            </CardContent>
        </Card>
    )
}

export default function Newsfeed() {
    const [posts, setPosts] = React.useState([]);

    useEffect(() => {
        fetch(`${SERVER_ADDRESS}/getAnnouncements`)
            .then(res => res.json())
            .then(json => {
                setPosts(json);
            })
            .catch(err => {
                console.error(`Fetch error occured /getAnnouncements endpoint: ${err}`);
                setPosts([]);
            });
    }, []);
 
    return (
        <ul>
            {posts.map((item, index) => (
                <NewsPost
                    key={index}
                    {...item}
                />
            ))}
        </ul>
    )
}
