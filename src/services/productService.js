import http from "./httpService";

const apiEndpoint = "https://my-json-server.typicode.com/SimaAmini/json-server/products";

export function getProducts() {
  return http.get(apiEndpoint);
}
export function getProduct(id) {
  return http.get(apiEndpoint +'/' + id);
}
