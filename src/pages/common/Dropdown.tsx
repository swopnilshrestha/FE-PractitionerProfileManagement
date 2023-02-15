import { FC } from "react";

interface Props {
  isOpen: boolean;
  trigger: JSX.Element;
  menu: any[];
}
const Dropdown: FC<Props> = ({ isOpen, trigger, menu }) => {
  return (
    <div className="dropdown">
      {trigger}
      {isOpen && (
        <ul className="menu">
          {menu.map((item, index) => (
            <li key={index} className="menu-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
