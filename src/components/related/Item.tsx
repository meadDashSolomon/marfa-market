import { Card, Paper, Typography } from "@mui/material";
import { useState, useEffect } from 'react';
import Rating from "../Rating";
import Request from "./Request";

function Item( { item } ) {
  const [ rating, setRating ] = useState(3.5);
  const [ img, setImg] = useState('');
  useEffect(() => {
    if (item.id !== undefined) {
      Request.getStyles(item.id).then((res) => {
        setImg(res.data.results[0].photos[0].thumbnail_url || '');
      });
    }
  }, []);

  useEffect(() => {
    console.log('CHANGE', item.id);
  }, [ item ])

  return (
    <Card sx={{padding: '10px',margin:'5px', minWidth:'calc(25% - 29px)'}}>
      <div className='item-card'>
      <img src={img} style={{width: '100%', height: '150px', objectFit: 'cover'}}/>
      <Typography variant='h8' sx={{color: '#124559'}}> { item.category } </Typography>
      <Typography variant='h6' sx={{color: '#124559'}}> { item.name } </Typography>
      <Typography sx={{color: '#F6AE2D'}}> ${ item.default_price } </Typography>
      <Rating item={item}/>
      </div>
    </Card>
  );
}

export default Item;