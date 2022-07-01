import { $authHost } from "./index";

export const create_post = async (author, title, content, userId) => {
  const { data } = await $authHost.post("api/posts", {
    author,
    title,
    content,
    userId,
  });

  return data;
};
export const get_all = async (page, limit = 5) => {
  const { data } = await $authHost.get("api/posts", {
    params: {
      page,
      limit,
    },
  });
  return data;
};
export const get_one = async (id) => {
  const { data } = await $authHost.get(`api/posts/${id}`);
  return data;
};
export const delete_post = async (id) => {
  const { data } = await $authHost.delete(`api/posts/${id}`);
  return data;
};
