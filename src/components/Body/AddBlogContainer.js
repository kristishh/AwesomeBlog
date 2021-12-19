import { useState } from "react";
import SubmitButton from "../../UI/SubmitButton";
import CheckBox from "./components/CheckBox";
import Description from "./components/Description";
import InputAuthor from "./components/InputAuthor";
import InputDate from "./components/InputDate";
import "./AddBlogContainer.css";
import Title from "./components/Title";
import { addPost } from "../../actions/addPost/addPost";
const AddBlogContainer = () => {
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("2021-12-10");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [isChecked, setCheck] = useState(false);
  const [isAuthorEntered, setIsAuthorEntered] = useState("");
  const [isDescEntered, setIsDescEntered] = useState("");
  const [isDateProper, setIsDateProper] = useState("");
  const [isTitleEntered, setIsTitleEntered] = useState("");
  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const descChangeHandler = (e) => {
    setDesc(e.target.value);
  };
  const checkboxHandler = (e) => {
    setCheck(!isChecked);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (author.trim().length === 0) {
      setIsAuthorEntered(<p className="error">Please enter name!</p>);
    } else {
      setIsAuthorEntered("");
    }
    if (title.trim().length === 0) {
      setIsTitleEntered(<p className="error">Please enter title!</p>);
    } else {
      setIsTitleEntered("");
    }
    if (desc.trim().length === 0) {
      setIsDescEntered(<p className="error">Please enter description!</p>);
    } else {
      setIsDescEntered("");
    }
    if (Number(date.split("-")[0]) <= 2019) {
      setIsDateProper(<p className="error">Please enter valid date!</p>);
    } else {
      setIsDateProper("");
    }
    if (author !== "" && date !== "" && title !== "" && desc !== "") {
      setAuthor("");
      setDesc("");
      setTitle("");
      setDate("2021-12-10");
      isChecked === true ? setCheck(!isChecked) : setCheck(isChecked);
      addPost(author, date, title, desc, isChecked);
    }
  };

  return (
    <div className="addBlogContainerWrapper">
      <form onSubmit={submitHandler}>
        <InputAuthor onChangeHandler={authorChangeHandler} name={author} />
        {isAuthorEntered}

        <InputDate value={date} onChangeHandler={dateChangeHandler} />
        {isDateProper}

        <Title name={title} onChangeHandler={titleChangeHandler} />
        {isTitleEntered}

        <Description value={desc} onChangeHandler={descChangeHandler} />
        {isDescEntered}

        <CheckBox checked={isChecked} checkboxHandler={checkboxHandler} />

        <SubmitButton onSubmit={submitHandler} />
      </form>
    </div>
  );
};
export default AddBlogContainer;
