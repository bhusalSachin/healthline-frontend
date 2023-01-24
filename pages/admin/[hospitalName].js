import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import { useHospital } from "../../contexts/hospitalContextProvider";

const Hospital = () => {
  const router = useRouter();
  const { hospitalName, id } = router.query;
  return (
    <div>
      {hospitalName} Hospital with id = {id}
    </div>
  );
};

export default Hospital;
