import { Outlet } from "react-router-dom";
import Sidebar from "./layout/Sidebar";

const Home = () => {
  return (
    <div className="App">
      <main className="container-fluid bg-grey-base full-height">
        <div className="row full-height ">
          <div className="col-2 px-0">
            <Sidebar />
          </div>
          <div className="col-10 px-5 py-4">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
