import React from 'react';
import Stack from '@material-ui/core/Stack';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Form: React.FC = () => {

  return (
    <>
      <Stack sx={{ paddingBottom: 2 }} direction="row" spacing={{ xs: 0.5, sm: 1.5 }}>
        <Button variant="contained">Add Time Entry</Button>
        <Button variant="outlined">Add Break</Button>
      </Stack>
      <Stack sx={{ paddingTop: 1, paddingBottom: 2 }}>
          <form>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 3, sm: 2 }}>
            <TextField
                id="description"
                label="Description"
            />    
            <TextField
                id="time"
                label="Time entry"
                type="time"
                defaultValue="08:00"
            />
            <TextField
                id="time"
                label="End time"
                type="time"
                defaultValue="19:00"
            />
            <Button type="submit" variant="contained">Salvar</Button>
            </Stack>
          </form>
      </Stack>
    </>
  );
}

export default Form;