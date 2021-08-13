const { Comment, Blog } = require('../../models');

class CommentsService {

  async getBlogComments(blogId) {
    try {
      const blog = await Blog.findByPk(blogId, { include: [{ model: Comment }] });
      const comments = blog.dataValues.Comments;
      return this.wrapData(comments);
    } catch (err) {
      throw err;
    }
  }

  async getBlogComment(commentId) {
    try {
      const comment = await Comment.findByPk(commentId);
      return this.wrapData(comment.dataValues);
    } catch (err) {
      throw err;
    }
  }

  async createBlogComment({ blogId, payload }) {
    try {
      const comment = await Comment.create({ BlogId: blogId, ...payload });
      return this.wrapData(comment.dataValues);  
    } catch (err) {
      throw err;
    }
  }

  async deleteBlogComment({ blogId: BlogId, commentId: id }) {
    try {
      const comment = await Comment.destroy({ where: { id, BlogId } });
      return this.wrapData(comment);
    } catch (err) {
      throw err;
    }
  }

  async updateBlogComment({ blogId: BlogId, commentId, payload }) {
    const { id, ...data } = payload;

    try {
      const comment = await Comment.update(data, { where: { id: commentId, BlogId } });
      return this.wrapData(comment);
    } catch (err) {
      throw err;
    }
  }

  wrapData(data) {
    return { data };
  }
}

module.exports = CommentsService;
