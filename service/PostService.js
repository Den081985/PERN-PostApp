const { Post, User } = require("../models/models");
const fileService = require("./FileService");

class PostService {
  //сервис-функция создания поста
  async create(post) {
    // const file_name = fileService.saveFile(pic);

    const created_post = await Post.create(post);
    // console.log(file_name);
    return created_post;
  }
  //получение всех постов
  async getAll() {
    const posts = await Post.findAll({ include: { model: User } });
    return posts;
  }

  //получение одного поста
  async getOne(id) {
    if (!id) {
      throw new Error("id is not defined");
    }
    const post = await Post.findOne({ where: { id: id } });
    return post;
  }

  //обновление постов
  async update(post) {
    if (!post.id) {
      throw new Error("id is not found");
    }
    const updated = await Post.findOne({ where: { id: post.id } });

    await updated.update({
      author: post.author,
      title: post.title,
      content: post.content,
      picture: post.picture,
    });
    await updated.save();
    return updated;
  }

  //удаление
  async delete(id) {
    if (!id) {
      throw new Error("id is not found");
    }
    const deleted = await Post.destroy({ where: { id: id } });
    return deleted;
  }
}

module.exports = new PostService();
