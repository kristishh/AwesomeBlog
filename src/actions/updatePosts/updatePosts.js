import { sortPosts } from "../sortPosts/sortPosts";

export const updatePosts = (obj) => {
  console.log(obj);
  let data = JSON.parse(localStorage.getItem("data"));
  let newData = data.filter((x) => x.id !== obj.id);
  newData.push(obj);
  localStorage.setItem("data", JSON.stringify(newData));
  sortPosts();
};
