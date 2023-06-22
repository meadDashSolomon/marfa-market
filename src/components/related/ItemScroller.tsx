import { Grid } from '@mui/material';
import Item from "./Item.tsx";
import { useState } from 'react';

function ItemScroller() {
  const [data, setData] = useState([0,1]);

  return (
    <div style={{height: 'justify-content'}}>
      <Grid container spacing={2}>
        {
          data.map(() => {
            return <Item/>
          })
        }
      </Grid>
    </div>
  )
}

export default ItemScroller;