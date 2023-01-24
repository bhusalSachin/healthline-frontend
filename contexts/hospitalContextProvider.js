import axios from "axios";
import { Router, useRouter } from "next/router";
import React, { useContext, useState, useEffect } from "react";

//creating a context
const HospitalContext = React.createContext();

//here is the custom useContext hook to use the
//data provided by HospitalProvider context
export const useHospital = () => {
  return useContext(HospitalContext);
};

//wrap the main admin page with this context provider
//to use the hospitalData all the routes of admin = hospital
export const HospitalProvider = ({ id, children }) => {
  // const [hospital, setHospital] = useState({
  //   _id: null,
  //   name: "sacin",
  //   address: "",
  //   departments: [],
  // });
  const [hospital, setHospital] = useState(null);
  const router = useRouter();
  //let's fetch details of the hospital
  //provided by the hospitalId in the prop
  //hospitalId = 63c54cd37ba6802e07ea39a4 (demo hospital, must be saved in the local)
  //go to admin/Index.js to pass the hospitalId
  useEffect(() => {
    const getHospital = async (id) => {
      try {
        const response = await axios.post(
          "http://localhost:8000/hospital/gethospitalbyid",
          { hospitalId: id }
        );
        console.log("response = ", response);
        return response;
      } catch (err) {
        window.alert("Sorry! couldn't fetch the details, try reloading..");

        return null;
      }
    };

    getHospital(id)
      .then((response) => {
        if (response.data.success) {
          setHospital(response.data.message);
          console.log("Hospital = ", hospital);
        } else {
          router.push("/");
          window.alert(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        window.alert("Sorry! couldn't fetch the details, try reloading..");
      });
  }, [id]);

  return (
    <HospitalContext.Provider value={hospital}>
      {children}
    </HospitalContext.Provider>
  );
};
