import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' }
);

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
        //console.log(req.headers.Authorization);
    }

    return req;
 });


export const fetchPost = (id) => API.get(`/posts/${id}`)
export const fetchUser = (id) => API.get(`/user/${id}`)
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsByUser = (userId) => API.get(`/posts?user=${userId}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
//export const fetchPostsByUser = (userQuery) => API.get(`/posts/search?searchQuery=${userQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);