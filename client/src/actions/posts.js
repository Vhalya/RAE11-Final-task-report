import { FETCH_ALL, FETCH_POST, CREATE, UPDATE, DELETE, LIKE, FETCH_BY_SEARCH, START_LOADING, END_LOADING, FETCH_BY_USER } from '../constants/actionTypes';

import * as api from '../api/index.js';



export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchPost(id);
    //console.log("getPost action")
    dispatch({ type: FETCH_POST, payload: data });

    dispatch({ type: END_LOADING });

  } catch (error) {
    console.log(error);
  }
};

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchPosts(page);

    //(data);

    dispatch({ type: FETCH_ALL, payload: data });

    dispatch({ type: END_LOADING });

  } catch (error) {
    console.log(error);
  }
};

export const getPostsByUser = (userId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchPostsByUser(userId);
    //(data);
    dispatch({ type: END_LOADING });
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data)

  } catch (error) {
    console.log(error);
  }
};



export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data: { data } } = await api.fetchPostsBySearch(searchQuery);

    dispatch({ type: END_LOADING });

    //console.log(data)

    dispatch({ type: FETCH_BY_SEARCH, payload: data });

  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.createPost(post);

    navigate(`/posts/${data._id}`)
    dispatch({ type: END_LOADING });

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};