import { FETCH_USER,START_LOADING, END_LOADING } from '../constants/actionTypes.js';
import * as api from '../api/index.js';

export const getUser = (id) => async (dispatch) => {
    try {
      dispatch({type: START_LOADING});
      
      const { data } = await api.fetchUser(id);
      //console.log("getUser action")
      dispatch({ type: FETCH_USER, payload: data });
      //console.log(data)
      dispatch({type: END_LOADING});
      
    } catch (error) {
      console.log(error);
    }
  };

