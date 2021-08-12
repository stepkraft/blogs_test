const express = require('express');
const ctrl = require('./blogs.ctrl');

const router = express.Router();
router.get('/', ctrl.getBlogs.bind(ctrl));
router.post('/', ctrl.createBlog.bind(ctrl));
router.put('/:blogId', ctrl.updateBlog.bind(ctrl));
router.delete('/:blogId', ctrl.deleteBlog.bind(ctrl));

module.exports = router;
