import { PROTECTED_ROUTE } from "../../../../constants/routes";
import { AiOutlineUser } from "react-icons/ai";
import logo from "../../../../assets/images/Health_Care__1_-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import UserBubble from "./UserBubble";

const Sidebar = () => {
  const navigate = useNavigate();

  const menuLogo = logo;
  const menuItems = [
    {
      path: PROTECTED_ROUTE.PRACTITIONER_LIST,
      name: "Practitioner List",
      icon: <AiOutlineUser size={17} />,
    },
  ];

  return (
    <div className="container-fluid full-height px-0 bg-light">
      <div className="d-flex flex-column align-items-sm-start min-vh-100">
        <div className="navbar-logo">
          <img alt="" src={menuLogo} className="m-0 p-0 menuLogo" />
        </div>
        <ul className="nav nav-pills" id="menu">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="navbar-items"
              onClick={() => navigate(item.path)}
            >
              {item.icon} <span className="navbar-item-text">{item.name}</span>
            </li>
          ))}
        </ul>
        <hr />
        <div className="dropdown pb-4 userBubble">
          <UserBubble />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
