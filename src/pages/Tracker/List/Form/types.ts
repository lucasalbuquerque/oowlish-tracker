import { TrackerSchema } from "../../../../settings/yup/schemas/trackerSchema";

export interface FormProps {
    handleAddRow: (data: TrackerSchema) => void;
}