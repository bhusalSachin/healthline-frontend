import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const Super = () => {
  const router = useRouter();
  const [hospitals, setHospitals] = useState([]);

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
    <div className="bg-gray-200">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-medium mb-4">Hospitals</h1>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Phone</th>
            </tr>
          </thead>
          <tbody>
            {hospitals.map((hospital) => (
              <tr key={hospital._id}>
                <td className="border px-4 py-2">{hospital.name}</td>
                <td className="border px-4 py-2">{hospital.address}</td>
                <td className="border px-4 py-2">{hospital.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link href="/super/addhospital">
          <button className="bg-cyan-500 text-white hover:bg-cyan-600 mt-[1rem] float-right">
            Add Hospital
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Super;
