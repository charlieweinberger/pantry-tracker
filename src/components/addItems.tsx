import type { Dispatch, SetStateAction } from "react";
import { Box, Stack, Typography, Modal, TextField, Button } from "@mui/material";

interface Props {
  open: boolean;
  itemName: string;
  setItemName: Dispatch<SetStateAction<string>>;
  addItem: VoidFuncWithParameter;
  handleClose: VoidFunc;
}

export default function AddItems({ open, itemName, setItemName, addItem, handleClose }: Props): JSX.Element {
  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        width={400}
        bgcolor="white"
        border="2px solid #333"
        boxShadow={24}
        p={4}
        className="flex"
        flexDirection="column"
        gap={3}
        sx={{
          transform: "translate(-50%, -50%)"
        }}
      >

        {/* Text Box Header */}
        <Typography variant="h6">Add Item</Typography>
        
        <Stack width="100%" direction="row" spacing={2}>
        
          {/* Text Box */}
          <TextField variant="outlined" fullWidth value={itemName} onChange={(e) => {
            setItemName(e.target.value);
          }} />

          {/* Text Box Button */}
          <Button variant="outlined" onClick={() => {
            addItem(itemName);
            setItemName("");
            handleClose();
          }}>
            Add
          </Button>

        </Stack>

      </Box>
    </Modal>
  );
}