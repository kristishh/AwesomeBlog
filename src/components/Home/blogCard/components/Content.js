import "./Content.css";
const Content = (props) => {
  return (
    <div className="contentWrapper">
      <div className="content">
        <h4 className="title">{props.title}</h4>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};
export default Content;
