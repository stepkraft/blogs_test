const CommentsService = require('./comments.service');
const BaseRestController = require('../base-ctrl');

class CommentsController extends BaseRestController {

  constructor() {
    super();
    this.service = new CommentsService();
  }

  getBlogComments(req, res) {
    const { blogId } = req.params;
    return this.service.getBlogComments(blogId)
      .then(this.responseWithResult(res))
      .catch(this.responseWithError(res));
  }

  async getBlogComment(req, res) {
    const { commentId } = req.params;

    return this.service.getBlogComment(commentId)
      .then(this.responseWithResult(res))
      .catch(this.responseWithError(res))
  }

  async createBlogComment(req, res) {
    const { blogId } = req.params;
    const payload = req.body;

    return this.service.createBlogComment({ blogId, payload })
      .then(this.responseWithResult(res))
      .catch(this.responseWithError(res))
  }

  async deleteBlogComment(req, res) {
    const { blogId, commentId } = req.params;

    return this.service.deleteBlogComment({ blogId, commentId })
      .then(this.responseWithResult(res))
      .catch(this.responseWithError(res))
  }

  async updateBlogComment(req, res) {
    const { blogId, commentId } = req.params;
    const { id, ...payload} = req.body;

    return this.service.updateBlogComment({ blogId, commentId, payload })
      .then(this.responseWithResult(res))
      .catch(this.responseWithError(res))
  }
}

module.exports = new CommentsController();
