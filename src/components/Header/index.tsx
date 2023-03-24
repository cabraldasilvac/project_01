import { Header_app } from "../../styles/header";
import { useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Header_app>
        <button>Home</button>
        <button>People</button>
      </Header_app>
    </div>
  );
};

export default Header;
