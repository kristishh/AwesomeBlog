import "./FavButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const FavButton = (props) => {
  return (
    <div className="favourite" onClick={props.onClick}>
      <FontAwesomeIcon className={props.className} icon={faHeart} />
      <span>{props.favText}</span>
    </div>
  );
};
export default FavButton;
