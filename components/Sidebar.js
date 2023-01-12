import classNames from "classnames";
import Link from "next/link";
import React from "react";

const menuItems = [
  { id: 1, label: "Home", link: "/" },
  { id: 2, label: "Doctors", link: "/doctors" },
  { id: 3, label: "Patients", link: "/patients" },
  { id: 4, label: "Appointments", link: "/appointments" },
  { id: 5, label: "Diagnosis", link: "/diagnosis" },
  { id: 6, label: "Prescription", link: "/prescription" },
  { id: 7, label: "Medical Store", link: "/medicalstore" },
  { id: 8, label: "Accounts", link: "/accounts" },
];

const Sidebar = () => {
  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap hover:bg-red-400"
    );
  };

  return (
    <div className="flex flex-row">
      <div className="flex flex-col bg-cyan-600 h-screen justify-between w-52 space-y-4 py-4">
        <div className="flex items-center text-white text-xl p-4">
          <h2 className="text-orange-900 font-bold font-serif">HealthLine Dashboard</h2>
        </div>
        <div className="flex flex-col flex-auto overflow-auto">
          <div className="flex flex-col items-center mt-1 justify-center">
            {menuItems.map(({ ...menu }) => {
              const classes = getNavItemClasses(menu);
              return (
                <div className={classes}>
                  <Link
                    className="flex py-4 px-3 items-center w-full h-full"
                    href={menu.link}
                  >
                    <span
                      className={classNames("text-md font-medium text-black")}
                    >
                      {menu.label}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
