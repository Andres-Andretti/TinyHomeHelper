const express = require('express')
const mongoose = require('mongoose')

const { getPosts, createPost, updatePost, deletePost, likePost } = require('../controllers/controller.posts.js')

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost)

module.exports = router; 
