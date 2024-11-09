import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Mua <span>He </span> Xanh
          </h1>
          <p>
            Tham gia các hoạt động Mùa hè xanh là cơ hội tuyệt vời để bạn cống
            hiến cho cộng đồng, giúp đỡ những đối tượng khó khăn, và rèn luyện
            kỹ năng sống. Đây là dịp để kết nối với bạn bè, học hỏi kinh nghiệm
            thực tế và đóng góp vào sự phát triển xã hội. Hãy tham gia để tạo ra
            những kỷ niệm đáng nhớ và lan tỏa tinh thần tình nguyện!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
