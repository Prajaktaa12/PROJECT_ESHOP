export const authUser = () => {
  let user = JSON.parse(localStorage.getItem("currentuser"));
  if (user) {
    return { "x-auth-token": user };
  } else {
    return null;
  }
};

