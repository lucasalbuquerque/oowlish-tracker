import { merge } from "lodash";

import { Theme } from "@material-ui/core/styles";

import Table from "./Table";

export default function ComponentsOverrides(theme: Theme) {
  return merge(
    Table(theme),
  );
}
