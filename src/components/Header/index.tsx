import { HeaderApp } from "../../styles/header";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeaderApp>
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
      </HeaderApp>
    </div>
  );
};

export default Header;
