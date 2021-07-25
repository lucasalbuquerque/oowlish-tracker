export const LIST_PATH = "/";
export const NEW_PATH = "/new";

export const ROOT_DASHBOARD = "/";
export const TRACKER_PATH = "/tracker";

function path(root: string, sublink: string): string {
  return `${root}${sublink}`;
}

export const PATH_TRACKER = {
  list: path(TRACKER_PATH, LIST_PATH),
  new: path(TRACKER_PATH, NEW_PATH),
};
