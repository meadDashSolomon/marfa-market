import { Stack, Typography, Button } from '@mui/material';
import Item from "./Item.tsx";
import React from 'react';
import Slider from './Slider.tsx';
const ItemScroller = ({ title, items }) => {

  return (
    <div style={{height: 'justify-content', width: '80%'}}>
      <Typography>{ title }</Typography>
      <br/>
      {/* <Stack direction={'row'} spacing={2}>
        {
          items.map((item, index) => {
            return <Item item={item} key={index}/>
          })
        }
      </Stack> */}
      <Slider>
        {
          items.map((item, index) => {
            return <Item item={item} key={index}/>
          })
        }
        </Slider>
    </div>
  )
};

export default ItemScroller;