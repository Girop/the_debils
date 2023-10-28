import * as React from 'react';
import { useEffect } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { SERVER_ADDRESS } from './common';


function NewsPost({title, content, date, author}) {
    return (
        <Card 
            sx={{
                width: '80vw',
                margin: 'auto',
                'border-top-left-radius': '50px',
                'border-top-right-radius': '50px'
              }}
        >
            <CardContent>
                <Box sx={{
                    'margin': '20px 0',
                }}>
                    <Typography variant="h4" align="center">{title}</Typography>
                    <Typography align="center">{date}</Typography>
                </Box>

                <Typography sx={{"padding": "0 20px"}}>{content}</Typography>
                <Typography sx={{'font-size': "1.2rem"}} align='right'>{author}</Typography>
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
                console.log("News updated");
                setPosts(json);
            })
            .catch(err => {
                console.error(`Fetch error occured /getAnnouncements endpoint: ${err}`);
                setPosts([]);
            });
    }, []);
 
    return (
        <ul>
            {posts.map((i, item) => (
                <NewsPost 
                    key={i}
                    title={item.name}
                    date={item.date}
                    author={item.author}
                    content={item.content}
                />
            ))}
        </ul>
    )
}
