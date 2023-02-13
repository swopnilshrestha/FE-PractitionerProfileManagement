import { Outlet } from "react-router-dom";
import logo from "../../assets/images/clay-banks-cEzMOp5FtV4-unsplash.jpg";

const Authentication = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 background_image" />
        <div className="col-md-6 my-auto">
          <div className="w-50 px-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
