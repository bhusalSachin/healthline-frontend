import React, { useState } from "react";
import axios from "axios";
import NeonButton from "../../components/admin/NeonButton";
import { IoIosReturnLeft } from "react-icons/io";
import Link from "next/link";

const editHospital = (props) => {
  const { hospital } = props;
  const initialFormData = {
    name: hospital.name ? hospital.name : "",
    address: hospital.address ? hospital.address : "",
    username: hospital.username ? hospital.username : "",
    password: hospital.password ? hospital.password : "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("sending new hospital = ", {
      newHospital: formData,
      id: hospital._id,
    });
    try {
      const response = await axios.post(
        "http://localhost:8000/hospital/edithospital",
        { newHospital: formData, id: hospital._id }
      );

      if (response.data.success) {
        setSuccess("Hospital edited successfully!");
        setFormData(initialFormData);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <form
        className="w-1/3 bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}>
        <h2 className="text-lg font-medium mb-4 text-center text-cyan-600">
          Edit Hospital
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Hospital Name
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Address
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="text"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Username
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        {success && <p className="text-green-500">{success}</p>}
        {error && <p className="text-red-500">{error}</p>}
        <NeonButton label="Submit" />
        <Link href="/super">
          <NeonButton label={<IoIosReturnLeft size={24} />} float="right" />
        </Link>
      </form>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { hospital } = context.query;
  console.log("edithospital context query = ", context.query);
  return { props: { hospital: JSON.parse(hospital) } };
};

export default editHospital;
