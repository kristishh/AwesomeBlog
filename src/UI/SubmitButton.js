import "./SubmitButton.css";

const SubmitButton = (props) => {
  return (
    <div className="submitButtonWrapper">
      <button type="submit" onClick={props.onSubmit}>
        Post
      </button>
    </div>
  );
};
export default SubmitButton;
