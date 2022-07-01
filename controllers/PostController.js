const { Post, User } = require("../models/models");
const PostService = require("../service/PostService");
//контролер для постов
class PostController {
  //создание поста
  async create(req, res) {
    try {
      // const { author, title, content, picture } = req.body;
      // const post = await Post.create({ author, title, content, picture });
      // console.log(req.files);//передаем в сервис файл из запроса
      const post = await PostService.create(req.body);
      return res.status(201).json(post);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  //получение всех постов
  async getAll(req, res) {
    try {
      let { page, limit } = req.query;

      page = page || 1;

      limit = limit || 9;

      let offset = page * limit - limit;

      const posts = await Post.findAndCountAll({
        limit,
        offset,
        include: { model: User },
      });
      // const posts = await PostService.getAll(req.query);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //получение одного поста
  async getOne(req, res) {
    try {
      // const { id } = req.params;

      // if (!id) {
      //   return res.status(400).json({ message: "id is not defined" });
      // }
      // const post = await Post.findOne({ where: { id: id } });
      const post = await PostService.getOne(req.params.id);
      return res.status(200).json(post);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  //обновление постов
  async update(req, res) {
    try {
      // const { post } = req.body;

      // if (!post.id) {
      //   return res.status(400).json({ message: "id is not defined" });
      // }
      // const updated = await Post.findOne({ where: { id: post.id } });

      // await updated.update({
      //   author: post.author,
      //   title: post.title,
      //   content: post.content,
      //   picture: post.picture,
      // });
      // await updated.save();
      const updated = await PostService.update(req.body);
      return res.status(201).json(updated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //удаление
  async delete(req, res) {
    try {
      // const { id } = req.params;

      // if (!id) {
      //   return res.status(400).json({ message: "id is not defined" });
      // }
      // await Post.destroy({ where: { id: id } });
      const deleted_post = await PostService.delete(req.params.id);
      return res.status(200).json(deleted_post);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = new PostController();
