"use Client";
import React from 'react';
import { Box, Grid,CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { blogsContent } from './data';

const Blog = () =>
{
    return (
        <Box sx={{width:{md:'60%',xs:'90%'},my:{md:"5rem",xs:"2rem"}, m:'0 auto'}}>
            <Grid container spacing={ 2 }>
                {
                    blogsContent.map( ( blog, index ) => (
                        <Grid item xs={ 12 } md={ 6 }>
                            <Box key={ index }>
                                <Card sx={ { maxWidth: 345 } }>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={ blog.imgUrl }
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                { blog.title }
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div">
                                                { blog.date }
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                { blog.description }
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Box>
                        </Grid>
                    ) )
                }
            </Grid>

        </Box>
    );
};

export default Blog;