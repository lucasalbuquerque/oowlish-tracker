import * as yup from "yup";
import { mixed_required_field } from "../../../constants/validations";

const trackerSchema = yup.object().shape({
  description: yup.string().required(mixed_required_field),
  startTime: yup.date().required(mixed_required_field),
  endTime: yup.date().required(mixed_required_field),
});

export interface TrackerSchema {
  description: string;
  startTime: string;
  endTime: string;
}

export default trackerSchema;
