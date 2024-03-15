import { api } from "./index";

export async function getName() {
  return (await api.get("/api/name")).data;
}

export async function getArrayData() {
  return (await api.get("/api/array")).data;
}

export async function getObjectData() {
  return (await api.get("/api/object")).data;
}

/* export async function getRandomNumbers() {
  return (await api.get("/api/randomNumbers")).data;
} */
