import axios from "axios";

import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  var res = await axios.get("/api/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

// equivalent as above
// export const fetchUser = () => async dispatch =>
//   dispatch({
//     type: FETCH_USER,
//     payload: await axios.get("/api/current_user")
//   });
