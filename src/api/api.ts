import axios from "axios";
import { piniaStore } from "@/store/index";

const SERVER_ADDR = "http://localhost:3000";

export function postAPI(route: string, payload: any = {}): Promise<any> {
  const store = piniaStore();
  return new Promise<any>((resolve, reject) => {
    const headers: any = {};
    if (store.accessToken != null) {
      headers["Access-Token"] = store.accessToken;
    }

    axios
      .post(SERVER_ADDR + route, payload, {
        headers: headers,
      })
      .catch((error) => {
        reject(error);
      })
      .then((response) => {
        if (response == null) return;
        resolve(response);
      });
  });
}

export function getAPI(route: string, payload: any = {}): Promise<any> {
  const store = piniaStore();
  return new Promise<any>((resolve, reject) => {
    const headers: any = {};
    if (store.accessToken != null) {
      headers["Access-Token"] = store.accessToken;
    }
    if (payload != null && payload.legnth != 0)
      route = route + "?" + new URLSearchParams(payload).toString();
    axios
      .get(SERVER_ADDR + route, {
        headers: headers,
      })
      .catch((error) => {
        reject(error);
      })
      .then((response) => {
        if (response == null) return;
        resolve(response);
      });
  });
}
