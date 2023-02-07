import axios from "axios";

export function getComments() {
  return axios.get("./data.json").then((response) => response);
}
