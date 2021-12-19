import "./HomeContainer.css";
import BlogCard from "./blogCard/BlogCard";
import { deletePost } from "../../actions/deletePost/deletePost";
import { useState } from "react";
import { updatePosts } from "../../actions/updatePosts/updatePosts";
import data from "../../data/data.json";
import { sortPosts } from "../../actions/sortPosts/sortPosts";
const HomeContainer = (props) => {
  if (localStorage.getItem("data") === null) {
    localStorage.setItem("data", JSON.stringify(data));
    sortPosts();
  }
  const [blogs, setBlogs] = useState(JSON.parse(localStorage.getItem("data")));
  console.log(blogs);
  let renderedBlogs = blogs.map((blog) => {
    let favText = blog.isFavorite
      ? "Remove from favourite"
      : "Add to Favourite";
    let favClass = blog.isFavorite ? "hide" : "heart";
    let deleteHandler = () => {
      deletePost(blog.id);
      setBlogs(JSON.parse(localStorage.getItem("data")));
    };
    let favHandler = () => {
      let obj = {
        id: blog.id,
        created: blog.created,
        title: blog.title,
        text: blog.text,
        author: blog.author,
      };
      if (blog.isFavorite) {
        obj.isFavorite = false;
      } else {
        obj.isFavorite = true;
      }
      console.log(obj.isFavorite);
      updatePosts(obj);
      setBlogs(JSON.parse(localStorage.getItem("data")));
    };
    return (
      <div className="cardWrapper" key={blog.id}>
        <BlogCard
          author={blog.author}
          date={blog.created}
          title={blog.title}
          text={blog.text}
          favText={favText}
          favClass={favClass}
          favHandler={favHandler}
          deleteHandler={deleteHandler}
        />
      </div>
    );
  });
  return <div className="homeContainer">{renderedBlogs}</div>;
};
export default HomeContainer;
