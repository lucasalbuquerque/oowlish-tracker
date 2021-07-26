import React, { useState, useCallback } from 'react';
import Stack from '@material-ui/core/Stack';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";
import { TrackerSchema } from '../../../../settings/yup/schemas/trackerSchema';

const Form: React.FC = () => {
  
  const [showForm, setShowForm] = useState<Boolean>(false);

  const {
    register,
    handleSubmit,
  } = useForm<TrackerSchema>({
    mode: "all",
  });

   const onSubmit = useCallback((data: any) => {
     console.log("dataa", data);
   }, []);

  return (
    <>
      <Stack sx={{ paddingBottom: 2 }} direction="row" spacing={{ xs: 0.5, sm: 1.5 }}>
        <Button variant="contained" onClick={() => setShowForm(true)}>Add Time Entry</Button>
        <Button variant="outlined" onClick={() => setShowForm(true)}>Add Break</Button>
      </Stack>
      {showForm &&
      <Stack sx={{ paddingTop: 1, paddingBottom: 2 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 3, sm: 2 }}>
            <TextField
                id="description"
                label="Description"
                {...register("description")}
            />    
            <TextField
                id="time"
                label="Time entry"
                type="time"
                defaultValue="08:00"
                {...register("startTime")}
            />
            <TextField
                id="time"
                label="End time"
                type="time"
                defaultValue="19:00"
                {...register("endTime")}
            />
            <Button type="submit" variant="contained">Salvar</Button>
            </Stack>
          </form>
      </Stack>
      }
    </>
  );
}

export default Form;