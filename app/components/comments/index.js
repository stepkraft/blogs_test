const express = require('express');
const ctrl = require('./comments.ctrl');
const { commentValidation } = require('../../middleware');

const router = express.Router({mergeParams: true});
router.get('/', ctrl.getBlogComments.bind(ctrl));
router.get('/:commentId', ctrl.getBlogComment.bind(ctrl));
router.post('/', commentValidation, ctrl.createBlogComment.bind(ctrl));
router.put('/:commentId', commentValidation, ctrl.updateBlogComment.bind(ctrl));
router.delete('/:commentId', ctrl.deleteBlogComment.bind(ctrl));

module.exports = router;
