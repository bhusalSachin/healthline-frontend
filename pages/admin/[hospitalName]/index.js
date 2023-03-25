// import DepartmentList from "../../components/admin/DepartmentList";
import * as cookie from "cookie";
import axios from "axios";
import NeonButton from "../../../components/admin/NeonButton";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { MdLogout } from "react-icons/md";

const HospitalAdmin = (props) => {
  const [selectedDept, setSelectedDept] = useState(null);
  const [newDeptName, setNewDeptName] = useState("");

  const { hospital } = props;
  // const { departments } = hospital.departments;
  const router = useRouter();
  const [cookie, setCookie, removeCookie] = useCookies();
  // console.log("final hospital = ", hospital);
  const logOutAdmin = () => {
    removeCookie("hospital", {
      path: "/",
    });

    router.push("/admin");
  };
  const handleAddDept = () => {
    // TODO: Implement logic to add new department to the list
  };

  const handleRemoveDept = (deptName) => {
    // TODO: Implement logic to remove department from the list
  };

  const handleEditDept = (deptName) => {
    // TODO: Implement logic to edit department name
  };

  const handleSelectDept = (deptName) => {
    setSelectedDept(deptName);
    router.push(`/admin/${hospital.username}/${deptName}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-3xl font-bold mb-10">Hospital Admin</h1>

          <div>
            <h2 className="text-xl font-bold mb-3">Departments</h2>
            <ul>
              {hospital.departments.map((dept) => (
                <li key={dept.name} className="mb-3">
                  <div className="flex items-center">
                    <div
                      className="cursor-pointer flex-grow"
                      onClick={() => handleSelectDept(dept.name)}>
                      <div className="bg-gray-200 rounded-lg px-3 py-2 hover:bg-gray-300 transition-colors duration-200">
                        {dept.name}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <input
                type="text"
                value={newDeptName}
                onChange={(e) => setNewDeptName(e.target.value)}
                placeholder="Enter department name"
                className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-teal-400"
              />
              <div className="mt-3 flex justify-end">
                <NeonButton label="Add Department" onClick={handleAddDept} />
              </div>

              <div
                className="mt-3 absolute top-0 right-5 hover:cursor-pointer"
                onClick={logOutAdmin}>
                <MdLogout size={32} color="teal" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  let adminJwtToken;
  // console.log("saved cookie = ", context.req.headers.cookie);
  if (context.req.headers.cookie) {
    // console.log(cookie.parse(context.req.headers.cookie));
    adminJwtToken = cookie.parse(context.req.headers.cookie);
  } else {
    return {
      redirect: {
        permanent: false,
        destination: `/admin/login?user=${context.query.hospitalName}`,
      },
      props: {},
    };
  }
  // console.log("hospitalName context query = ", context.query);
  try {
    const response = await axios.post(
      "http://localhost:8000/hospital/enter",
      { username: context.query.hospitalName },
      {
        headers: { Authorization: `Bearer ${adminJwtToken.hospital}` },
      }
    );
    // console.log("response.data = ", response.data.message);
    if (response.data.success) {
      return {
        props: { hospital: response.data.message },
      };
    } else {
      return {
        redirect: {
          permanent: false,
          destination: `/admin/login?user=${context.query.hospitalName}`,
        },
        props: {},
      };
    }
  } catch (e) {
    // console.log("caught error ", e);
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
      props: {},
    };
  }
}

export default HospitalAdmin;
