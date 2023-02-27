import DepartmentList from "../../components/admin/DepartmentList";
import * as cookie from "cookie";
import axios from "axios";
import NeonButton from "../../components/admin/NeonButton";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

const HospitalPage = (props) => {
  const { hospital } = props;
  const router = useRouter();
  const [cookie, setCookie, removeCookie] = useCookies();
  // console.log("final hospital = ", hospital);
  const logOutAdmin = () => {
    removeCookie("hospital", {
      path: "/",
    });

    router.push("/admin");
  };
  return (
    <div>
      <DepartmentList departments={hospital.departments} />
      <div className="p-4 float-right" onClick={logOutAdmin}>
        <NeonButton label="logout" />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  let adminJwtToken;
  // console.log("saved cookie = ", context.req.headers.cookie);
  if (context.req.headers.cookie) {
    // console.log(cookie.parse(context.req.headers.cookie));
    adminJwtToken = cookie.parse(context.req.headers.cookie);
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/admin/login",
      },
      props: {},
    };
  }
  try {
    const response = await axios.post(
      "http://localhost:8000/hospital/enter",
      { username: context.query.hospitalName },
      {
        headers: { Authorization: `Bearer ${adminJwtToken.hospital}` },
      }
    );
    // console.log("response.data = ", response.data.message);
    if (response.data.success) {
      return {
        props: { hospital: response.data.message },
      };
    } else {
      return {
        redirect: {
          permanent: false,
          destination: "/admin/login",
        },
        props: {},
      };
    }
  } catch (e) {
    console.log("caught error ", e);
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
      props: {},
    };
  }
}

export default HospitalPage;
