import React, { useState } from "react";

const AddDepartmentForm = () => {
  const [department, setDepartment] = useState({ name: "", description: "" });

  const handleChange = (event) => {
    setDepartment({ ...department, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the department data to the server or save it in local storage
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <label className="block font-medium text-lg mb-2">
        Name:
        <input
          className="bg-gray-200 rounded-lg p-2 w-full"
          type="text"
          name="name"
          value={department.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="block font-medium text-lg mb-2">
        Description:
        <input
          className="bg-gray-200 rounded-lg p-2 w-full"
          type="text"
          name="description"
          value={department.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className="bg-cyan-500 text-white rounded-lg py-2 px-4 hover:bg-cyan-600">
        Add Department
      </button>
    </form>
  );
};

export default AddDepartmentForm;
