const Department = (props) => {
  return <div>Department</div>;
};

export const getServerSideProps = async (context) => {
  console.log("department context query = ", context.query);
  let adminJwtToken;
  // console.log("saved cookie = ", context.req.headers.cookie);
  if (context.req.headers.cookie) {
    // console.log(cookie.parse(context.req.headers.cookie));
    adminJwtToken = cookie.parse(context.req.headers.cookie);
  } else {
    return {
      redirect: {
        permanent: false,
        destination: `/admin/login?user=${context.query.hospitalName}`,
      },
      props: {},
    };
  }
  try {
    const response = await axios.post(
      "http://localhost:8000/hospital/enter",
      { deptName: context.query.deptName },
      {
        headers: { Authorization: `Bearer ${adminJwtToken.hospital}` },
      }
    );
  } catch (e) {
    console.log("Caught error", e);
  }
  return { props: {} };
};

export default Department;
