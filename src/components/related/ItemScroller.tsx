import { Stack, Typography, Button } from '@mui/material';
import Item from "./Item.tsx";
import React from 'react';
import Slider from './Slider.tsx';
const ItemScroller = ({ current, title, items, type }) => {

  return (
    <div style={{height: 'justify-content', width: '80%'}}>
      <Typography>{ title }</Typography>
      <br/>
      <Slider>
        {
          items.map((item, index) => {
            return <Item type={type} current={current} item={item} key={index}></Item>
          })
        }
        </Slider>
    </div>
  )
};

export default ItemScroller;