import axios from "axios";

export function getData() {
  return axios.get("data.json").then((response) => response);
}
