import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import NeonButton from "../../components/admin/NeonButton";
import { IoReturnUpForward } from "react-icons/io5";

const Super = () => {
  const router = useRouter();
  const [hospitals, setHospitals] = useState([]);

  const tableCss = {
    table: "table-auto border-black border",
    th: "px-4 py-2 border border-black text-teal-700",
    tr: "border-black border",
    td: "px-4 py-2 border border-black text-cyan-900",
  };

  useEffect(() => {
    axios
      .post("http://localhost:8000/hospital/getallhospitals")
      .then((res) => {
        if (res.data.success) setHospitals(res.data.message);
        else console.log(res.data.message);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full h-screen bg-cyan-50">
      <div className="container mx-auto p-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-medium mb-4 text-center">
          Hospitals Details
        </h1>
        <table className={tableCss.table}>
          <thead>
            <tr className={tableCss.tr}>
              <th className={tableCss.th}>Hospital Name</th>
              <th className={tableCss.th}>Address</th>
              <th className={tableCss.th}>Username</th>
              <th className={tableCss.th}>Password</th>
              <th className={tableCss.th}>Jump</th>
            </tr>
          </thead>
          <tbody>
            {hospitals.map((hospital) => (
              <tr key={hospital._id} className={tableCss.tr}>
                <td className={tableCss.td}>{hospital.name}</td>
                <td className={tableCss.td}>{hospital.address}</td>
                <td className={tableCss.td}>{hospital.username}</td>
                <td className={tableCss.td}>{hospital.password}</td>
                <td className={tableCss.td}>
                  <Link
                    href={{
                      pathname: `/admin/${hospital.username}`,
                    }}
                    replace>
                    <NeonButton
                      label={<IoReturnUpForward size={24} />}
                      transparent
                    />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link href="/super/addhospital">
          <NeonButton label={"Add Hospital"} />
        </Link>
      </div>
    </div>
  );
};

export default Super;
