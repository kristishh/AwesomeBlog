import "./InputDate.css";

const InputDate = (props) => {
  return (
    <div className="dateWrapper">
      <div>
        <label hmtlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={props.value}
          min="2020-01-01"
          max="2024-12-31"
          onChange={props.onChangeHandler}
        ></input>
      </div>
    </div>
  );
};
export default InputDate;
