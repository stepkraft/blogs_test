const express = require('express');
const ctrl = require('./comments.ctrl');

const router = express.Router({mergeParams: true});
router.get('/', ctrl.getBlogComments.bind(ctrl));
router.get('/:commentId', ctrl.getBlogComment.bind(ctrl));
router.post('/', ctrl.createBlogComment.bind(ctrl));
router.put('/:commentId', ctrl.updateBlogComment.bind(ctrl));
router.delete('/:commentId', ctrl.deleteBlogComment.bind(ctrl));

module.exports = router;
