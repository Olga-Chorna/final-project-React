import { TODOES_URL } from "../config";

export function getData() {
  return fetch(TODOES_URL)
    .then(res => res.json())
}