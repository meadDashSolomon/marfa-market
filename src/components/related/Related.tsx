import ItemScroller from "./ItemScroller";
import { Stack } from "@mui/material";
export default function Related() {
  return (
    <div>
      <Stack sx={{ height: '100%' }}
        justifyContent="center"
        alignItems="center">
        <ItemScroller />
        <ItemScroller />
      </Stack>
    </div>
  );
}