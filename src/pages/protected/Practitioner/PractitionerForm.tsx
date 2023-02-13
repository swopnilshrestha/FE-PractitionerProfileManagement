import PractitionerHeader from "./PractitionerHeader";
import { AiOutlineUserAdd, AiOutlineUser } from "react-icons/ai";
import { useFormik } from "formik";
import { practitionerSchema } from "../../../schemas/practitionerSchema";
import {
  createPractitioner,
  fetchPractitionerDetailsById,
  updatePractitioner,
} from "../../../services/practitioner/practitioner.service";
import { PROTECTED_ROUTE } from "../../../constants/routes";
import {
  matchPath,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { Practitioner } from "../../../types/practitioner";

const PractitionerForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [initialValues, setInitialValues] = useState({
    email: "",
    name: "",
    phoneNumber: "",
    city: "",
  });

  const isViewRoute = !!matchPath(
    { path: PROTECTED_ROUTE.VIEW_PRACTITIONER },
    location.pathname
  );
  const isAddRoute = !!matchPath(
    { path: PROTECTED_ROUTE.ADD_PRACTITIONER },
    location.pathname
  );

  const headerTitle = isAddRoute ? "Add Practitioner" : initialValues.name;
  const headerIcon = isAddRoute ? (
    <AiOutlineUserAdd color="blue" />
  ) : (
    <AiOutlineUser color="blue" />
  );

  useEffect(() => {
    fetchPractitioner();
  }, []);

  const fetchPractitioner = async () => {
    try {
      if (id) {
        const response = await fetchPractitionerDetailsById(+id);
        if (response) {
          setInitialValues(response);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const practitionerForm = useFormik({
    initialValues: initialValues,
    validationSchema: practitionerSchema,
    enableReinitialize: true,
    onSubmit: async (values: Practitioner) => {
      if (isAddRoute) {
        handleCreate(values);
      } else {
        handleUpdate(values);
      }
    },
  });

  const handleCreate = async (data: Practitioner) => {
    try {
      const response = await createPractitioner(data);
      if (response) {
        navigate(PROTECTED_ROUTE.PRACTITIONER_LIST);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (data: Practitioner) => {
    try {
      if (data && data.id) {
        const response = await updatePractitioner(data.id, data);
        if (response) fetchPractitioner();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <PractitionerHeader title={headerTitle} icon={headerIcon} />
      <hr />
      <div
        className="container-fluid"
        style={{ background: "#fff", padding: "10px" }}
      >
        <form className="p-4" onSubmit={practitionerForm.handleSubmit}>
          <div className="row form-row">
            <div className="form-group col-md-6">
              <label>Name</label>
              <input
                id="name"
                type="text"
                className="form-control"
                value={practitionerForm.values.name}
                onChange={practitionerForm.handleChange}
                disabled={isViewRoute}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Email</label>
              <input
                id="email"
                type="email"
                className="form-control mt-1"
                value={practitionerForm.values.email}
                disabled={isViewRoute}
                onChange={practitionerForm.handleChange}
              />
            </div>
          </div>
          <div className="row form-row pt-3">
            <div className="form-group col-md-5">
              <label>Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                className="form-control"
                value={practitionerForm.values.phoneNumber}
                disabled={isViewRoute}
                onChange={practitionerForm.handleChange}
              />
            </div>
            <div className="form-group col-md-5">
              <label>City</label>
              <input
                id="city"
                type="text"
                className="form-control"
                value={practitionerForm.values.city}
                onChange={practitionerForm.handleChange}
                disabled={isViewRoute}
              />
            </div>
          </div>
          {!isViewRoute && (
            <div className="row">
              <div className="d-flex justify-content-end pt-3">
                <button className="btn btn-light">Reset</button>
                <button className="btn btn-success" type="submit">
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default PractitionerForm;
