import axios from "axios";

export function getDataAxios() {
  return axios.get("data.json").then((response) => response);
}
