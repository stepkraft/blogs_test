const BlogsService = require('./blogs.service');
const BaseRestController = require('../base-ctrl');

class BlogsController extends BaseRestController {

  constructor() {
    super();
    this.service = new BlogsService();
  }

  getBlogs(req, res) {
    return this.service.getBlogs()
      .then(this.responseWithResult(res))
      .catch(this.responseWithError(res));
  }

  async getBlog(req, res) {
    const { blogId } = req.params;

    return this.service.getBlog(blogId)
      .then(this.responseWithResult(res))
      .catch(this.responseWithError(res))
  }

  async createBlog(req, res) {
    const payload = req.body;

    return this.service.createBlog(payload)
      .then(this.responseWithResult(res))
      .catch(this.responseWithError(res))
  }

  async deleteBlog(req, res) {
    const { blogId } = req.params;

    return this.service.deleteBlog(blogId)
      .then(this.responseWithResult(res))
      .catch(this.responseWithError(res))
  }

  async updateBlog(req, res) {
    const { blogId } = req.params;
    const { id, ...payload} = req.body;

    return this.service.updateBlog({ id: blogId, ...payload })
      .then(this.responseWithResult(res))
      .catch(this.responseWithError(res))
  }
}

module.exports = new BlogsController();
