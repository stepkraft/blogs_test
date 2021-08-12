class BlogsController {
    getBlogs(req, res) {
      res.send('getBlogs works!');
    }

    createBlog(req, res) {
        const {body: payload} = req;

        res.send('createBlog works!', payload);

        // return this.getUserInfo(req)
        //     .then(this.favoritesService.setFavorites(payload))
        //     .then(this.responseWithResult(res))
        //     .catch(this.responseWithError(res));
    }

    deleteBlog(req, res) {
        const {body: payload} = req;

        res.send('deleteBlog works!', payload);
    }

    updateBlog(req, res) {
      const {body: payload} = req;

      res.send('updateBlog works!', payload);
  }
}

module.exports = new BlogsController();
