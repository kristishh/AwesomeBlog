import "./DelButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const DelButton = (props) => {
  return (
    <div className="del" onClick={props.onClick}>
      <FontAwesomeIcon className="trash" icon={faTrashAlt} />
      <span>Delete</span>
    </div>
  );
};
export default DelButton;
