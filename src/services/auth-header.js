const authHeader = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  let token = JSON.parse(localStorage.getItem("token"));

  if (user && token) {
    return { "x-access-token": `${token}` };
    // return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
};

export default authHeader;
