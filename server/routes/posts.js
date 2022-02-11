import express from 'express';

import { getPost, getPosts, getPostsBySearch, createPost, updatePost, likePost, deletePost, getPostsByUser  } from '../controllers/posts.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', getPosts);

router.post('/', auth, createPost);

router.get('/search', getPostsBySearch);

router.patch('/:id', auth, updatePost);

router.delete('/:id',auth, deletePost);

router.patch('/:id/likePost',auth, likePost);

router.get('/:id',getPost)

router.get('/user', getPostsByUser)


export default router;