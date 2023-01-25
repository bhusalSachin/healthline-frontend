import { useEffect } from "react";
import AddDepartmentForm from "../../components/admin/AddDepartment";
import DepartmentList from "../../components/admin/DepartmentList";
import axios from "axios";
import Hospital from "../../components/admin/Hospital";
import { HospitalProvider } from "../../contexts/hospitalContextProvider";
import Login from "./login";
import { useRouter } from "next/router";

//this will be the main page of the admin console
//let's list all the departments with the doctors within it
const Admin = () => {
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    const localAdminToken = localStorage.getItem("token");

    // if (localAdminToken) setAdminToken(localAdminToken);
    if (!localAdminToken) {
      router.push("/admin/login");
      // window.alert("Please login!");
    }
  }, []);
  return (
    <HospitalProvider id={id}>
      <Hospital />
    </HospitalProvider>
  );
};

export default Admin;
