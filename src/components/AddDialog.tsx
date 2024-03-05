import {
    Box,
    Button,
    DialogActions,
    DialogContent,
    InputLabel,
    TextField,
  } from "@mui/material";
  import Dialog from "@mui/material/Dialog";
  import DialogTitle from "@mui/material/DialogTitle";
  
  export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
  }
  
  export function AddDialog(props: SimpleDialogProps) {
    const { onClose, selectedValue, open } = props;
    
    
    const handleClose = () => {
      onClose(selectedValue);
    };
  
     
    return (
      <Dialog
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log("submit clicked")
            handleClose();
          },
        }}
        open={open}
      >
        <DialogTitle>Set Value</DialogTitle>
        <DialogContent>
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={4}
            width={300}
          >
            <TextField
              variant="standard"
              id="text_value"
              name="text_value"
              label="Text Value"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <InputLabel id="demo-simple-select-disabled-label">
              Text Input
            </InputLabel>
  
            
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
  
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    );
  }
  