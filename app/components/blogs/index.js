const express = require('express');
const ctrl = require('./blogs.ctrl');
const { blogValidation } = require('../../middleware');

const commentsRoutes = require('../comments');

const router = express.Router();
router.get('/', ctrl.getBlogs.bind(ctrl));
router.get('/:blogId', ctrl.getBlog.bind(ctrl));
router.post('/', blogValidation, ctrl.createBlog.bind(ctrl));
router.put('/:blogId', blogValidation, ctrl.updateBlog.bind(ctrl));
router.delete('/:blogId', ctrl.deleteBlog.bind(ctrl));

router.use('/:blogId/comments', commentsRoutes);

module.exports = router;
