import { Stack, Typography } from '@mui/material';
import Item from "./Item.tsx";
import { useState, useEffect } from 'react';
import Request from './Request.ts';

function ItemScroller() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    Request.get().then((data) => {
      console.log(data);
      setData(data);
    })
  }, [])

  return (
    <div style={{height: 'justify-content'}}>
      <Typography>Title</Typography>
      <Stack direction={'row'} spacing={2}>
        {
          data.map((item, index) => {
            return <Item item={item} key={index}/>
          })
        }
      </Stack>
    </div>
  )
}

export default ItemScroller;