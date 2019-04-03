import http from "./httpService";

const apiEndpoint = "https://jsonplaceholder.typicode.com";

export function getProducts() {
  return http.get(apiEndpoint + "/photos");
}
