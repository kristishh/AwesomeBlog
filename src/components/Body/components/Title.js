import "./Title.css";
const Title = (props) => {
  return (
    <div className="titleWrapper">
      <div>
        <label htmlFor="title">Title</label>
        <input
          autoFocus
          id="title"
          type="text"
          placeholder="Enter title..."
          value={props.name}
          onChange={props.onChangeHandler}
        ></input>
      </div>
    </div>
  );
};
export default Title;
