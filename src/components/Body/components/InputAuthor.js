import "./InputAuthor.css";
const InputAuthor = (props) => {
  return (
    <div className="authorWrapper">
      <div className="author">
        <label htmlFor="author">Author</label>
        <input
          autoFocus
          id="author"
          type="text"
          placeholder="Enter name..."
          value={props.name}
          onChange={props.onChangeHandler}
        ></input>
      </div>
    </div>
  );
};
export default InputAuthor;
