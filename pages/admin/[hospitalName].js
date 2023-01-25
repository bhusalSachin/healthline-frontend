import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DepartmentList from "../../components/admin/DepartmentList";
import { useHospital } from "../../contexts/hospitalContextProvider";

const Hospital = () => {
  const router = useRouter();
  const { hospitalName, id } = router.query;

  useEffect(() => {
    const localAdminToken = localStorage.getItem("token");

    // if (localAdminToken) setAdminToken(localAdminToken);
    if (!localAdminToken) router.push("/404");
  }, []);

  return (
    <div>
      <DepartmentList departments={hospital.departments} />>
    </div>
  );
};

export default Hospital;
