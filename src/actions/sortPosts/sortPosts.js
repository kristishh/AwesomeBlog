export const sortPosts = () => {
  let data = JSON.parse(localStorage.getItem("data"));
  let updatedData = data.sort((a, b) => b.isFavorite - a.isFavorite);
  let index = 0;
  updatedData.forEach((x) => {
    x.id = index;
    index++;
  });
  localStorage.setItem("data", JSON.stringify(updatedData));
};
