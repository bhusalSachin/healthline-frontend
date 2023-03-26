// import DepartmentList from "../../components/admin/DepartmentList";
import * as cookie from "cookie";
import axios from "axios";
import NeonButton from "../../../components/admin/NeonButton";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { MdLogout } from "react-icons/md";

const HospitalAdmin = (props) => {
  const { hospital } = props;
  const [newDeptName, setNewDeptName] = useState("");
  const [availState, setAvailState] = useState({
    isBloodAvail: hospital.isBloodAvail ? hospital.isBloodAvail : false,
    isBedAvail: hospital.isBedAvail ? hospital.isBedAvail : false,
    isDocAvail: hospital.isDocAvail ? hospital.isDocAvail : false,
    isAmbulAvail: hospital.isAmbulAvail ? hospital.isAmbulAvail : false,
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

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

  const handleAddDept = async () => {
    // console.log("new departmetn");
    //send request to add depart
    try {
      const response = await axios.post(
        "http://localhost:8000/department/createdepartment",
        {
          name: newDeptName,
          description: "",
          hospitalId: hospital._id,
        }
      );

      if (!response.data.success) {
        setError(response.data.message);
        setSuccess("");
      } else {
        setSuccess(response.data.message);
        setError("");
      }
    } catch (e) {
      setError(e);
    }
  };

  const handleChangeAvail = async () => {
    console.log(availState);
    try {
      const response = await axios.post(
        "http://localhost:8000/hospital/edithospital",
        {
          newHospital: {
            isBloodAvail: availState.isBloodAvail,
            isBedAvail: availState.isBedAvail,
            isDocAvail: availState.isDocAvail,
            isAmbulAvail: availState.isAmbulAvail,
          },
          id: hospital._id,
        }
      );

      if (!response.data.success) {
        setError(response.data.message);
        setSuccess("");
      } else {
        setSuccess(response.data.message);
        setError("");
      }
    } catch (e) {
      setError(e);
    }
  };

  const handleSelectDept = (deptName) => {
    setSelectedDept(deptName);
    router.push(`/admin/${hospital.username}/${deptName}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 flex flex-col justify-center sm:py-12">
      <h1 className="text-3xl font-bold mb-10 text-center">Hospital Admin</h1>
      {/* information about the hospital */}
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
        <div className="h-3/2 relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="h-1/2">
            <h2 className="text-xl font-bold mb-3">{hospital.name}</h2>
          </div>
          <div className="border p-1 flex flex-col h-1/2">
            <span>Phone: {hospital.phone}</span>
            <span>Address: {hospital.address}</span>
          </div>
          <div
            className="mt-3 absolute top-0 right-5 hover:cursor-pointer"
            onClick={logOutAdmin}>
            <MdLogout size={32} color="teal" />
          </div>
        </div>
      </div>
      {/* checklist */}
      <div className="relative py-3 sm:max-w-xl sm:mx-auto mt-4">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
        <div className="h-3/2 relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="h-1/2">
            <h2 className="text-xl font-bold mb-3">
              Services Availability at Present
            </h2>

            <div className="flex items-center">
              <div className="cursor-pointer flex-grow">
                <div className="bg-gray-200 rounded-lg px-3 py-2 hover:bg-gray-300 transition-colors duration-200">
                  <div>
                    <input
                      type="checkbox"
                      checked={availState.isBloodAvail}
                      onChange={(e) =>
                        setAvailState({
                          ...availState,
                          isBloodAvail: e.target.checked,
                        })
                      }
                    />
                    <label>Blood</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      checked={availState.isBedAvail}
                      onChange={(e) =>
                        setAvailState({
                          ...availState,
                          isBedAvail: e.target.checked,
                        })
                      }
                    />
                    <label>Bed</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      checked={availState.isDocAvail}
                      onChange={(e) =>
                        setAvailState({
                          ...availState,
                          isDocAvail: e.target.checked,
                        })
                      }
                    />
                    <label>Doctor</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      checked={availState.isAmbulAvail}
                      onChange={(e) =>
                        setAvailState({
                          ...availState,
                          isAmbulAvail: e.target.checked,
                        })
                      }
                    />
                    <label>Ambulance</label>
                  </div>
                </div>
                <div
                  className="mt-3 flex justify-end"
                  onClick={handleChangeAvail}>
                  <NeonButton label="Done" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* department list the hospital */}
      <div className="relative py-3 sm:max-w-xl sm:mx-auto mt-4">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
        <div className="h-3/2 relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="h-1/2">
            <h2 className="text-xl font-bold mb-3">Departments</h2>
            <ul className="overflow-y-auto max-h-1/2">
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
                placeholder="Enter new department name"
                className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-teal-400"
              />
              <div className="mt-3 flex justify-end" onClick={handleAddDept}>
                <NeonButton label="Add Department" />
              </div>
              {success && <p className="text-green-500">{success}</p>}
              {error && <p className="text-red-500">{error}</p>}
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
