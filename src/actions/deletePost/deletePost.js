import { sortPosts } from "../sortPosts/sortPosts";

export const deletePost = (id) => {
  let data = JSON.parse(localStorage.getItem("data"));
  let newData = data.filter((x) => x.id !== id);
  localStorage.setItem("data", JSON.stringify(newData));
  sortPosts();
};
