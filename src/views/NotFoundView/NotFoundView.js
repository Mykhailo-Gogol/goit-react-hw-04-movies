import PNFImage from "../../images/404.jpeg";
import "./NotFoundView.scss";

const NotFoundView = () => {
  return (
    <div>
      <h1 className="title">Page is Not found !</h1>
      <img src={PNFImage} alt="Page is Not found" className="image" />
    </div>
  );
};

export default NotFoundView;
