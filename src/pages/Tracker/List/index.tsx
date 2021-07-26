import React from 'react';
import { Container } from '@material-ui/core';
import Page from '../../../components/Page';
import Table from './Table';

const List: React.FC = () => {

  const rows = [
    {
      description: 'Time Break',
      start_time: '5:38 pm',
      end_time: '6:38 pm'
    },
    {
      description: 'Daily Finish',
      start_time: '2:38 pm',
      end_time: '4:08 pm'
    }
  ]

  return (
    <Page title="Tracker List">
       <Container>
        <Table data={rows} />
       </Container>
    </Page>
  );
}

export default List;