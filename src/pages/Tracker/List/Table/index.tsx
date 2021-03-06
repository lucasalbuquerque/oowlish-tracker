import React from 'react';
import MaterialTable from '../../../../components/Table';
import { TrackerProps } from './types';

const Table: React.FC<TrackerProps> = ({
   data,
}) => {

  const columns = [
    { id: 'description', label: 'Description' },
    { id: 'startTime', label: 'Start Time' },
    { id: 'endTime', label: 'End Time' },
    { id: 'duration', label: 'Duration' }
  ];

  return  <MaterialTable columns={columns} rows={data} />;
}

export default Table;