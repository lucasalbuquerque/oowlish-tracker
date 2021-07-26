import React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import Form from '../Form'

describe("Testing Tracker form component", () => {
    test("Should fill form fields", async () => {
        const container = render(<Form handleAddRow={() => {}} />);

        const addTime = await container.findByTestId("add_time");

        addTime.click();

        const [description, startTime, endTime] = await waitFor(() => [
            container.getByTestId("description") as HTMLInputElement,
            container.getByTestId("startTime") as HTMLInputElement,
            container.getByTestId("endTime") as HTMLInputElement,
        ]);

         act(() => {
            fireEvent.change(description, {
                target: { value: "Start to work" },
            });

            fireEvent.change(startTime, {
                target: { value: "08:00" }
            });

            fireEvent.change(endTime, {
                target: { value: "13:00" }
            });
         })

        expect(description.value).toBe("Start to work");
        expect(startTime.value).toBe("08:00");
        expect(endTime.value).toBe("13:00");
    })
})