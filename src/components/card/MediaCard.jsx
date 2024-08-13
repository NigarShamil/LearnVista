
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ title, subtitle, image }) {
    return (
        <Card
            sx={{
                height: '100%',  // Ensures the card takes the full height of the SwiperSlide
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <CardMedia
                component="img"
                alt={title}
                image={image}
                sx={{
                    height: 140,     // You can adjust this or make it responsive
                    objectFit: 'cover',
                }}
            />
            <CardContent>
                <Typography gutterBottom component="div" className='!font-bold !line-clamp-1'>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className='!text-xs'>
                    {subtitle}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
