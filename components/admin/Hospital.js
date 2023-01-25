//main hospital component
//just used to redirect to the /admin/hospitalName page

import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useHospital } from "../../contexts/hospitalContextProvider";

const Hospital = () => {
  const hospital = useHospital();
  const router = useRouter();

  useEffect(() => {
    console.log("Hospital = ", hospital);
    if (hospital !== null)
      router.push({
        pathname: `/admin/${hospital[0].name}?id=${hospital[0]._id}`,
        query: hospital,
      });
  }, [hospital]);

  return <div>Secret Page!</div>;
};

export default Hospital;
