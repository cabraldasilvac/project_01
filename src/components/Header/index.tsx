import { Header_app } from "../../styles/header";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header_app>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            navigate("/peoplepage");
          }}
        >
          People
        </button>
      </Header_app>
    </div>
  );
};

export default Header;
