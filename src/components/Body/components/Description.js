import "./Description.css";

const Description = (props) => {
  return (
    <div className="descWrapper">
      <div>
        <label htmlFor="text">Description</label>
        <textarea
          id="text"
          type="text"
          placeholder="Enter description..."
          value={props.value}
          onChange={props.onChangeHandler}
        ></textarea>
      </div>
    </div>
  );
};
export default Description;
