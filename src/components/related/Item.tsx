import { Card, Rating, Typography } from "@mui/material";
import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';


function Item( { item } ) {
  const [ rating, setRating ] = useState(3.5);

  return (
    <Card sx={{padding: '10px'}}>
      <div className='item-card'>
      <img src={item.results ? item.results[0].photos[0].thumbnail_url : ''} style={{width: '100%', height: '150px', objectFit: 'cover'}}/>
      <Typography variant='h8' sx={{color: '#124559'}}> { item.category } </Typography>
      <Typography variant='h6' sx={{color: '#124559'}}> { item.name } </Typography>
      <Typography sx={{color: '#F6AE2D'}}> { item.default_price } </Typography>
      <Rating
        name="text-feedback"
        value={rating}
        readOnly
        precision={0.25}
        emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
      />
      </div>
    </Card>
  );
}

export default Item;