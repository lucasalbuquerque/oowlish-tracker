import React from 'react';
import { render, within } from '@testing-library/react';
import Table from './index'
import { trackerList } from './mock'

describe("Testing table component", () => {
    test("Should render table rows", async () => {
        const container = render(<Table data={trackerList} />);

        const tableRows = await container.findByTestId("table");

        const rows = within(tableRows);

        trackerList.forEach((item) => {
             expect(rows.getByText(item.description)).toBeInTheDocument();
        })
    })
})