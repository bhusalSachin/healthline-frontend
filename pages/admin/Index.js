import axios from "axios";
import * as cookie from "cookie";

const Admin = (props) => {
  return <div>Hello admin</div>;
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
      {},
      {
        headers: { Authorization: `Bearer ${adminJwtToken.hospital}` },
      }
    );
    // console.log("response.data = ", response.data.message);
    if (response.data.success) {
      return {
        redirect: {
          permanent: false,
          destination: `/admin/${response.data.message.username}`,
        },
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
    // console.log("caught error ", e);
    return {
      redirect: {
        permanent: false,
        destination: "/admin/login",
      },
      props: {},
    };
  }
}

export default Admin;
