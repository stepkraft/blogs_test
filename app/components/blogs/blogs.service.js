const { Blog } = require('../../models');

class BlogsService {
  async getBlogs() {
    const blogs = await Blog.findAll();
    return this.wrapData(blogs);
  }

  async getBlog(id) {
    try {
      const blog = await Blog.findByPk(id);
      if (!blog) {
        throw {
          errorCode: '404',
          message: 'Not Found',
        }
      }
      return this.wrapData(blog);
    } catch (err) {
      throw err;
    }
  }

  async createBlog(payload) {
    try {
      const blog = await Blog.create(payload);
      return this.wrapData(blog.dataValues);
    } catch (err) {
      throw err;
    }
  }

  async deleteBlog(id) {
    try {
      const blog = await Blog.destroy({ where: { id } });
      return this.wrapData(blog);
    } catch (err) {
      throw err;
    }
  }

  async updateBlog(payload) {
    const { id, ...data } = payload;

    try {
      const blog = await Blog.update(data, { where: { id } });
      return this.wrapData(blog);
    } catch (err) {
      throw err;
    }
  }

  wrapData(data) {
    return { data };
  }
}

module.exports = BlogsService;
