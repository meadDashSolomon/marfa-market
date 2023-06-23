import { Stack, Typography } from '@mui/material';
import Item from "./Item.tsx";
import { useState } from 'react';

function ItemScroller() {
  const [data, setData] = useState([0,1]);

  return (
    <div style={{height: 'justify-content'}}>
      <Typography>Title</Typography>
      <Stack direction={'row'} spacing={2}>
        {
          data.map(() => {
            return <Item/>
          })
        }
      </Stack>
    </div>
  )
}

export default ItemScroller;