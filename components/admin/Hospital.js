//main hospital component
//just used to redirect to the /admin/hospitalName page

import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useHospital } from "../../contexts/hospitalContextProvider";

const Hospital = () => {
  const hospital = useHospital();
  const router = useRouter();

  useEffect(() => {
    if (hospital !== null) {
      console.log("Hospital = ", hospital[0]);
      router.push(
        {
          pathname: `/admin/${hospital[0].username}`,
          query: { hospital: JSON.stringify(hospital[0]) },
        },
        `/admin/${hospital[0].username}`
      );
    }
  }, [hospital]);

  return <div>Secret Page!</div>;
};

export default Hospital;
