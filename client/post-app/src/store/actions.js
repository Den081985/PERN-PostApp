import { SET_USER, SET_AUTH } from "./types";

export const set_auth = (value) => ({
  type: SET_AUTH,
  payload: value,
});

export const set_user = (user) => ({
  type: SET_USER,
  payload: user,
});
