import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_ROUTE } from "../../../../constants/routes";
import { userLogout } from "../../../../services/user/user.service";
import Dropdown from "../../../common/Dropdown";

const UserBubble = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const bubbleContent = (
    <span
      className="d-flex align-items-center text-white text-decoration-none dropdown-toggle userBubbleButton"
      onClick={(e) => {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
      }}
    >
      <img
        src="https://github.com/mdo.png"
        alt="hugenerd"
        width="30"
        height="30"
        className="rounded-circle"
      />
      <span className="d-none d-sm-inline mx-1 text-secondary px-2">
        User 1
      </span>
    </span>
  );

  const handleLogoutClick = () => {
    userLogout();
    navigate(AUTH_ROUTE.LOGIN);
  };

  const menuList = [<button onClick={handleLogoutClick}>Logout</button>];

  return (
    <Dropdown isOpen={isMenuOpen} trigger={bubbleContent} menu={menuList} />
  );
};

export default UserBubble;
