import * as yup from "yup";
import { mixed_required_field } from "../../../constants/validations";

const trackerSchema = yup.object().shape({
  description: yup.string().required(mixed_required_field),
  startTime: yup.string().required(mixed_required_field),
  endTime: yup.string().required(mixed_required_field),
});

export interface TrackerSchema {
  id: string;
  description: string;
  startTime: string;
  endTime: string;
  duration: string;
}

export default trackerSchema;
