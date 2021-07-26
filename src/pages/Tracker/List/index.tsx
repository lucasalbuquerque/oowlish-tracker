import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import Page from '../../../components/Page';
import Table from './Table';
import Form from './Form';
import { TrackerSchema } from '../../../settings/yup/schemas/trackerSchema';
import api from '../../../services/api';

const List: React.FC = () => {

  const [rows, setRows] = useState<TrackerSchema[]>([]);

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

  return (
    <Page title="Tracker List">
       <Container>
        <Form handleAddRow={handleAddRow} />
        {rows.length && <Table data={rows} />}
       </Container>
    </Page>
  );
}

export default List;