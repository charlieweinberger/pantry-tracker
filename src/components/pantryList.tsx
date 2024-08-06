import { Box, Stack, Typography, Button } from "@mui/material";

interface Props {
  pantry: Item[];
  addItem: VoidFuncWithParameter;
  removeItem: VoidFuncWithParameter;
}

export default function PantryList({ pantry, addItem, removeItem }: Props): JSX.Element {
  return (
    <Stack width="800px" height="300px" spacing={2} overflow="auto">
      {
        pantry.map((item: Item) => (
          <Box
            key={item.name}
            width="100%"
            minHeight="150px"
            bgcolor="#f0f0f0"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding={5}
          >
            
            {/* Name */}
            <Typography variant="h3" color="#333" textAlign="center">
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </Typography>

            {/* Quantity */}
            <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={ () => addItem(item.name) }>+</Button>
              <Typography variant="h3" color="#333" textAlign="center">{item.quantity}</Typography>
              <Button variant="contained" onClick={ () => removeItem(item.name) }>-</Button>
            </Stack>

          </Box>
        ))
      }
    </Stack>
  );
}