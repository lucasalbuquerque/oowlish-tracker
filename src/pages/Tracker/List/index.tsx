import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import Page from '../../../components/Page';
import Table from './Table';
import Form from './Form';
import { TrackerSchema } from '../../../settings/yup/schemas/trackerSchema';
import api from '../../../services/api';
import moment from 'moment';
import { expected_working_hours } from '../../../constants/tracker';
import { minutesToString, stringToMinutes } from '../../../constants/moment';

const List: React.FC = () => {

  const [rows, setRows] = useState<TrackerSchema[]>([]);
  const [amount, setAmount] = useState<string>(expected_working_hours);
  const [workedHours, setWorkedHours] = useState<string>("00:00");
  const [isAbove, setIsAbove] = useState<boolean>();

  const handleAddRow = (data: TrackerSchema) => {
    setRows([...rows, data]);
  };
  
  useEffect(() => {
    async function getTrackerList() {
      try {
        const response = await api.get("/tracker");

        setRows(response.data);
      } catch(err){
        setRows([]);
      }
    }
    getTrackerList();
  }, [])

  useEffect(() => {
    if(workedHours){
      const currentAmount = minutesToString(
        stringToMinutes(workedHours) - stringToMinutes(expected_working_hours.toString())
      );
      
      setAmount(currentAmount);
    }
  }, [workedHours])

  useEffect(() => {
   if(rows.length){
      const sum = rows.reduce((acc, time) => 
        acc.add(moment.duration(time.duration)), moment.duration());

      const dateAmount = [Math.floor(sum.asHours()), sum.minutes()].join(':');
      setWorkedHours(dateAmount);
   }
  }, [rows]);

  useEffect(() => {
    if(workedHours){
      const expectedWorkingHours = stringToMinutes(expected_working_hours);
      const currentWorkedHours = stringToMinutes(workedHours);

      if(currentWorkedHours >= expectedWorkingHours){
        return setIsAbove(true);
      }

      return setIsAbove(false);
    }
  }, [workedHours])

  return (
    <Page title="Tracker List">
       <Container>
       <Typography variant="h6">
          Worked hours: {workedHours}
        </Typography>
        <Typography variant="h6">
          {isAbove ? `You are ${amount} above the expected hours to work.` : `You are ${amount} below the expected hours to work.`} 
        </Typography>
        <Form handleAddRow={handleAddRow} />
        {Boolean(rows.length) && <Table data={rows} />}
       </Container>
    </Page>
  );
}

export default List;