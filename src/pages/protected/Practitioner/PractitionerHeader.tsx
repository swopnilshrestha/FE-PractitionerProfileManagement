import { PROTECTED_ROUTE } from "../../../constants/routes";
import { FC } from "react";
import { AiOutlineUser, AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";
import interpolate from "pinterpolate";
import {
  matchPath,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

interface Props {
  title?: string;
  icon?: JSX.Element;
}
const PractitionerHeader: FC<Props> = ({ title, icon }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const isAddRoute = !!matchPath(
    { path: PROTECTED_ROUTE.ADD_PRACTITIONER },
    location.pathname
  );

  const isViewRoute = !!matchPath(
    { path: PROTECTED_ROUTE.VIEW_PRACTITIONER },
    location.pathname
  );

  const renderActionButton = () => {
    if (isAddRoute) {
      return (
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate(PROTECTED_ROUTE.ADD_PRACTITIONER)}
        >
          <AiOutlinePlus />
          <span className="p-3">Add Practitioner</span>
        </button>
      );
    }
    if (isViewRoute) {
      if (!id) {
        return;
      }

      const redirectUrl = interpolate(PROTECTED_ROUTE.UPDATE_PRACTITIONER, {
        id,
      });

      return (
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate(redirectUrl)}
        >
          <AiOutlineEdit />
          <span className="p-3">Update Practitioner</span>
        </button>
      );
    }
  };

  return (
    <div className="d-flex" style={{ justifyContent: "space-between" }}>
      <div className="p-2">
        <h3>
          <>{icon ?? <AiOutlineUser color="blue" />}</>
          <span className="p-3">{title ?? "Practitioner List"}</span>
        </h3>
      </div>
      {renderActionButton()}
    </div>
  );
};

export default PractitionerHeader;
