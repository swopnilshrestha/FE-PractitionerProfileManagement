import { fetchPractitionerDetails } from "../../../../services/practitioner/practitioner.service";
import { Practitioner } from "../../../../types/practitioner";
import { useState, useEffect } from "react";
import { Column } from "react-table";
import Table from "../../../../components/Table";
import { log } from "console";
import { PROTECTED_ROUTE } from "../../../../constants/routes";
import interpolate from "pinterpolate";

const PractitionerListTable = () => {
  const [practitionerData, setPractitionerData] = useState<Practitioner[]>([]);

  useEffect(() => {
    fetchPractitionerList();
  }, []);

  const fetchPractitionerList = async () => {
    try {
      const response = await fetchPractitionerDetails();
      if (response) {
        setPractitionerData(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columns: Column[] = [
    {
      Header: "Name",
      accessor: "name",
      width: 250,
    },
    {
      Header: "Phone Number",
      accessor: "phoneNumber",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "City",
      accessor: "city",
    },
  ];

  const getRowRedirectURL = (practitioner: Practitioner) => {
    return interpolate(PROTECTED_ROUTE.VIEW_PRACTITIONER, {
      id: practitioner.id!,
    });
  };

  return (
    <div>
      <Table
        data={practitionerData}
        columns={columns}
        rowRedirectTo={getRowRedirectURL}
      />
    </div>
  );
};

export default PractitionerListTable;
