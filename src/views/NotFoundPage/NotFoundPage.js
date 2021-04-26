import { title_404, image_404 } from "./NotFoundPage.module.scss";

// Utils
import PNFImage from "../../images/404.jpeg";

const NotFoundPage = () => {
  return (
    <div>
      <h1 className={title_404}>Page is Not found !</h1>
      <img src={PNFImage} alt="Page is Not found" className={image_404} />
    </div>
  );
};

export default NotFoundPage;
