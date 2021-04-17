import "./NotFoundPage.scss";

// Utils
import PNFImage from "../../images/404.jpeg";

const NotFoundPage = () => {
  return (
    <div>
      <h1 className="title-404">Page is Not found !</h1>
      <img src={PNFImage} alt="Page is Not found" className="image-404" />
    </div>
  );
};

export default NotFoundPage;
