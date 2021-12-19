import data from "../../data/data.json";
import { sortPosts } from "../sortPosts/sortPosts";
export const addPost = (author, date, title, desc, isChecked) => {
  let newBlog = {
    id: data.length,
    created: date,
    title: title,
    text: desc,
    author: author,
    isFavorite: isChecked,
  };
  if (localStorage.getItem("data") === null) {
    data.push(newBlog);
    localStorage.setItem("data", JSON.stringify(data));
  } else {
    let store = JSON.parse(localStorage.getItem("data"));
    store.push(newBlog);
    localStorage.setItem("data", JSON.stringify(store));
  }
  sortPosts();
};
