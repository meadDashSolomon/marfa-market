import ItemScroller from "./ItemScroller";
import { Stack } from "@mui/material";
export default function Related() {
  return (
    <div>
      <Stack sx={{ height: '100%' }}
        justifyContent="center"
        alignItems="center">
        <ItemScroller title={'RELATED PRODUCTS'}/>
        <br/>
        <ItemScroller title={'YOUR OUTFIT'}/>
      </Stack>
    </div>
  );
}