import { FieldErrors } from "react-hook-form";
import get from "lodash.get";

/**
  * Returns error message for a given field name.
  *
  * When yup schemas defines nested objects, `errors` may contain
  * objects such as:
  *
  * {
  *   foo: {
  *     bar: {
  *       message: "This field is required",
  *     }
  *   }
  * }
  *
  * And `name` would be something like `foo.bar`.
  *
  * @param errors The errors.
  * @param name The field name.
  */
const getErrorMessage = (
  name?: string,
  errors?: FieldErrors,
): string | undefined => {
  if (name && errors) {
    const error = get(errors, name);

    if (error) {
      return error?.message;
    }
  }

  return undefined;
};

export default getErrorMessage;
