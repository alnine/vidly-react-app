import http from "./http-service";

const apiEndpoint = "/genres";

export function getGenres() {
  return http.get(apiEndpoint);
}
