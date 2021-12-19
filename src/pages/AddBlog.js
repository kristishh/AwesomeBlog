import { Fragment } from "react";
import AddBlogContainer from "../components/Body/AddBlogContainer";
import Footer from "../components/Footer/Footer";
const AddBlog = () => {
  return (
    <Fragment>
      <div className="addBlog">
        <AddBlogContainer />
      </div>
      <Footer />
    </Fragment>
  );
};
export default AddBlog;
