import "./home.css";
import { titleImg } from "../../assests/Home-Page/home-title.svg";
import { subtitleImg } from "../../assests/Home-Page/home-subtitle.svg";
import { homebg } from "../../assests/Home-Page/homebg.png";

const Home = () => {
  return (
    <section className="home-page">
      <div className="home-page-img">
        <img
          src={require("../../assests/Home-Page/home.png")}
          alt=""
          className="homeImg"
        />
      </div>
    </section>
  );
};
export default Home;
