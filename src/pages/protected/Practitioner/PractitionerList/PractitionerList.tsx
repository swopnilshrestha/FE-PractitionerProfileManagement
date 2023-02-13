import React from "react";
import PractitionerHeader from "../PractitionerHeader";
import PractitionerListTable from "./PractitionerListTable";

const PractitionerList = () => {
  return (
    <>
      <PractitionerHeader title="Practitioner List" />
      <hr />
      <PractitionerListTable />
    </>
  );
};

export default PractitionerList;
