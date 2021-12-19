import "./CheckBox.css";
const CheckBox = (props) => {
  return (
    <section className="fav">
      <label htmlFor="fav">
        <input
          type="checkbox"
          id="fav"
          checked={props.checked}
          onChange={props.checkboxHandler}
        />
        By clicking this, your post will be added to "Favourite"
      </label>
    </section>
  );
};
export default CheckBox;
