import "./Heading.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
const Heading = (props) => {
  return (
    <div className="headingWrapper">
      <div className="heading">
        <div className="author">
          <h4>{props.author}</h4>
        </div>
        <div className="date">
          <FontAwesomeIcon className="calendar" icon={faCalendarAlt} />
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
};
export default Heading;
