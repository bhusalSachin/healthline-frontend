import React from "react";

const DepartmentList = ({ departments, onEdit, onDelete }) => {
  return (
    <ul className="list-none p-4">
      {departments.map((department) => (
        <li key={department.name} className="mb-4">
          <div className="bg-cyan-500 text-white p-2 rounded-md">
            {department.name}
          </div>
          <ul className="list-none">
            {department.doctors.map((doctor) => (
              <li key={doctor.name} className="py-2 flex justify-between">
                {doctor.name}
                <div className="flex">
                  <button
                    className="bg-blue-500 text-white p-2 rounded-md mr-2"
                    onClick={() => onEdit(doctor.id)}>
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white p-2 rounded-md"
                    onClick={() => onDelete(doctor.id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default DepartmentList;
