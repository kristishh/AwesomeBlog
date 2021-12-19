import "./components/BlogCard.css";
import "./components/BlogCard.css";
import Heading from "./components/Heading";
import Content from "./components/Content";
import FavButton from "./components/FavButton";
import DelButton from "./components/DetlButton";
const BlogCard = (props) => {
  return (
    <div id={props.id}>
      <Heading author={props.author} date={props.date} />
      <hr />
      <Content title={props.title} text={props.text} />
      <div className="buttons">
        <FavButton
          favText={props.favText}
          className={props.favClass}
          onClick={props.favHandler}
        />
        <DelButton onClick={props.deleteHandler} />
      </div>
    </div>
  );
};
export default BlogCard;
