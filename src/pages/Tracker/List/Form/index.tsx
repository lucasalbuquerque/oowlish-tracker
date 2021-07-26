import React, { useState, useCallback } from 'react';
import Stack from '@material-ui/core/Stack';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";
import trackerSchema, { TrackerSchema } from '../../../../settings/yup/schemas/trackerSchema';
import { yupResolver } from "@hookform/resolvers/yup";
import getErrorMessage from '../../../../utils/getErrorMessage';
import api from '../../../../services/api';
import { FormProps } from './types';

const Form: React.FC<FormProps> = ({
  handleAddRow
}) => {
  
  const [showForm, setShowForm] = useState<Boolean>(false);

  const {
    register,
    handleSubmit,
    formState,
  } = useForm<TrackerSchema>({
    resolver: yupResolver(trackerSchema),
    mode: "all",
  });

   const onSubmit = useCallback(async (data: TrackerSchema) => {
     try {
       const response = await api.post("/tracker", data);
       console.log("response", response.data)
       handleAddRow(data);
     } catch(err){
       console.error(err);
     }
   }, [handleAddRow]);

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
                error={Boolean(formState.errors.description)}
                helperText={
                  getErrorMessage(
                    "description",
                    formState?.errors,
                  )
                }
                {...register("description")}
            />    
            <TextField
                id="time"
                label="Time entry"
                type="time"
                defaultValue="08:00"
                error={Boolean(formState.errors.startTime)}
                helperText={
                  getErrorMessage(
                    "startTime",
                    formState?.errors,
                  )
                }
                {...register("startTime")}
            />
            <TextField
                id="time"
                label="End time"
                type="time"
                defaultValue="19:00"
                error={Boolean(formState.errors.endTime)}
                helperText={
                  getErrorMessage(
                    "endTime",
                    formState?.errors,
                  )
                }
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